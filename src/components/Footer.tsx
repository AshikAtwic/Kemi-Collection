import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  'Collections': ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'New Arrivals'],
  'Company': ['Our Story', 'Craftsmanship', 'Sustainability', 'Careers'],
  'Support': ['Contact Us', 'Shipping & Returns', 'Care Guide', 'FAQ'],
}

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-display text-xl tracking-[0.25em] text-primary">
                KEMI
              </span>
              <br />
              <span className="text-[9px] tracking-[0.45em] text-muted-foreground">
                COLLECTION
              </span>
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Timeless luxury jewelry handcrafted with passion, precision,
              and the finest materials from around the world.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-[10px] tracking-[0.3em] text-primary">
                {heading.toUpperCase()}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Kemi Collection. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground/50">
            <button className="transition-colors hover:text-muted-foreground">
              Privacy Policy
            </button>
            <button className="transition-colors hover:text-muted-foreground">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}