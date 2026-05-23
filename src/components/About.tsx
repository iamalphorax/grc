import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';
const WHATSAPP_URL = 'https://wa.me/19084764884';
const checklist = [{
  title: 'Trained & vetted professionals',
  desc: 'Every team member is background-checked and trained to our standard.'
}, {
  title: 'Eco-friendly products',
  desc: 'Safe for kids, pets, and the planet — no harsh chemicals.'
}, {
  title: 'Flexible scheduling',
  desc: 'Book one-time or recurring service that fits your life.'
}, {
  title: '100% satisfaction guarantee',
  desc: 'Not happy? We re-clean it free. Simple as that.'
}];
export function About() {
  return <section id="about" className="py-24 md:py-32 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileInView={{
              y: [20, 0]
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }} className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl">
                <img src="/WhatsApp_Image_2026-05-20_at_13.05.12_(1).jpg" alt="Pristine living room interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
              <motion.div whileInView={{
              y: [40, 0]
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: 0.1
            }} className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl mt-8">
                <img src="/WhatsApp_Image_2026-05-20_at_13.05.13_(2).jpg" alt="Spotless bathroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            </div>

            {/* Floating stat card */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }} className="absolute -bottom-6 left-6 md:left-12 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="text-3xl font-serif font-bold text-brand-navy">
                  15+
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-700">
                Years bringing sparkle to NJ homes
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
              ◆ Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-brand-ink">
              Over 15 years of trusted cleaning{' '}
              <span className="text-brand-navy italic font-serif">
                excellence.
              </span>
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Based in New Jersey, Global Remote Cleaning Services delivers
              meticulous results for homes and businesses. As a proud member of
              MacAnthony Groups, we bring decades of reliability to every job.
            </p>

            <ul className="space-y-5 mb-10">
              {checklist.map((item, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1 + 0.2
            }} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-ink mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-700">{item.desc}</p>
                  </div>
                </motion.li>)}
            </ul>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-brand-navy text-white font-bold text-lg hover:bg-brand-navyDark transition-all hover:shadow-glow hover:-translate-y-1">
              <MessageCircle className="w-5 h-5" />
              Message us now
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
}