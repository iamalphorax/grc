import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Star,
  ShieldCheck,
  Award,
  MessageCircle,
  ArrowRight,
  Sparkles
} from
  'lucide-react';
import { Link } from 'react-router-dom';
import { CLEANING_IMAGES, BAImages, cleaners } from '../constants/images';
export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Full-bleed background image with parallax */}
      <motion.div
        style={{
          y
        }}
        className="absolute inset-0 z-0">

        <img
          src={CLEANING_IMAGES[0]}
          alt=""
          className="w-full h-[120%] object-cover" />

        <div className="absolute inset-0 bg-brand-navy/75" />
        <div className="absolute inset-0 bg-slate-950/30" />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-32 left-10 w-24 h-24 rounded-full bg-brand-green/20 blur-2xl z-10"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />

      <motion.div
        className="absolute bottom-32 right-10 w-32 h-32 rounded-full bg-brand-gold/20 blur-2xl z-10"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />


      {/* Floating image collage on right (desktop only) */}
      <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 z-10 w-[420px]">
        <motion.div
          initial={{
            opacity: 0,
            x: 50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1,
            delay: 0.4
          }}
          className="relative h-[520px]">

          <motion.img
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            src={CLEANING_IMAGES[22]}
            alt="Clean home interior"
            className="absolute top-0 right-0 w-72 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/20" />

          <motion.img
            animate={{
              y: [0, 15, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5
            }}
            src={CLEANING_IMAGES[13]}
            alt="Sparkling room"
            className="absolute bottom-0 left-0 w-64 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/20" />

        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        style={{
          opacity
        }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">

        <div className="max-w-3xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8">

            <Sparkles className="w-4 h-4 text-brand-gold fill-brand-gold" />
            <span>Serving the States of New Jersey</span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.1
            }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-8 font-serif tracking-tight">

            Professional cleaning,
            <br />
            <span className="italic font-light text-white/95">with a</span>{' '}
            <span className="relative inline-block">
              <span className="relative z-10">lasting </span>
              <motion.span
                initial={{
                  scaleX: 0
                }}
                animate={{
                  scaleX: 1
                }}
                transition={{
                  duration: 0.8,
                  delay: 1
                }}
                style={{
                  originX: 0
                }}
                className="absolute bottom-2 left-0 right-0 h-3 md:h-4 bg-brand-green/70 -z-0" />

            </span>{' '}
            <span className="italic font-light text-white/95">shine.</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed font-light">
            Premium cleaning services, serving the state of NJ. 15+ years of trusted excellence — text us to start your booking.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.5
            }}
            className="flex flex-col sm:flex-row gap-4 mb-12">

            <Link
              to="/quote"
              className="group inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-brand-green text-white font-bold text-lg hover:bg-brand-greenDark transition-all hover:shadow-glow hover:-translate-y-1">

              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border-2 border-white/30 font-bold text-lg hover:bg-white hover:text-brand-navy transition-all">

              Explore Services
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.7
            }}
            className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-white/20">

            <div className="flex items-center gap-2 text-white">
              <Award className="w-5 h-5 text-brand-gold" />
              <span className="text-sm md:text-base font-semibold">
                15+ Years Experience
              </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="flex">
                {[...Array(5)].map((_, i) =>
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold" />
                )}
              </div>
              <span className="text-sm md:text-base font-semibold">
                5-Star Rated
              </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
              <span className="text-sm md:text-base font-semibold">
                Fully Insured
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-white/70">

        <span className="text-xs uppercase tracking-widest font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
          className="w-px h-12 bg-white/40" />

      </motion.div> */}
    </section>);

}