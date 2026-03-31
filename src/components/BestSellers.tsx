import { useScrollReveal } from '@/hooks/useAnimations'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'

const bestSellers = [
  {
    name: 'Aurelia Ring',
    price: '$2,450',
    category: 'Rings',
    image: '/images/collection-rings.png',
  },
  {
    name: 'Celestine Necklace',
    price: '$3,800',
    category: 'Necklaces',
    image: '/images/collection-necklaces.png',
  },
  {
    name: 'Seraphina Earrings',
    price: '$1,950',
    category: 'Earrings',
    image: '/images/collection-earrings.png',
  },
  {
    name: 'Lumière Bracelet',
    price: '$2,200',
    category: 'Bracelets',
    image: '/images/collection-bracelets.png',
  },
]

function ProductCard({ product, index }: { product: typeof bestSellers[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative mb-4 overflow-hidden rounded-sm bg-secondary">
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          {/* Hover overlay with quick view */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
            <Button variant="gold-outline" size="sm" className="gap-2">
              <Eye size={14} />
              Quick View
            </Button>
          </div>

          {/* Gold glow on hover */}
          <div className="absolute inset-0 rounded-sm transition-shadow duration-500 group-hover:shadow-[inset_0_0_40px_hsl(43_60%_53%/0.08)]" />
        </div>

        {/* Product Info */}
        <div className="text-center">
          <p className="mb-1 text-[10px] tracking-[0.3em] text-muted-foreground">
            {product.category.toUpperCase()}
          </p>
          <h3 className="font-display text-lg tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-primary">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  )
}

export function BestSellers() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="bestsellers" className="bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`reveal mb-16 text-center ${headerVisible ? 'visible' : ''}`}
        >
          <p className="mb-3 text-[10px] tracking-[0.5em] text-primary">
            MOST LOVED
          </p>
          <h2 className="font-display text-3xl tracking-wide text-foreground md:text-4xl lg:text-5xl">
            Best Sellers
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}