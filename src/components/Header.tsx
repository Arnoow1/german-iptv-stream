import { useEffect, useState } from 'react';
import { Menu, X, Tv, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/BrandIcons';

const navLinks = [
  { label: 'Funktionen', href: '#features' },
  { label: 'Inhalte', href: '#content' },
  { label: 'Preise', href: '#pricing' },
  { label: 'Geräte', href: '#devices' },
  { label: 'Bewertungen', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

const whatsappLink = 'https://wa.me/10000000000';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-brand-500/20 py-3'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center glow-red group-hover:scale-110 transition-transform duration-300">
            <Tv className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Stream<span className="text-brand-500 glow-text-sm">X</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-brand-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-green-500/40 bg-green-500/10 hover:bg-green-500/20 text-green-400 text-sm font-bold transition-all duration-300"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Kontakt
          </a>
          <a
            href="#pricing"
            className="flex items-center gap-1 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold transition-all duration-300 hover:scale-105 glow-red"
          >
            Loslegen
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü umschalten"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-brand-500/20">
          <nav className="flex flex-col px-6 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-neutral-300 hover:text-brand-500 transition-colors py-2.5 border-b border-neutral-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-bold mt-3"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Kontakt auf WhatsApp
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-3 rounded-xl bg-brand-500 text-white text-sm font-bold text-center mt-2 glow-red"
            >
              Loslegen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
