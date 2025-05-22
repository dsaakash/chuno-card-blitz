
import React from 'react';
import Logo from './Logo';
import { Button } from "@/components/ui/button";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-chuno-dark text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-300 max-w-sm">
              Chuno is the ultimate card game experience, reimagined for the digital age. Play with friends, compete in tournaments, and win amazing prizes!
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#rules" className="text-gray-300 hover:text-white">Game Rules</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white">Benefits</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>support@chunogame.com</span>
              </li>
              <li className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 98765 43210</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-bold text-lg mb-4">Download App</h4>
              <div className="flex flex-col space-y-2">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-chuno-purple">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.9 5c-.2 0-.5 0-.8.2-.6.3-1.2.3-1.8 0-.5-.2-1-.2-1.5 0-.6.3-1.1.3-1.7 0-.5-.2-1-.2-1.5 0-.6.3-1.1.3-1.7 0-.5-.2-1-.2-1.5 0-.6.3-1.2.3-1.8 0-.3-.1-.7-.2-.9-.2-.3 0-.4.3-.4.5v12.5c0 .3.2.5.5.5h12.5c.3 0 .5-.2.5-.5V5.5c-.1-.3-.3-.5-.6-.5z" />
                  </svg>
                  App Store
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-chuno-purple">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 12L8 5v14l9.5-7z" />
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 Chuno Marketing Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
