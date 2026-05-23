import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';
import { LOGO_URL, SMS_URL, PHONE_DISPLAY } from '../constants/images';
export function Footer() {
  return (
    <footer className="bg-brand-ink text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-3 inline-block mb-6">
              <img
                src={LOGO_URL}
                alt="Global Remote Cleaning Services"
                className="h-20 w-auto object-contain" />

            </div>
            <p className="text-slate-400 leading-relaxed mb-6 text-sm max-w-xs">
              Sparkling Clean Every Time. Premium cleaning across New Jersey.
            </p>
            <a
              href={SMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-greenDark transition-colors">

              <MessageCircle className="w-4 h-4" />
              Text Us
            </a>
          </div>

          {/* Services + Company - side-by-side on mobile */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-2">
            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-5">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors">

                    House Cleaning
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors">

                    Office Cleaning
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors">

                    Deep Cleaning
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors">

                    Move-In / Out
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors">

                    Carpet Care
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-5">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors">

                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-white transition-colors">

                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reviews"
                    className="hover:text-white transition-colors">

                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-white transition-colors">

                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors">

                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-5">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <p>
                  New Jersey
                  <br />
                  Serving the state of New Jersey
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">{PHONE_DISPLAY}</p>
                  <p className="text-xs text-slate-400">
                    Text only
                  </p>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center transition-colors">

                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center transition-colors">

                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Global Remote Cleaning Services.
            All rights reserved.
          </p>
          <div className="text-sm font-medium text-slate-400 flex items-center gap-2">
            A Member of{' '}
            <span className="text-white font-serif italic">
              MacAnthony Groups of Companies
            </span>
          </div>
        </div>
      </div>
    </footer>);

}