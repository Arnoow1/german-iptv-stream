import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Was ist IPTV und wie funktioniert es?',
    a: 'IPTV (Internet Protocol Television) überträgt Live-TV-Kanäle und On-Demand-Inhalte über das Internet anstelle von herkömmlichem Kabel oder Satellit. Sie benötigen lediglich eine Internetverbindung und ein kompatibles Gerät, um mit dem Streaming zu beginnen.',
  },
  {
    q: 'Wie lange dauert die Aktivierung?',
    a: 'Die Aktivierung erfolgt vollautomatisch. Sie erhalten Ihre Zugangsdaten innerhalb von 2–5 Minuten nach Abschluss Ihres Kaufs. Geben Sie die Daten einfach in Ihre bevorzugte IPTV-App ein und beginnen Sie mit dem Anschauen.',
  },
  {
    q: 'Welche Internetgeschwindigkeit benötige ich?',
    a: 'Für Standard-HD-Streaming empfehlen wir mindestens 10 Mbit/s. Für 4K-Inhalte werden 25 Mbit/s oder mehr empfohlen. Eine stabile Kabelverbindung oder ein starkes WLAN sorgen für das beste Erlebnis.',
  },
  {
    q: 'Kann ich mein Abo auf mehreren Geräten nutzen?',
    a: 'Ja. Die Anzahl gleichzeitiger Verbindungen hängt von Ihrem Plan ab: Starter enthält 1, Premium enthält 2 und Ultimate enthält 3 Geräteverbindungen zur gleichen Zeit.',
  },
  {
    q: 'Bieten Sie eine kostenlose Testversion an?',
    a: 'Ja, wir bieten eine 24-stündige kostenlose Testversion an, damit Sie den Service vor einer Verpflichtung testen können. Kontaktieren Sie unser Support-Team per Live-Chat, um Ihre Testversion anzufordern.',
  },
  {
    q: 'Wie lautet Ihre Rückgaberichtlinie?',
    a: 'Wir bieten eine 7-Tage-Geld-zurück-Garantie auf alle Pläne. Wenn Sie innerhalb der ersten 7 Tage nicht mit dem Service zufrieden sind, kontaktieren Sie den Support für eine volle Rückerstattung — ohne Rückfragen.',
  },
  {
    q: 'Welche Zahlungsmethoden akzeptieren Sie?',
    a: 'Wir akzeptieren alle gängigen Kreditkarten, PayPal und Kryptowährungen (Bitcoin, Ethereum). Alle Transaktionen werden sicher mit branchenüblicher Verschlüsselung verarbeitet.',
  },
  {
    q: 'Funktioniert das in meinem Land?',
    a: 'StreamX funktioniert in über 150 Ländern weltweit. Unsere Server sind global verteilt, um Streaming mit niedriger Latenz zu gewährleisten, egal wo Sie sich befinden.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-gradient-to-br from-neutral-900/60 to-black/60 border border-neutral-800 hover:border-brand-500/30 transition-colors duration-300 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-sm sm:text-base font-semibold pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-500 flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <p className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-brand-500 uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
            Häufig gestellte <span className="text-gradient-red">Fragen</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">
            Alles, was Sie vor der Anmeldung wissen müssen.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
