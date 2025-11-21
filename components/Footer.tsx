import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-brand-accent/30 pb-12">
          
          {/* Column 1: Brand */}
          <div className="text-center md:text-left">
            <h2 className="font-script text-4xl mb-4 text-white">SintabyMarie</h2>
            <p className="text-gray-300 font-sans font-light text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Handcrafted timeless jewelry designed to elevate your everyday style. Made with love and ethically sourced materials.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center">
            <h3 className="text-lg uppercase tracking-widest mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-3 font-sans font-light text-sm text-gray-300">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3: Social & Newsletter */}
          <div className="text-center md:text-right">
            <h3 className="text-lg uppercase tracking-widest mb-6 font-serif">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-6 mb-6">
              <a href="#" className="hover:text-brand-accent transition-colors bg-white/10 p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors bg-white/10 p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors bg-white/10 p-2 rounded-full" aria-label="TikTok">
                {/* TikTok Icon SVG */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-gray-400">Join our newsletter for exclusive offers.</p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 font-sans">
          &copy; {new Date().getFullYear()} SintabyMarie Jewelry. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;