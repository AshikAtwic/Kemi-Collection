import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setIsLoading(false), 600)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative mb-8">
        <div className="loader-ring" />
        <div
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: 'var(--shadow-gold)' }}
        />
      </div>
      <h1 className="font-display text-2xl tracking-[0.3em] text-primary">
        KEMI
      </h1>
      <p className="mt-2 text-xs tracking-[0.5em] text-muted-foreground">
        COLLECTION
      </p>
    </div>
  )
}