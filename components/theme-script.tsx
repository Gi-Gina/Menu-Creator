"use client"

import { useEffect } from "react"

export function ThemeScript() {
  useEffect(() => {
    // Prevent flash of unstyled content
    const script = document.createElement("script")
    script.innerHTML = `
      try {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } catch (_) {}
    `
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
