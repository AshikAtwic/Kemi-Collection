import { useEffect, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useAnimations'

export function ParallaxShowcase() {
  const bgRef = useRef<HTMLDivElement>(null)
  const { ref: textRef, isVisible } = useScrollReveal<HTMLDivElement>(0.3)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const rect = bgRef.current.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      const offset = (center - viewCenter) * 0.3
      bgRef.current.style.backgroundPositionY = `${50 + offset * 0.1}%`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/parallax-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <div className="relative z-10 py-32 md:py-48">
        <div
          ref={textRef}
          className={`reveal mx-auto max-w-3xl px-6 text-center ${isVisible ? 'visible' : ''}`}
        >
          <p className="mb-4 text-[10px] tracking-[0.6em] text-primary md:text-xs">
            ARTISTRY IN EVERY DETAIL
          </p>
          <h2 className="font-display text-4xl font-light italic leading-tight tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Crafted with
            <br />
            <span className="text-gradient-gold">Precision</span>
          </h2>
          <div className="section-divider mx-auto mt-8 mb-8" />
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Each piece in the Kemi Collection undergoes over 40 hours of meticulous
            handcrafting, ensuring every facet reflects our unwavering commitment
            to excellence and beauty.
          </p>
        </div>
      </div>

      {/* Decorative gold lines */}
      <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
    </section>
  )
}