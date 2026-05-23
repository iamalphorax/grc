import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { LOGO_URL } from '../constants/images';
const navLinks = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Services',
    to: '/services'
  },
  {
    name: 'About',
    to: '/about'
  },
  {
    name: 'Gallery',
    to: '/gallery'
  },
  {
    name: 'Reviews',
    to: '/reviews'
  },
  {
    name: 'Careers',
    to: '/careers'
  },
  {
    name: 'Contact',
    to: '/contact'
  }];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.header
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut'
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${isScrolled ? 'shadow-lg py-2' : 'shadow-sm py-3'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={LOGO_URL}
              alt="Global Remote Cleaning Services"
              className={`transition-all duration-500 object-contain ${isScrolled ? 'h-20 md:h-16' : 'h-20 md:h-16'} group-hover:scale-105`} />

          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) =>
              <motion.div
                key={link.name}
                initial={{
                  opacity: 0,
                  y: -10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: i * 0.05 + 0.2
                }}>

                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-semibold px-4 py-2 rounded-full transition-all hover:bg-brand-navy/5 ${isActive ? 'text-brand-navy bg-brand-navy/5' : 'text-slate-700 hover:text-brand-navy'}`
                  }>

                  {link.name}
                </NavLink>
              </motion.div>
            )}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/quote"
              className="hidden md:inline-flex items-center gap-2 bg-brand-navy text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-navyDark transition-all hover:shadow-glow hover:-translate-y-0.5">

              Get a Free Quote
            </Link>

            <button
              className="lg:hidden p-2 text-slate-800 hover:text-brand-navy rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu">

              {isMobileMenuOpen ?
                <X className="w-6 h-6" /> :

                <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden">

            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) =>
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold py-3 px-4 rounded-lg ${isActive ? 'text-brand-navy bg-brand-light' : 'text-slate-800 hover:bg-brand-light'}`
                  }>

                  {link.name}
                </NavLink>
              )}
              <Link
                to="/quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-full text-sm font-bold mt-3">

                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.header>);

}