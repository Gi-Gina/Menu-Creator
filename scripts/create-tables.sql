-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create meal_plans table
CREATE TABLE IF NOT EXISTS meal_plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  prep_time TEXT NOT NULL,
  total_meals INTEGER NOT NULL,
  calories_range TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  difficulty TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  author_id UUID REFERENCES profiles(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create recipes table
CREATE TABLE IF NOT EXISTS recipes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  prep_time TEXT NOT NULL,
  cook_time TEXT NOT NULL,
  servings INTEGER NOT NULL,
  calories INTEGER NOT NULL,
  rating DECIMAL(3,2) DEFAULT 0,
  difficulty TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  ingredients JSONB NOT NULL DEFAULT '[]',
  instructions JSONB NOT NULL DEFAULT '[]',
  nutrition JSONB NOT NULL DEFAULT '{}',
  author_id UUID REFERENCES profiles(id) NOT NULL,
  meal_plan_id UUID REFERENCES meal_plans(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_favorites table
CREATE TABLE IF NOT EXISTS user_favorites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) NOT NULL,
  meal_plan_id UUID REFERENCES meal_plans(id),
  recipe_id UUID REFERENCES recipes(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT unique_user_meal_plan UNIQUE(user_id, meal_plan_id),
  CONSTRAINT unique_user_recipe UNIQUE(user_id, recipe_id),
  CONSTRAINT check_favorite_type CHECK (
    (meal_plan_id IS NOT NULL AND recipe_id IS NULL) OR
    (meal_plan_id IS NULL AND recipe_id IS NOT NULL)
  )
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Meal plans are viewable by everyone" ON meal_plans
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create meal plans" ON meal_plans
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can update their own meal plans" ON meal_plans
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Recipes are viewable by everyone" ON recipes
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create recipes" ON recipes
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can update their own recipes" ON recipes
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Users can view their own favorites" ON user_favorites
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own favorites" ON user_favorites
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites" ON user_favorites
  FOR DELETE USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_meal_plans_author ON meal_plans(author_id);
CREATE INDEX IF NOT EXISTS idx_meal_plans_tags ON meal_plans USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_recipes_author ON recipes(author_id);
CREATE INDEX IF NOT EXISTS idx_recipes_meal_plan ON recipes(meal_plan_id);
CREATE INDEX IF NOT EXISTS idx_recipes_tags ON recipes USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_user_favorites_user ON user_favorites(user_id);
