import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'James Carter',
    location: 'Großbritannien',
    rating: 5,
    text: "Vom Kabelanschluss gewechselt und nie zurückgeschaut. Die 4K-Sportkanäle sind unglaublich — null Pufferung sogar während Premier-League-Spiele. Jeden Cent wert.",
    initial: 'JC',
  },
  {
    name: 'Maria Rodriguez',
    location: 'Spanien',
    rating: 5,
    text: "Die VOD-Bibliothek ist riesig. Meine Kinder schauen ihre Lieblingsserien und ich bekomme alle meine Telenovelas. Einrichtung dauerte buchstäblich 2 Minuten auf meinem Smart-TV.",
    initial: 'MR',
  },
  {
    name: 'David Chen',
    location: 'Kanada',
    rating: 5,
    text: "Ich habe 3 andere IPTV-Anbieter ausprobiert und StreamX ist mit Abstand der stabilste. Die Anti-Freeze-Technik funktioniert wirklich. Der Kundensupport ist ebenfalls erstklassig.",
    initial: 'DC',
  },
  {
    name: 'Sophie Laurent',
    location: 'Frankreich',
    rating: 5,
    text: "Kanäle aus über 150 Ländern bedeuten, dass ich meine Lieblings-French-Sendungen im Ausland schauen kann. Der EPG-Guide ist eine tolle Ergänzung — fühlt sich an wie ein Premium-Kabelservice.",
    initial: 'SL',
  },
  {
    name: 'Ahmed Hassan',
    location: 'Vereinigte Arabische Emirate',
    rating: 5,
    text: "Bester IPTV-Service im Nahen Osten. Alle arabischen Kanäle plus Premium-Sport. Der 24-Monats-Plan ist ein absolutes Schnäppchen. Sehr zu empfehlen.",
    initial: 'AH',
  },
  {
    name: 'Lisa Thompson',
    location: 'Australien',
    rating: 5,
    text: "Sofortige Aktivierung, überhaupt keine Probleme. Streamt einwandfrei auf meinem Fire Stick und Handy gleichzeitig. Die Multi-Geräte-Unterstützung ist genau das, was ich brauchte.",
    initial: 'LT',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 px-4 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-brand-500 uppercase tracking-widest">Kundenstimmen</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
            Geliebt von <span className="text-gradient-red">50.000+ Abonnenten</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-500 fill-brand-500" />
              ))}
            </div>
            <span className="text-neutral-400 text-sm">4,9/5 aus 12.000+ Bewertungen</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-black/60 border border-neutral-800 hover:border-brand-500/40 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-brand-500/30 mb-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(r.rating)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-brand-500 fill-brand-500" />
                ))}
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">„{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-sm font-bold text-brand-400">
                  {r.initial}
                </div>
                <div>
                  <div className="text-sm font-bold">{r.name}</div>
                  <div className="text-xs text-neutral-500">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
