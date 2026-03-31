import { useScrollReveal } from '@/hooks/useAnimations'

export function About() {
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div
            ref={imgRef}
            className={`reveal-left ${imgVisible ? 'visible' : ''}`}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="/images/about-craftsmanship.png"
                alt="Kemi Collection artisan craftsmanship"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* Gold accent corner */}
              <div className="absolute bottom-0 left-0 h-24 w-px bg-gradient-to-t from-primary to-transparent" />
              <div className="absolute bottom-0 left-0 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className={`reveal-right ${textVisible ? 'visible' : ''}`}
          >
            <p className="mb-3 text-[10px] tracking-[0.5em] text-primary">
              OUR STORY
            </p>
            <h2 className="mb-6 font-display text-3xl tracking-wide text-foreground md:text-4xl">
              A Legacy of
              <br />
              <span className="text-gradient-gold italic">Craftsmanship</span>
            </h2>
            <div className="section-divider mb-8" />
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              At Kemi Collection, every piece tells a story of passion and precision.
              Our master artisans bring decades of expertise to each creation,
              transforming the finest materials into wearable works of art.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
              Founded on the belief that jewelry should transcend trends, we craft
              pieces that become part of your legacy — timeless treasures passed
              from one generation to the next.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: '25+', label: 'Years of Excellence' },
                { number: '10K', label: 'Pieces Crafted' },
                { number: '50+', label: 'Master Artisans' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-primary md:text-3xl">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}