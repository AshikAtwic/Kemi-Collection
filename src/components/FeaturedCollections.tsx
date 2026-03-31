import { useScrollReveal } from '@/hooks/useAnimations'

const collections = [
  {
    name: 'Rings',
    image: '/images/collection-rings.png',
    description: 'Symbols of eternal devotion',
  },
  {
    name: 'Necklaces',
    image: '/images/collection-necklaces.png',
    description: 'Grace that adorns the neckline',
  },
  {
    name: 'Earrings',
    image: '/images/collection-earrings.png',
    description: 'Radiance framing your face',
  },
  {
    name: 'Bracelets',
    image: '/images/collection-bracelets.png',
    description: 'Elegance wrapped around your wrist',
  },
]

function CollectionCard({ item, index }: { item: typeof collections[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="group relative cursor-pointer overflow-hidden rounded-sm">
        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={item.image}
            alt={`${item.name} collection`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Hover Overlay with glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        {/* Gold border glow on hover */}
        <div className="absolute inset-0 rounded-sm border border-transparent transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[inset_0_0_30px_hsl(43_60%_53%/0.1)]" />

        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="mb-1 text-[10px] tracking-[0.4em] text-primary">
            COLLECTION
          </p>
          <h3 className="font-display text-2xl tracking-wide text-foreground md:text-3xl">
            {item.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground transition-all duration-500 group-hover:text-foreground/80">
            {item.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs tracking-[0.2em] text-primary opacity-0 transition-all duration-500 group-hover:opacity-100">
            <span>DISCOVER</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeaturedCollections() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="collections" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`reveal mb-16 text-center ${headerVisible ? 'visible' : ''}`}
        >
          <p className="mb-3 text-[10px] tracking-[0.5em] text-primary">
            OUR COLLECTIONS
          </p>
          <h2 className="font-display text-3xl tracking-wide text-foreground md:text-4xl lg:text-5xl">
            Curated for Perfection
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((item, index) => (
            <CollectionCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}