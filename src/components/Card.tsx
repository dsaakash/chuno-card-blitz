
import React from 'react';
import { cn } from '@/lib/utils';

type CardColor = 'red' | 'green' | 'blue' | 'yellow';
type CardValue = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'reverse' | 'skip' | '+2';

interface CardProps {
  color: CardColor;
  value: CardValue;
  className?: string;
  isFloating?: boolean;
}

const colorMap = {
  red: 'bg-chuno-red',
  green: 'bg-chuno-green',
  blue: 'bg-chuno-blue',
  yellow: 'bg-chuno-yellow'
};

const Card: React.FC<CardProps> = ({ color, value, className, isFloating = false }) => {
  const getSymbol = () => {
    switch (value) {
      case 'reverse':
        return '↻';
      case 'skip':
        return '⊘';
      case '+2':
        return '+2';
      default:
        return value;
    }
  };

  return (
    <div 
      className={cn(
        'relative w-16 h-24 md:w-24 md:h-36 rounded-xl shadow-lg flex items-center justify-center transition-transform hover:scale-105',
        colorMap[color],
        isFloating && 'animate-float',
        className
      )}
    >
      <div className="absolute inset-1 bg-white rounded-lg flex flex-col items-center justify-center">
        <div className={`absolute top-1 left-1 text-${color === 'yellow' ? 'black' : 'white'} font-bold text-sm`}>
          {getSymbol()}
        </div>
        <div className={`text-3xl md:text-5xl font-bold text-${colorMap[color].replace('bg-', '')}`}>
          {getSymbol()}
        </div>
        <div className={`absolute bottom-1 right-1 text-${color === 'yellow' ? 'black' : 'white'} font-bold text-sm transform rotate-180`}>
          {getSymbol()}
        </div>
      </div>
    </div>
  );
};

export default Card;
