import React, { useState } from 'react';
import { Mail, Heart, Facebook, Instagram, MessageCircle, X } from 'lucide-react';

const StickySocials: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Drop-up Menu */}
      <div
        className={`flex flex-col gap-3 items-center transition-all duration-300 origin-bottom ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Instagram */}
        <a
          href="#"
          className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-12 h-12"
          title="Instagram"
        >
          <Instagram size={20} />
        </a>

        {/* TikTok */}
        <a
          href="#"
          className="bg-black p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-12 h-12"
          title="TikTok"
        >
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

        {/* Facebook */}
        <a
          href="#"
          className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-12 h-12"
          title="Facebook"
        >
          <Facebook size={20} />
        </a>

        {/* Messenger */}
        <a
          href="#"
          className="bg-blue-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-12 h-12"
          title="Messenger"
        >
          <MessageCircle size={20} />
        </a>

        {/* Email */}
        <a
          href="#"
          className="bg-gray-700 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-12 h-12"
          title="Email"
        >
          <Mail size={20} />
        </a>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-gray-800 rotate-180' : 'bg-brand-main hover:bg-brand-dark hover:-translate-y-1'
        }`}
        aria-label="Toggle social links"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <div className="relative flex items-center justify-center w-full h-full">
            <Mail size={24} className="text-white" />
            <Heart
              size={14}
              className="absolute top-3 right-3 text-pink-300 fill-pink-300 animate-pulse"
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default StickySocials;