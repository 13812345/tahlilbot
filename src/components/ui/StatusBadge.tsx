interface StatusBadgeProps {
  type: 'political' | 'economic' | 'sport' | 'social' | 'cyber';
  children: React.ReactNode;
}

const statusColors = {
  political: 'bg-red-500 text-white',
  economic: 'bg-green-500 text-white',
  sport: 'bg-blue-500 text-white',
  social: 'bg-purple-500 text-white',
  cyber: 'bg-orange-500 text-white',
};

export default function StatusBadge({ type, children }: StatusBadgeProps) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[type]}`}>
      {children}
    </span>
  );
}
