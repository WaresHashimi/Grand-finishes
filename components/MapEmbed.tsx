import React from 'react';
import { BUSINESS_INFO } from '../constants';

interface MapEmbedProps {
  className?: string;
  zoom?: number;
}

const MapEmbed: React.FC<MapEmbedProps> = ({ className = '', zoom = 13 }) => {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&z=${zoom}&output=embed`;

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-xl border border-slate-100 ${className}`}>
      <iframe
        title={`${BUSINESS_INFO.shortName} Service Area`}
        src={mapSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
        allowFullScreen
      />
      <div className="absolute inset-x-6 bottom-4 bg-white/90 backdrop-blur rounded-xl p-3 flex items-center justify-between text-sm font-semibold text-brand-primary shadow-lg">
        <span>{BUSINESS_INFO.location}</span>
        <span className="text-brand-secondary">Live Map</span>
      </div>
    </div>
  );
};

export default MapEmbed;

