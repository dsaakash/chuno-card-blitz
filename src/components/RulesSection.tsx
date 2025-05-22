
import React from 'react';
import Card from './Card';

const RulesSection: React.FC = () => {
  return (
    <section id="rules" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Game Rules</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Chuno is easy to learn but challenging to master. Match colors or numbers, and be the first to play all your cards!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">The Basics</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <div className="bg-chuno-purple text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                </div>
                <p>Each player gets 7 cards to start</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <div className="bg-chuno-purple text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                </div>
                <p>Match by color or number/action</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <div className="bg-chuno-purple text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                </div>
                <p>If you can't match, you draw a card</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <div className="bg-chuno-purple text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                </div>
                <p>First to play all cards wins</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <div className="bg-chuno-purple text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                </div>
                <p>Don't forget to yell "CHUNO!" when you have one card left</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Card Types</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Number Cards (0-9)</p>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  <Card color="red" value="0" className="w-12 h-16 md:w-16 md:h-24" />
                  <Card color="green" value="5" className="w-12 h-16 md:w-16 md:h-24" />
                  <Card color="blue" value="9" className="w-12 h-16 md:w-16 md:h-24" />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  0-9 numbered cards in four colors. Match by color or number.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Action Cards</p>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  <Card color="yellow" value="reverse" className="w-12 h-16 md:w-16 md:h-24" />
                  <Card color="red" value="skip" className="w-12 h-16 md:w-16 md:h-24" />
                  <Card color="green" value="+2" className="w-12 h-16 md:w-16 md:h-24" />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Special cards that change the game flow.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Special Rules</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <div className="bg-chuno-red text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">↻</div>
                </div>
                <div>
                  <p className="font-semibold">Reverse Card</p>
                  <p className="text-sm text-gray-600">Changes the direction of play</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <div className="bg-chuno-blue text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">⊘</div>
                </div>
                <div>
                  <p className="font-semibold">Skip Card</p>
                  <p className="text-sm text-gray-600">Skips the next player's turn</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <div className="bg-chuno-green text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">+2</div>
                </div>
                <div>
                  <p className="font-semibold">Draw Two Card</p>
                  <p className="text-sm text-gray-600">Next player draws 2 cards and loses their turn</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-semibold text-lg">Card Distribution</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 max-w-3xl mx-auto">
            <div className="bg-chuno-red bg-opacity-10 p-4 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-chuno-red mx-auto mb-2"></div>
              <p className="font-bold">Red Cards</p>
              <p className="text-sm">1 x 0 card</p>
              <p className="text-sm">2 each of 1-9</p>
              <p className="text-sm">2 Reverse, 2 Skip</p>
              <p className="text-sm">2 Draw Two (+2)</p>
            </div>
            <div className="bg-chuno-green bg-opacity-10 p-4 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-chuno-green mx-auto mb-2"></div>
              <p className="font-bold">Green Cards</p>
              <p className="text-sm">1 x 0 card</p>
              <p className="text-sm">2 each of 1-9</p>
              <p className="text-sm">2 Reverse, 2 Skip</p>
              <p className="text-sm">2 Draw Two (+2)</p>
            </div>
            <div className="bg-chuno-blue bg-opacity-10 p-4 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-chuno-blue mx-auto mb-2"></div>
              <p className="font-bold">Blue Cards</p>
              <p className="text-sm">1 x 0 card</p>
              <p className="text-sm">2 each of 1-9</p>
              <p className="text-sm">2 Reverse, 2 Skip</p>
              <p className="text-sm">2 Draw Two (+2)</p>
            </div>
            <div className="bg-chuno-yellow bg-opacity-10 p-4 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-chuno-yellow mx-auto mb-2"></div>
              <p className="font-bold">Yellow Cards</p>
              <p className="text-sm">1 x 0 card</p>
              <p className="text-sm">2 each of 1-9</p>
              <p className="text-sm">2 Reverse, 2 Skip</p>
              <p className="text-sm">2 Draw Two (+2)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
