import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface TrustBadgeProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ className = '', variant = 'light' }) => {
  const textColor = variant === 'light' ? 'text-brand-primary' : 'text-white';
  
  return (
    <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 ${className}`}>
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" className="drop-shadow-sm" />
        ))}
      </div>
      <span className={`text-sm font-bold tracking-wide ${textColor}`}>
        {BUSINESS_INFO.googleRating} ★ ({BUSINESS_INFO.reviewCount} Google Reviews)
      </span>
    </div>
  );
};

export default TrustBadge;