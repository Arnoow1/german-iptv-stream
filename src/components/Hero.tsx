import { Play, Zap, Globe, ShieldCheck, Tv, Users, Star } from 'lucide-react';
import { WhatsAppIcon } from '@/components/BrandIcons';

const stats = [
  { value: '20K+', label: 'Live-Kanäle', icon: Tv },
  { value: '80K+', label: 'Filme & Serien', icon: Play },
  { value: '99,9%', label: 'Verfügbarkeit', icon: ShieldCheck },
  { value: '150+', label: 'Länder', icon: Globe },
];

const badges = [
  { icon: Zap, text: 'Sofortige Aktivierung' },
  { icon: Globe, text: 'Weltweite Abdeckung' },
  { icon: ShieldCheck, text: 'Anti-Freeze-Technik' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-500/10 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
              Nr. 1 IPTV-Anbieter weltweit
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Grenzenlose Unterhaltung.
            <br />
            <span className="text-gradient-red glow-text">Ein Abo.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-400 leading-relaxed text-center max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Streamen Sie über 20.000 Live-Kanäle und 80.000+ Filme & Serien in brillantem 4K.
            Anti-Freeze-Technologie garantiert pufferfreies Streaming auf jedem Gerät, überall auf der Welt.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#pricing"
              className="group px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-base transition-all duration-300 hover:scale-105 glow-red flex items-center gap-2"
            >
              Jetzt streamen
              <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/10000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl border border-green-500/40 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-bold text-base transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat auf WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {badges.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-neutral-400">
                <b.icon className="w-4 h-4 text-brand-500" />
                <span>{b.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-brand-500 fill-brand-500" />
              ))}
            </div>
            <span className="text-sm text-neutral-500">4,9/5 aus 12.000+ Bewertungen</span>
            <span className="text-neutral-700">|</span>
            <div className="flex items-center gap-1.5 text-sm text-neutral-500">
              <Users className="w-4 h-4 text-brand-500" />
              50.000+ aktive Abonnenten
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-black/80 border border-neutral-800 backdrop-blur-sm hover:border-brand-500/30 transition-colors duration-300"
            >
              <s.icon className="w-6 h-6 text-brand-500 mx-auto mb-2" />
              <div className="text-3xl sm:text-4xl font-black text-white">{s.value}</div>
              <div className="text-xs sm:text-sm text-neutral-500 mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
