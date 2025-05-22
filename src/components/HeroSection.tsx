
import React from 'react';
import { Button } from "@/components/ui/button";
import Card from './Card';

const HeroSection: React.FC = () => {
  return (
    <div className="pt-20 pb-12 md:pt-32 md:pb-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="text-chuno-red">Match.</span> <span className="text-chuno-green">Reverse.</span><br />
            <span className="text-chuno-blue">Skip.</span> <span className="text-chuno-yellow">Win Big.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Inspired by classics, reimagined for India.<br />Chuno is the ultimate fast-play card challenge for families, friends, and rivals.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-chuno-purple hover:bg-opacity-90 text-white text-lg py-6 px-8">
              Play Now
            </Button>
            <Button variant="outline" className="border-2 border-chuno-purple text-chuno-purple hover:bg-chuno-purple hover:text-white text-lg py-6 px-8">
              Invite Friends
            </Button>
          </div>
        </div>
        
        <div className="relative h-64 md:h-96 flex items-center justify-center">
          {/* Card stack effect */}
          <div className="absolute transform -rotate-12 translate-x-4 translate-y-2">
            <Card color="red" value="7" isFloating={true} />
          </div>
          <div className="absolute transform rotate-6 -translate-x-4 -translate-y-2">
            <Card color="blue" value="+2" isFloating={true} />
          </div>
          <div className="absolute transform -rotate-3 translate-y-6">
            <Card color="green" value="reverse" isFloating={true} />
          </div>
          <div className="absolute transform rotate-12 -translate-y-4">
            <Card color="yellow" value="skip" isFloating={true} />
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-chuno-red rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-chuno-blue rounded-full filter blur-3xl opacity-10"></div>
    </div>
  );
};

export default HeroSection;
