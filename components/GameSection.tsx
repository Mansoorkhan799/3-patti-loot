'use client';

interface GameSectionProps {
  title: string;
  games: string[];
  icon: string;
}

export default function GameSection({ title, games, icon }: GameSectionProps) {
  return (
    <div>
      <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {games.map((game, index) => (
          <div key={index} className="glass rounded-lg p-4 text-center hover:bg-gaming-accent/10 transition-all cursor-pointer">
            <span className="text-2xl mb-2 block">{icon}</span>
            <span className="font-gaming font-bold text-sm">{game}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
