import { useState, useEffect, useCallback } from 'react'
import { useScrollReveal } from '@/hooks/useAnimations'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Adriana Moretti',
    title: 'Art Collector',
    text: 'The Celestine necklace is breathtaking. Every detail speaks of masterful craftsmanship. I have never owned a piece that receives so many compliments.',
    rating: 5,
  },
  {
    name: 'James Whitfield',
    title: 'Private Client',
    text: 'Kemi Collection understood exactly what I wanted for my proposal. The custom engagement ring exceeded every expectation. Truly a once-in-a-lifetime piece.',
    rating: 5,
  },
  {
    name: 'Sophia Laurent',
    title: 'Fashion Editor',
    text: 'In an industry saturated with mass production, Kemi Collection stands apart. Their attention to detail and use of exceptional materials is remarkable.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    title: 'Entrepreneur',
    text: 'I purchased the Aurelia bracelet for our anniversary. The packaging, presentation, and the piece itself — everything was impeccable. A brand that truly delivers luxury.',
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()

  const goTo = useCallback((index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length)
  }, [current, goTo])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal mb-16 text-center ${headerVisible ? 'visible' : ''}`}
        >
          <p className="mb-3 text-[10px] tracking-[0.5em] text-primary">
            TESTIMONIALS
          </p>
          <h2 className="font-display text-3xl tracking-wide text-foreground md:text-4xl lg:text-5xl">
            Voices of Elegance
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Testimonial Slider */}
        <div className="relative mx-auto max-w-3xl">
          {/* Card */}
          <div className="glass-card rounded-lg p-8 md:p-12">
            {/* Stars */}
            <div className="mb-6 flex justify-center gap-1">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-primary text-primary"
                />
              ))}
            </div>

            {/* Quote */}
            <div
              className={`transition-all duration-500 ${
                isAnimating ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <p className="mb-8 text-center font-display text-lg italic leading-relaxed text-foreground/90 md:text-xl">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="text-center">
                <p className="font-display text-base tracking-wide text-primary">
                  {testimonials[current].name}
                </p>
                <p className="mt-1 text-xs tracking-[0.2em] text-muted-foreground">
                  {testimonials[current].title.toUpperCase()}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-primary'
                      : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}