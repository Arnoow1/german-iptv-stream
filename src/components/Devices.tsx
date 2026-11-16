import { Tv, Smartphone, Laptop, Tablet, Cast, Monitor } from 'lucide-react';

const devices = [
  { icon: Tv, name: 'Smart TV', brands: 'Samsung, LG, Sony' },
  { icon: Smartphone, name: 'Android & iOS', brands: 'Handy & Tablet' },
  { icon: Laptop, name: 'PC & Mac', brands: 'Windows, macOS, Linux' },
  { icon: Cast, name: 'Fire Stick', brands: 'Amazon Fire TV' },
  { icon: Monitor, name: 'MAG Box', brands: 'MAG 254, 256, 322' },
  { icon: Tablet, name: 'Android Box', brands: 'Alle Android-TV-Geräte' },
];

const apps = ['TiviMate', 'IPTV Smarters', 'Perfect Player', 'GSE Smart IPTV', 'XCIPTV', 'Set IPTV', 'IPTV Blink', 'VLC'];

export default function Devices() {
  return (
    <section id="devices" className="relative py-24 px-4 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-brand-500 uppercase tracking-widest">Kompatibilität</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
            Streamen Sie auf <span className="text-gradient-red">jedem Gerät</span>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
            Kompatibel mit allen gängigen Plattformen und Geräten. Einrichtung in Minuten.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {devices.map((d, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-black/60 border border-neutral-800 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-3 group-hover:bg-brand-500/20 transition-colors">
                <d.icon className="w-7 h-7 text-brand-500" />
              </div>
              <h3 className="text-sm font-bold">{d.name}</h3>
              <p className="text-xs text-neutral-500 mt-1">{d.brands}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-neutral-900/60 to-black/60 border border-neutral-800 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Unterstützte Apps</h3>
              <p className="text-sm text-neutral-400">Funktioniert mit allen gängigen IPTV-Playern und Apps</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {apps.map((app, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl bg-neutral-800/60 border border-neutral-700 text-sm font-medium text-neutral-300 hover:border-brand-500/40 hover:text-white transition-colors"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
