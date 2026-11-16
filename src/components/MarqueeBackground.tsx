import { Play, Tv, Film, Trophy, Radio } from 'lucide-react';

interface MarqueeCard {
  image: string;
  tag: string;
  title: string;
  icon: typeof Play;
}

const sportsImages = [
  'https://images.pexels.com/photos/30651230/pexels-photo-30651230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/35898730/pexels-photo-35898730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/32190714/pexels-photo-32190714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/32190700/pexels-photo-32190700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/9750839/pexels-photo-9750839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const movieImages = [
  'https://images.pexels.com/photos/7991139/pexels-photo-7991139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7991318/pexels-photo-7991318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/28227728/pexels-photo-28227728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/24304636/pexels-photo-24304636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7991500/pexels-photo-7991500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const streamingImages = [
  'https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/5202917/pexels-photo-5202917.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/13806260/pexels-photo-13806260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const columnOne: MarqueeCard[] = [
  { image: sportsImages[0], tag: 'Live 4K Sport', title: 'Champions-League-Finale', icon: Trophy },
  { image: movieImages[0], tag: 'Jetzt streamen', title: 'Premieren-Kino', icon: Film },
  { image: streamingImages[0], tag: 'Serien-Marathon', title: 'Netflix-Originals', icon: Tv },
  { image: sportsImages[1], tag: 'Live 4K Sport', title: 'Nacht-Fußball', icon: Trophy },
  { image: movieImages[1], tag: 'Jetzt streamen', title: 'Blockbuster-Hits', icon: Film },
  { image: streamingImages[1], tag: 'Serien-Marathon', title: 'HBO-Serien', icon: Tv },
  { image: sportsImages[0], tag: 'Live 4K Sport', title: 'Champions-League-Finale', icon: Trophy },
  { image: movieImages[0], tag: 'Jetzt streamen', title: 'Premieren-Kino', icon: Film },
  { image: streamingImages[0], tag: 'Serien-Marathon', title: 'Netflix-Originals', icon: Tv },
  { image: sportsImages[1], tag: 'Live 4K Sport', title: 'Nacht-Fußball', icon: Trophy },
];

const columnTwo: MarqueeCard[] = [
  { image: streamingImages[2], tag: 'Smart TV', title: 'Überall streamen', icon: Tv },
  { image: movieImages[2], tag: 'VOD-Bibliothek', title: '50.000+ Filme', icon: Film },
  { image: sportsImages[2], tag: 'Live 4K Sport', title: 'Premier League', icon: Trophy },
  { image: streamingImages[3], tag: 'Smart TV', title: '4K-Streaming', icon: Tv },
  { image: movieImages[3], tag: 'VOD-Bibliothek', title: 'Klassisches Kino', icon: Film },
  { image: sportsImages[3], tag: 'Live 4K Sport', title: 'Spieltag Live', icon: Trophy },
  { image: streamingImages[2], tag: 'Smart TV', title: 'Überall streamen', icon: Tv },
  { image: movieImages[2], tag: 'VOD-Bibliothek', title: '50.000+ Filme', icon: Film },
  { image: sportsImages[2], tag: 'Live 4K Sport', title: 'Premier League', icon: Trophy },
  { image: streamingImages[3], tag: 'Smart TV', title: '4K-Streaming', icon: Tv },
];

const columnThree: MarqueeCard[] = [
  { image: sportsImages[4], tag: 'Übertragung', title: 'Live-Berichterstattung', icon: Radio },
  { image: movieImages[4], tag: 'Neuerscheinungen', title: 'Tägliche Updates', icon: Film },
  { image: streamingImages[4], tag: 'Multi-Gerät', title: 'Überall ansehen', icon: Tv },
  { image: sportsImages[0], tag: 'Übertragung', title: 'UFC & Boxen', icon: Radio },
  { image: movieImages[0], tag: 'Neuerscheinungen', title: 'Preisträger', icon: Film },
  { image: streamingImages[0], tag: 'Multi-Gerät', title: 'Fire-Stick-bereit', icon: Tv },
  { image: sportsImages[4], tag: 'Übertragung', title: 'Live-Berichterstattung', icon: Radio },
  { image: movieImages[4], tag: 'Neuerscheinungen', title: 'Tägliche Updates', icon: Film },
  { image: streamingImages[4], tag: 'Multi-Gerät', title: 'Überall ansehen', icon: Tv },
  { image: sportsImages[0], tag: 'Übertragung', title: 'UFC & Boxen', icon: Radio },
];

function Card({ card }: { card: MarqueeCard }) {
  return (
    <div className="h-64 rounded-2xl overflow-hidden border border-brand-500/30 relative group flex-shrink-0">
      <img
        src={card.image}
        alt={card.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-brand-500/90 flex items-center justify-center backdrop-blur-sm">
        <card.icon className="w-4 h-4 text-white" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-[10px] text-brand-400 font-bold uppercase tracking-widest">{card.tag}</span>
        <p className="text-sm font-semibold mt-0.5 text-white">{card.title}</p>
      </div>
    </div>
  );
}

function MarqueeColumn({ cards, direction }: { cards: MarqueeCard[]; direction: 'up' | 'down' }) {
  return (
    <div className="w-1/3 flex flex-col gap-4 overflow-hidden">
      <div className={`flex flex-col gap-4 ${direction === 'up' ? 'animate-marquee-up' : 'animate-marquee-down'}`}>
        {cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </div>
  );
}

export default function MarqueeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-25 pointer-events-none flex justify-between gap-4 px-4 z-0 mask-fade-bottom">
      <MarqueeColumn cards={columnOne} direction="up" />
      <MarqueeColumn cards={columnTwo} direction="down" />
      <MarqueeColumn cards={columnThree} direction="up" />
    </div>
  );
}
