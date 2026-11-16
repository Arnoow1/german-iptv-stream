import { Zap, ShieldCheck, Globe, Smartphone, Clock, Headphones, Film, Radio } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Anti-Freeze-Technologie',
    description: 'Unser fortschrittliches Anti-Freeze-System gewährleistet flüssiges, pufferfreies Streaming mit mehreren Server-Backups.',
  },
  {
    icon: Film,
    title: '4K Ultra HD Qualität',
    description: 'Erleben Sie glasklare Bildqualität mit unserem umfangreichen 4K- und FHD-Kanalangebot.',
  },
  {
    icon: Globe,
    title: 'Globale Inhaltesbibliothek',
    description: 'Zugriff auf Kanäle und VOD aus über 150 Ländern inklusive USA, UK, Kanada, Europa und Asien.',
  },
  {
    icon: Smartphone,
    title: 'Multi-Geräte-Unterstützung',
    description: 'Streamen Sie gleichzeitig auf Smart-TVs, Android, iOS, Firestick, MAG, PC und mehr.',
  },
  {
    icon: Clock,
    title: 'Sofortige Aktivierung',
    description: 'Erhalten Sie Ihre Zugangsdaten innerhalb von Minuten nach dem Kauf. Vollautomatischer Einrichtungsprozess.',
  },
  {
    icon: ShieldCheck,
    title: '99,9 % Server-Verfügbarkeit',
    description: 'Enterprise-Infrastruktur mit Lastverteilung garantiert einen zuverlässigen Service.',
  },
  {
    icon: Radio,
    title: 'Elektronischer Programmführer',
    description: 'Vollständige EPG-Unterstützung, damit Sie keine Lieblingssendungen verpassen – mit komplettem TV-Guide.',
  },
  {
    icon: Headphones,
    title: '24/7 Premium-Support',
    description: 'Unser engagiertes Support-Team ist rund um die Uhr per Live-Chat und Ticketsystem erreichbar.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-brand-500 uppercase tracking-widest">Warum StreamX</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
            Alles, was Sie für <span className="text-gradient-red">intelligentes Streaming</span> brauchen
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
            Modernste Technologie trifft auf eine unübertroffene Inhaltesbibliothek für das ultimative Seherlebnis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-black/60 border border-neutral-800 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors duration-300">
                <f.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
