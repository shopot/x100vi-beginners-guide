import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Переключить тему" disabled>
        <span className="theme-icon">🌙</span>
      </button>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="theme-toggle"
      aria-label={
        isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'
      }
      title={isDark ? 'Светлая тема' : 'Темная тема'}
    >
      <span className="theme-icon">{isDark ? '☀️' : '🌙'}</span>
    </button>
  )
}
