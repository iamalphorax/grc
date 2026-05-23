import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { SMS_URL, PHONE_DISPLAY } from '../constants/images';
export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen &&
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.9
            }}
            transition={{
              duration: 0.25
            }}
            className="bg-white rounded-2xl shadow-2xl p-5 w-72 border border-slate-100">

            <div className="flex items-start gap-3 mb-3">
              <div className="w-11 h-11 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-brand-ink text-sm">
                  Global Cleaning
                </h4>
                <p className="text-xs text-slate-500">
                  Usually replies in minutes
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="text-slate-400 hover:text-slate-700">

                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-brand-light rounded-xl p-3 mb-3">
              <p className="text-sm text-slate-800">
                Hi 👋 Need a clean home or office? Text us at{' '}
                <span className="font-bold">{PHONE_DISPLAY}</span> and we'll
                respond fast.
              </p>
            </div>
            <a
              href={SMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brand-green text-white font-bold py-3 rounded-xl hover:bg-brand-greenDark transition-colors text-sm">

              Start Chat
            </a>
          </motion.div>
        }
      </AnimatePresence>

      <AnimatePresence>
        {isVisible &&
          <motion.button
            initial={{
              scale: 0,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0,
              opacity: 0
            }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Text Us"
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-green hover:bg-brand-greenDark text-white shadow-2xl flex items-center justify-center transition-colors group">

            <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-30" />
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
          </motion.button>
        }
      </AnimatePresence>
    </div>);

}