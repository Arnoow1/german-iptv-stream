import { useState } from 'react';
import { Check, Crown, Rocket, Star, Clock, Zap } from 'lucide-react';
import { WhatsAppIcon } from '@/components/BrandIcons';

const plans = [
  {
    icon: Rocket,
    name: 'Starter',
    duration: '3 Monate',
    price: 24.99,
    original: 39.99,
    features: [
      '20.000+ Live-Kanäle',
      '50.000+ Filme & Serien',
      'Full HD & 4K Qualität',
      '1 Geräteverbindung',
      'Anti-Freeze-Technologie',
      'EPG TV-Guide',
    ],
    popular: false,
  },
  {
    icon: Crown,
    name: 'Premium',
    duration: '12 Monate',
    price: 59.99,
    original: 99.99,
    features: [
      'Alles aus Starter',
      '2 Geräteverbindungen',
      'Adult-Inhalte inklusive',
      'Priorisierter Serverzugang',
      '24/7 Premium-Support',
      'Kostenloses EPG + Catch Up',
    ],
    popular: true,
  },
  {
    icon: Star,
    name: 'Ultimate',
    duration: '24 Monate',
    price: 99.99,
    original: 179.99,
    features: [
      'Alles aus Premium',
      '3 Geräteverbindungen',
      'Alle Premium-Sport-PPV',
      'Dedizierter VIP-Server',
      'Kostenlose Einrichtungshilfe',
      'Lebenslange Preisgarantie',
    ],
    popular: false,
  },
];

const whatsappNumber = '212638841368';

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-brand-500 uppercase tracking-widest">Preispläne</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
            Wählen Sie Ihren <span className="text-gradient-red">perfekten Plan</span>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
            Keine versteckten Gebühren. Keine Verträge. Jederzeit kündbar. Alle Pläne inklusive sofortiger Aktivierung.
          </p>

          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-neutral-900 border border-neutral-800 mt-8">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                billing === 'monthly' ? 'bg-brand-500 text-white glow-red' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Kurzfristig
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                billing === 'yearly' ? 'bg-brand-500 text-white glow-red' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Langfristig
              <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-400 font-bold">
                40% sparen
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => {
            const message = encodeURIComponent(
              `Hallo! Ich möchte das ${plan.name} Paket (${plan.duration} für €${plan.price}) bestellen.`
            );
            const dynamicWhatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <div
                key={i}
                className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-brand-500/50 bg-gradient-to-b from-brand-500/10 to-black glow-red lg:scale-105'
                    : 'border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-black/60 hover:border-brand-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-brand-500 text-white text-xs font-bold uppercase tracking-wider glow-red flex items-center gap-1.5">
                    <Zap className="w-3 h-3" />
                    Beliebteste Wahl
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular ? 'bg-brand-500' : 'bg-brand-500/10 border border-brand-500/20'
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-brand-500'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <span className="text-sm text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {plan.duration}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black">€{plan.price}</span>
                    <span className="text-neutral-500 text-sm">einmalig</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-neutral-500 line-through text-sm">€{plan.original}</span>
                    <span className="text-green-400 text-sm font-bold">
                      €{(plan.original - plan.price).toFixed(2)} sparen
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-brand-500' : 'bg-brand-500/10 border border-brand-500/20'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-brand-500'}`} />
                      </div>
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <a
                    href={dynamicWhatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.02] ${
                      plan.popular
                        ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-600/30'
                        : 'border border-green-500/40 bg-green-500/10 hover:bg-green-500/20 text-green-400'
                    }`}
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Per WhatsApp bestellen
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-500">
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> 7-Tage-Geld-zurück-Garantie</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> Sofortige Lieferung</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> Sichere WhatsApp Bestellung</span>
        </div>
      </div>
    </section>
  );
}
