import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SMS_URL } from '../constants/images';
export function CtaBanner() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy relative overflow-hidden">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-green opacity-10 blur-3xl" />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-gold opacity-10 blur-3xl" />


      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">

          Ready for a <span className="italic font-serif">spotless</span> space?
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.1
          }}
          className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">

          Request a free quote or text us directly.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.2
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            to="/quote"
            className="group inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-brand-green text-white font-bold text-lg hover:bg-brand-greenDark transition-all hover:shadow-glow hover:-translate-y-1 w-full sm:w-auto">

            Get a Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={SMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border-2 border-white/30 font-bold text-lg hover:bg-white hover:text-brand-navy transition-all w-full sm:w-auto">

            <MessageCircle className="w-5 h-5" />
            Text Us
          </a>
        </motion.div>
      </div>
    </section>);

}