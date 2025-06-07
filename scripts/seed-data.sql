-- Insert sample profiles (you'll need to replace with actual user IDs from auth.users)
INSERT INTO profiles (id, email, full_name, avatar_url) VALUES
  ('550e8400-e29b-41d4-a716-446655440000', 'chef.maria@example.com', 'Chef Maria Rodriguez', '/placeholder.svg?height=40&width=40'),
  ('550e8400-e29b-41d4-a716-446655440001', 'nutritionist.john@example.com', 'Dr. John Smith', '/placeholder.svg?height=40&width=40')
ON CONFLICT (id) DO NOTHING;

-- Insert sample meal plans
INSERT INTO meal_plans (id, title, description, image_url, prep_time, total_meals, calories_range, price, rating, difficulty, tags, author_id) VALUES
  (
    '660e8400-e29b-41d4-a716-446655440000',
    'Keto Power Meals',
    'A complete 7-day ketogenic meal prep plan designed to fuel your body with healthy fats and proteins while keeping carbs minimal.',
    '/placeholder.svg?height=400&width=600',
    '2 hours',
    21,
    '2000-2400',
    9.99,
    4.9,
    'Intermediate',
    ARRAY['Keto', 'High Protein', 'Low Carb'],
    '550e8400-e29b-41d4-a716-446655440000'
  ),
  (
    '660e8400-e29b-41d4-a716-446655440001',
    'Plant-Based Power',
    'Nutritious vegan meal prep focusing on whole foods, plant proteins, and vibrant vegetables.',
    '/placeholder.svg?height=400&width=600',
    '1.5 hours',
    15,
    '1600-2000',
    7.99,
    4.7,
    'Easy',
    ARRAY['Vegan', 'Plant-Based', 'Quick'],
    '550e8400-e29b-41d4-a716-446655440001'
  ),
  (
    '660e8400-e29b-41d4-a716-446655440002',
    'Mediterranean Flavors',
    'Fresh Mediterranean-inspired meals with olive oil, fish, vegetables, and whole grains.',
    '/placeholder.svg?height=400&width=600',
    '50 minutes',
    15,
    '1800-2100',
    9.99,
    4.8,
    'Easy',
    ARRAY['Mediterranean', 'Heart Healthy'],
    '550e8400-e29b-41d4-a716-446655440000'
  )
ON CONFLICT (id) DO NOTHING;

-- Insert sample recipes
INSERT INTO recipes (
  id, title, description, image_url, prep_time, cook_time, servings, calories, rating, difficulty, tags,
  ingredients, instructions, nutrition, author_id, meal_plan_id
) VALUES
  (
    '770e8400-e29b-41d4-a716-446655440000',
    'Mediterranean Chicken Bowl',
    'A nutritious and flavorful meal prep bowl featuring grilled chicken, quinoa, and fresh Mediterranean vegetables.',
    '/placeholder.svg?height=500&width=800',
    '25 min',
    '20 min',
    4,
    420,
    4.8,
    'Easy',
    ARRAY['High Protein', 'Mediterranean', 'Gluten-Free'],
    '[
      {"item": "Chicken breast", "amount": "1 lb", "note": "boneless, skinless"},
      {"item": "Quinoa", "amount": "1 cup", "note": "uncooked"},
      {"item": "Cherry tomatoes", "amount": "2 cups", "note": "halved"},
      {"item": "Cucumber", "amount": "1 large", "note": "diced"},
      {"item": "Red onion", "amount": "1/2 medium", "note": "thinly sliced"},
      {"item": "Kalamata olives", "amount": "1/2 cup", "note": "pitted"},
      {"item": "Feta cheese", "amount": "4 oz", "note": "crumbled"},
      {"item": "Olive oil", "amount": "3 tbsp", "note": "extra virgin"},
      {"item": "Lemon juice", "amount": "2 tbsp", "note": "fresh"},
      {"item": "Oregano", "amount": "1 tsp", "note": "dried"},
      {"item": "Garlic", "amount": "2 cloves", "note": "minced"},
      {"item": "Salt and pepper", "amount": "to taste", "note": ""}
    ]',
    '[
      {"step": 1, "title": "Prepare the quinoa", "description": "Rinse quinoa under cold water. In a medium saucepan, bring 2 cups of water to a boil. Add quinoa, reduce heat to low, cover and simmer for 15 minutes until water is absorbed.", "time": "15 min"},
      {"step": 2, "title": "Season and cook chicken", "description": "Season chicken breasts with salt, pepper, and oregano. Heat 1 tbsp olive oil in a large skillet over medium-high heat. Cook chicken for 6-7 minutes per side until internal temperature reaches 165°F.", "time": "15 min"},
      {"step": 3, "title": "Prepare vegetables", "description": "While chicken cooks, dice cucumber, halve cherry tomatoes, and thinly slice red onion. Set aside in separate bowls.", "time": "10 min"},
      {"step": 4, "title": "Make dressing", "description": "In a small bowl, whisk together remaining olive oil, lemon juice, minced garlic, salt, and pepper.", "time": "3 min"},
      {"step": 5, "title": "Slice chicken", "description": "Let chicken rest for 5 minutes, then slice into strips.", "time": "5 min"},
      {"step": 6, "title": "Assemble bowls", "description": "Divide quinoa among 4 meal prep containers. Top with sliced chicken, tomatoes, cucumber, red onion, olives, and feta cheese. Drizzle with dressing.", "time": "5 min"}
    ]',
    '{
      "calories": 420,
      "protein": 35,
      "carbs": 28,
      "fat": 18,
      "fiber": 6,
      "sugar": 8,
      "sodium": 580
    }',
    '550e8400-e29b-41d4-a716-446655440000',
    '660e8400-e29b-41d4-a716-446655440002'
  ),
  (
    '770e8400-e29b-41d4-a716-446655440001',
    'Keto Salmon & Asparagus',
    'Rich, flaky salmon with roasted asparagus - perfect for ketogenic meal prep.',
    '/placeholder.svg?height=500&width=800',
    '15 min',
    '20 min',
    4,
    380,
    4.9,
    'Easy',
    ARRAY['Keto', 'Low Carb', 'High Protein'],
    '[
      {"item": "Salmon fillets", "amount": "4 pieces", "note": "6 oz each"},
      {"item": "Asparagus", "amount": "2 lbs", "note": "trimmed"},
      {"item": "Olive oil", "amount": "3 tbsp", "note": ""},
      {"item": "Lemon", "amount": "1 large", "note": "sliced"},
      {"item": "Garlic", "amount": "4 cloves", "note": "minced"},
      {"item": "Salt", "amount": "to taste", "note": ""},
      {"item": "Black pepper", "amount": "to taste", "note": ""},
      {"item": "Dill", "amount": "2 tbsp", "note": "fresh, chopped"}
    ]',
    '[
      {"step": 1, "title": "Preheat oven", "description": "Preheat oven to 425°F (220°C).", "time": "5 min"},
      {"step": 2, "title": "Prepare asparagus", "description": "Trim asparagus ends and place on a baking sheet. Drizzle with 1 tbsp olive oil, season with salt and pepper.", "time": "5 min"},
      {"step": 3, "title": "Season salmon", "description": "Pat salmon dry and season with salt, pepper, and minced garlic. Drizzle with remaining olive oil.", "time": "3 min"},
      {"step": 4, "title": "Roast vegetables", "description": "Roast asparagus for 10 minutes.", "time": "10 min"},
      {"step": 5, "title": "Add salmon", "description": "Add salmon to the baking sheet with asparagus. Top with lemon slices and roast for 12-15 minutes until salmon flakes easily.", "time": "15 min"},
      {"step": 6, "title": "Finish and serve", "description": "Sprinkle with fresh dill and serve immediately or store in meal prep containers.", "time": "2 min"}
    ]',
    '{
      "calories": 380,
      "protein": 42,
      "carbs": 8,
      "fat": 20,
      "fiber": 4,
      "sugar": 4,
      "sodium": 320
    }',
    '550e8400-e29b-41d4-a716-446655440000',
    '660e8400-e29b-41d4-a716-446655440000'
  )
ON CONFLICT (id) DO NOTHING;
