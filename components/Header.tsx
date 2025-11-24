import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  {
    label: 'SALE',
    href: '#sale',
    isSpecial: true
  },
  {
    label: 'Shop by',
    href: '#shop-by',
    children: [
      { label: 'Best Sellers', href: '#best-sellers' },
      { label: 'New Arrivals', href: '#new' },
      { label: 'Gift Sets', href: '#gifts' }
    ]
  },
  {
    label: 'Necklaces',
    href: '#necklaces',
    children: [
      { label: 'Gold Chains', href: '#gold' },
      { label: 'Silver Pendants', href: '#silver' },
      { label: 'Gemstone', href: '#gemstone' },
      { label: 'Chokers', href: '#chokers' }
    ]
  },
  {
    label: 'Earrings',
    href: '#earrings',
    children: [
      { label: 'Studs', href: '#studs' },
      { label: 'Hoops', href: '#hoops' },
      { label: 'Dangle & Drop', href: '#dangle' }
    ]
  },
  {
    label: 'Accessories',
    href: '#accessories',
    children: [
      { label: 'Bracelets', href: '#bracelets' },
      { label: 'Rings', href: '#rings' },
      { label: 'Anklets', href: '#anklets' }
    ]
  },
  {
    label: 'Contact',
    href: '#contact',
    children: [
      { label: 'Email Us', href: '#email' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Store Locator', href: '#stores' }
    ]
  },
  {
    label: 'Events',
    href: '#events'
  }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for sticky nav visual changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Top Bar: Search | Title | Cart */}
        <div className="flex justify-between items-center relative mb-4">

          {/* Left: Search (Desktop) / Menu (Mobile) */}
          <div className="flex-1 flex justify-start items-center">
            <button
              className="md:hidden p-2 text-brand-dark"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            {/* Revised Desktop Search Bar */}
            <div className="hidden md:flex items-center px-0 py-2 w-72 transition-all">
              <Search size={24} className="text-brand-dark" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-b border-transparent focus:border-gray-300 focus:outline-none text-lg ml-3 w-full text-brand-dark placeholder-gray-400 transition-colors"
              />
            </div>
          </div>

          {/* Center: Brand Title */}
          <div className="flex-1 text-center">
            <h1 className="font-script text-4xl md:text-5xl text-brand-dark cursor-pointer">
              SintabyMarie
            </h1>
          </div>

          {/* Right: Cart */}
          <div className="flex-1 flex justify-end items-center">
            <button className="relative p-2 text-brand-dark hover:text-brand-accent transition-colors">
              <ShoppingBag size={24} />
              {/* Cart Count Badge - Optional */}
              {/* 
              <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span> 
              */}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center space-x-8 border-t border-gray-100 pt-3">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className={`flex items-center text-sm tracking-widest uppercase font-sans transition-colors hover:text-brand-accent py-2 ${item.isSpecial ? 'text-red-600 font-bold' : 'text-brand-dark font-medium'
                  }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown size={12} className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
              </a>

              {/* Dropdown Menu */}
              {item.children && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                  <div className="bg-white shadow-xl border-t-2 border-brand-accent w-48 py-3 flex flex-col items-center rounded-b-sm">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="w-full text-center px-4 py-2 text-sm text-gray-600 hover:text-brand-accent hover:bg-brand-bg/50 transition-colors font-light"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
                className = "bg-transparent border-none focus:outline-none text-base ml-2 w-full text-white placeholder-gray-300"
            />
            </div>

      {navItems.map((item) => (
        <div key={item.label} className="flex flex-col items-center w-full">
          <a
            href={item.href}
            onClick={() => !item.children && setIsMobileMenuOpen(false)}
            className={`text-xl tracking-widest uppercase font-sans ${item.isSpecial ? 'text-red-400 font-bold' : 'text-white'
              }`}
          >
            {item.label}
          </a>
          {/* Simple list for mobile sub-items */}
          {item.children && (
            <div className="flex flex-col items-center mt-3 space-y-2">
              {item.children.map(child => (
                <a
                  key={child.label}
                  href={child.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-300 hover:text-white font-light"
                >
                  {child.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
        </div >
      )}
    </header >
  );
};

export default Header;