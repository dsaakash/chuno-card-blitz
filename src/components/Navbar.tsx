
import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full py-4 px-4 md:px-8 bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#rules" className="font-semibold hover:text-chuno-blue transition-colors">
            Rules
          </a>
          <a href="#features" className="font-semibold hover:text-chuno-blue transition-colors">
            Features
          </a>
          <a href="#benefits" className="font-semibold hover:text-chuno-blue transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="font-semibold hover:text-chuno-blue transition-colors">
            Testimonials
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="border-2 border-chuno-purple text-chuno-purple hover:bg-chuno-purple hover:text-white transition-colors"
          >
            Log In
          </Button>
          <Button
            className="bg-chuno-purple hover:bg-opacity-90 text-white"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
