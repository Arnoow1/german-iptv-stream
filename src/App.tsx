import MarqueeBackground from '@/components/MarqueeBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ContentShowcase from '@/components/ContentShowcase';
import Pricing from '@/components/Pricing';
import Devices from '@/components/Devices';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <MarqueeBackground />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <ContentShowcase />
          <Pricing />
          <Devices />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}
