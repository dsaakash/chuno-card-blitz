
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 md:w-16 md:h-16">
        {/* Card background */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-chuno-purple to-chuno-dark transform rotate-12 shadow-lg"></div>
        
        {/* Logo text */}
        <div className="absolute inset-0 flex items-center justify-center transform -rotate-12">
          <span className="text-white font-extrabold text-xl md:text-2xl">C</span>
        </div>
      </div>
      <span className="ml-2 text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-chuno-red via-chuno-yellow to-chuno-blue text-transparent bg-clip-text">
        Chuno
      </span>
    </div>
  );
};

export default Logo;
