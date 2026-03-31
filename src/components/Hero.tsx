import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const scrolled = window.scrollY
      parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px) scale(${1 + scrolled * 0.0002})`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToCollections = () => {
    document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="/images/hero-jewelry.png"
          alt="Kemi Collection luxury jewelry"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero-overlay)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-in">
          <p className="mb-4 text-xs tracking-[0.5em] text-primary md:text-sm">
            LUXURY JEWELRY
          </p>
          <h1 className="mb-6 font-display text-4xl font-light leading-tight tracking-wide text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Timeless Elegance,
            <br />
            <span className="text-gradient-gold italic">Crafted for You</span>
          </h1>
          <div className="section-divider mx-auto mb-8" />
          <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Discover handcrafted pieces that embody sophistication
            and enduring beauty, designed for those who appreciate the finest.
          </p>
          <Button
            variant="gold"
            size="xl"
            onClick={scrollToCollections}
          >
            Explore Collection
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToCollections}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-primary"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} strokeWidth={1} />
        </button>
      </div>
    </section>
  )
}