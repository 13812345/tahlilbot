import { ReactNode } from 'react';
import Card from './Card';

interface StatCardProps {
  icon: ReactNode;
  number: string | number;
  label: string;
  subNumber?: string | number;
  subLabel?: string;
}

export default function StatCard({ 
  icon, 
  number, 
  label, 
  subNumber, 
  subLabel 
}: StatCardProps) {
  return (
    <Card hover variant="glass" className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="text-3xl font-bold text-seraj-primary mb-2">
            {number}
          </div>
          <div className="text-sm text-gray-600 mb-1">
            {label}
          </div>
          {subNumber && subLabel && (
            <>
              <div className="text-2xl font-semibold text-seraj-secondary mt-3">
                {subNumber}
              </div>
              <div className="text-xs text-gray-500">
                {subLabel}
              </div>
            </>
          )}
        </div>
        <div className="text-seraj-accent opacity-80 mr-4">
          {icon}
        </div>
      </div>
    </Card>
  );
}
