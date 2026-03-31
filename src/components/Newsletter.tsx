import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useAnimations'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 4000)
    }
  }

  return (
    <section id="newsletter" className="relative overflow-hidden py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div
        ref={ref}
        className={`reveal relative z-10 mx-auto max-w-2xl px-6 text-center ${isVisible ? 'visible' : ''}`}
      >
        <p className="mb-3 text-[10px] tracking-[0.5em] text-primary">
          STAY CONNECTED
        </p>
        <h2 className="mb-4 font-display text-3xl tracking-wide text-foreground md:text-4xl">
          Join the Inner Circle
        </h2>
        <p className="mb-10 text-sm leading-relaxed text-muted-foreground md:text-base">
          Be the first to discover new collections, exclusive events,
          and special offers reserved for our most valued patrons.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 rounded-sm border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
          />
          <Button variant="gold" size="lg" type="submit" className="gap-2 px-6">
            <Send size={14} />
            <span className="relative z-10">Subscribe</span>
          </Button>
        </form>

        {isSubmitted && (
          <p className="mt-4 animate-fade-in text-sm text-primary">
            Welcome to the Kemi Collection family.
          </p>
        )}

        <p className="mt-6 text-[10px] tracking-wide text-muted-foreground/50">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}