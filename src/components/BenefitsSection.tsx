
import React from 'react';
import { Button } from "@/components/ui/button";
import Card from './Card';

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-chuno-yellow rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-chuno-green rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Why Play Chuno?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience the thrill of competition and win amazing rewards!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Winning Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-chuno-red text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
                  🏆
                </div>
                <div>
                  <p className="font-bold text-lg">Leaderboard Rankings</p>
                  <p className="text-gray-600">
                    Top players get featured on our global and regional leaderboards for bragging rights and recognition.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-chuno-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
                  💰
                </div>
                <div>
                  <p className="font-bold text-lg">In-Game Currency</p>
                  <p className="text-gray-600">
                    Win matches to earn Chuno Coins that can be used to unlock premium content and customization options.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-chuno-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
                  🎁
                </div>
                <div>
                  <p className="font-bold text-lg">Real-World Prizes</p>
                  <p className="text-gray-600">
                    Participate in tournaments for a chance to win merchandise, gift cards, and other exciting prizes.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-chuno-yellow text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
                  🌟
                </div>
                <div>
                  <p className="font-bold text-lg">Exclusive Content</p>
                  <p className="text-gray-600">
                    Reach high ranks to unlock special cards, animations, and exclusive game modes not available to regular players.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="relative p-6 md:p-0">
            <div className="relative bg-white rounded-xl shadow-xl p-6 md:p-8 z-10">
              <h3 className="text-2xl font-bold mb-4">Monthly Tournament</h3>
              <div className="bg-gradient-to-r from-chuno-purple to-chuno-blue text-white p-4 rounded-lg mb-6">
                <div className="text-sm">Grand Prize</div>
                <div className="text-2xl font-bold">₹25,000</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="font-semibold">Date:</span>
                  <span>Last Sunday of every month</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Entry Fee:</span>
                  <span>250 Chuno Coins</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Players:</span>
                  <span>Limited to 1000</span>
                </div>
              </div>
              <Button className="w-full bg-chuno-purple hover:bg-opacity-90 text-white">
                Register Now
              </Button>
            </div>
            
            {/* Decorative cards */}
            <div className="absolute -bottom-4 -right-4 transform -rotate-12 z-0 hidden md:block">
              <Card color="red" value="7" className="w-14 h-20" />
            </div>
            <div className="absolute -top-4 -left-4 transform rotate-6 z-0 hidden md:block">
              <Card color="blue" value="2" className="w-14 h-20" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-chuno-dark to-chuno-purple rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join the Fun?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Download Chuno today and start playing with friends and family. Challenge players from around the world and climb the global leaderboard.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button className="bg-white text-chuno-purple hover:bg-opacity-90 text-lg py-6 px-8">
              Download Now
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-chuno-purple text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
