import { LoadingScreen } from '@/components/LoadingScreen'
import { CursorGlow } from '@/components/CursorGlow'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { FeaturedCollections } from '@/components/FeaturedCollections'
import { About } from '@/components/About'
import { BestSellers } from '@/components/BestSellers'
import { ParallaxShowcase } from '@/components/ParallaxShowcase'
import { Testimonials } from '@/components/Testimonials'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <About />
        <BestSellers />
        <ParallaxShowcase />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default App