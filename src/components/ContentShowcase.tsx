import { Trophy, Clapperboard, MonitorPlay, Tv2 } from 'lucide-react';

const categories = [
  {
    icon: Trophy,
    title: 'Live-Sport',
    count: '3.500+ Kanäle',
    description: 'Premier League, NBA, NFL, UFC, F1, La Liga, Champions League und mehr in 4K.',
    image: 'https://images.pexels.com/photos/30651230/pexels-photo-30651230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['4K Live', 'PPV-Events', 'Alle Ligen'],
  },
  {
    icon: Clapperboard,
    title: 'Filme (VOD)',
    count: '50.000+ Titel',
    description: 'Neueste Blockbuster, Klassiker und Premium-Kino aus aller Welt.',
    image: 'https://images.pexels.com/photos/7991318/pexels-photo-7991318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['4K-Filme', 'Multi-Sub', 'Tägliche Updates'],
  },
  {
    icon: MonitorPlay,
    title: 'TV-Serien',
    count: '30.000+ Episoden',
    description: 'Komplette Staffeln von Netflix, HBO, Disney+, Apple TV+ und allen großen Sendern.',
    image: 'https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Alle Staffeln', 'Multi-Sub', 'Komplette Pakete'],
  },
  {
    icon: Tv2,
    title: 'International',
    count: '20.000+ Kanäle',
    description: 'Kanäle aus über 150 Ländern inklusive USA, UK, Kanada, Europa, Naher Osten & Asien.',
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['150+ Länder', 'Mehrsprachig', 'EPG-Guide'],
  },
];

export default function ContentShowcase() {
  return (
    <section id="content" className="relative py-24 px-4 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-brand-500 uppercase tracking-widest">Inhaltsbibliothek</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
            Ein Universum voller <span className="text-gradient-red">Unterhaltung</span>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
            Von Live-Sport bis zu den neuesten Filmen und kompletten TV-Serien — alles an einem Ort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden border border-neutral-800 hover:border-brand-500/40 transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center">
                      <cat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{cat.title}</h3>
                      <span className="text-sm text-brand-400 font-semibold">{cat.count}</span>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/10 text-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
