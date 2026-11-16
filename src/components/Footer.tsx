import { Tv, Send, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const links = {
  Unternehmen: ['Über uns', 'Kontakt', 'Affiliate-Programm', 'Wiederverkäufer werden', 'Blog'],
  Support: ['Hilfecenter', 'Einrichtungsanleitungen', 'Kostenlose Testversion', 'Server-Status', 'Problem melden'],
  Rechtliches: ['Nutzungsbedingungen', 'Datenschutzrichtlinie', 'Rückerstattungsrichtlinie', 'DMCA', 'Cookie-Richtlinie'],
};

const socials = [
  { icon: Twitter, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 px-4 sm:px-6 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center glow-red">
                <Tv className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Stream<span className="text-brand-500">X</span>
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Der weltweit führende Premium-IPTV-Anbieter. 20.000+ Kanäle, 80.000+ Filme und Serien in 4K. Streamen Sie überall und jederzeit.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-brand-500 hover:border-brand-500/40 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-neutral-500 hover:text-brand-500 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-brand-500/10 to-transparent border border-brand-500/20 p-8 sm:p-12 mb-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            Bereit, das <span className="text-gradient-red">Kabel zu kappen?</span>
          </h3>
          <p className="text-neutral-400 max-w-xl mx-auto mb-6">
            Werden Sie einer von 50.000+ zufriedenen Abonnenten. Sofortige Aktivierung, 7-Tage-Geld-zurück-Garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-Mail-Adresse eingeben"
              className="flex-1 px-5 py-3.5 rounded-xl bg-black/60 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-brand-500/50 transition-colors"
            />
            <button className="px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm transition-all hover:scale-105 glow-red flex items-center justify-center gap-2">
              Loslegen
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-neutral-900">
          <p className="text-xs text-neutral-600">
            © 2026 StreamX. Alle Rechte vorbehalten. StreamX ist eine Streaming-Plattform und hostet keine eigenen Inhalte.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">Bedingungen</a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">Datenschutz</a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">DMCA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
