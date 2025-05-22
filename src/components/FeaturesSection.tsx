
import React from 'react';
import { CircleCheck } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Real-time Multiplayer",
      description: "Play with friends or match with players worldwide in fast-paced real-time games that keep you engaged.",
      icon: "🌐"
    },
    {
      title: "Private Game Rooms",
      description: "Create private lobbies to play exclusively with friends and family for game nights or special occasions.",
      icon: "🔒"
    },
    {
      title: "Daily Challenges",
      description: "Complete unique daily challenges to earn bonus rewards and climb the leaderboard rankings.",
      icon: "🏆"
    },
    {
      title: "Customizable Cards",
      description: "Unlock special card designs and customize your deck to show off your style and achievements.",
      icon: "🎨"
    },
    {
      title: "Voice Chat",
      description: "Communicate with friends during gameplay with integrated voice chat for a more social experience.",
      icon: "🎤"
    },
    {
      title: "Digital Rewards",
      description: "Win badges, avatars, and digital items that showcase your skills and achievements to other players.",
      icon: "🎁"
    }
  ];

  return (
    <section id="features" className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Game Features</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Chuno brings the classic card game experience to the digital world with exciting new features.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-chuno-purple rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Premium Features</h3>
              <p className="mb-6">
                Upgrade to Chuno Premium to unlock exclusive content and enhance your gaming experience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CircleCheck className="mr-2 h-5 w-5 text-chuno-green" />
                  <span>Ad-free gameplay experience</span>
                </li>
                <li className="flex items-center">
                  <CircleCheck className="mr-2 h-5 w-5 text-chuno-green" />
                  <span>Exclusive card designs and animations</span>
                </li>
                <li className="flex items-center">
                  <CircleCheck className="mr-2 h-5 w-5 text-chuno-green" />
                  <span>Tournament access with real prizes</span>
                </li>
                <li className="flex items-center">
                  <CircleCheck className="mr-2 h-5 w-5 text-chuno-green" />
                  <span>Create custom game rules</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-chuno-blue to-chuno-green p-8 md:p-12 flex flex-col justify-center items-center text-white">
              <h4 className="text-xl font-bold mb-2">Coming Soon</h4>
              <div className="text-4xl font-bold mb-2">Chuno Premium</div>
              <p className="text-center mb-4">Join our waitlist to be the first to access premium features</p>
              <button className="bg-white text-chuno-purple font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
