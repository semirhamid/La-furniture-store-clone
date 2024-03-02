import React from 'react';
import './herozoom.scss';

export default function HeroZoom({ className, src, name }) {

  return (
    <div className={`grid-overflow-hidden relative cursor-pointer  ${className ?? ""}`}>
      <img className='grid-image' src={src} alt="Zoomable Hero" />
      <div className="grid-absolute top-3 right-3 left-3 bottom-3 border-4 border-white flex items-center justify-center">
        <span className='uppercase font-semibold z-50 text-2xl text-white'>{name}</span>
      </div>
    </div>
  );
}
