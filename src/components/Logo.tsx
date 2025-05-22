
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 md:w-16 md:h-16">
        {/* Black rounded background */}
        <div className="absolute inset-0 bg-black rounded-xl shadow-lg"></div>
        
        {/* Card fan with hand icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/lovable-uploads/85cbdce5-4bb0-4c56-af07-589d058e5072.png" 
            alt="Chuno Logo" 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>
      <span className="ml-2 text-2xl md:text-3xl font-extrabold">
        <span className="text-chuno-red">C</span>
        <span className="text-chuno-yellow">h</span>
        <span className="text-chuno-green">u</span>
        <span className="text-chuno-green">n</span>
        <span className="text-chuno-blue">o</span>
      </span>
    </div>
  );
};

export default Logo;
