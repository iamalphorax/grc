import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CalendarCheck, Sparkles, Smile } from 'lucide-react';
const steps = [{
  icon: MessageCircle,
  title: 'Text Us',
  description: 'Reach out via text — quick and easy. No phone calls needed.'
}, {
  icon: CalendarCheck,
  title: 'We Confirm',
  description: 'We finalize the details and schedule a time that works best for you.'
}, {
  icon: Sparkles,
  title: 'Expert Cleaning',
  description: 'Our vetted professionals arrive on time and deliver a meticulous clean.'
}, {
  icon: Smile,
  title: 'Enjoy the Sparkle',
  description: 'Relax and enjoy your fresh, spotless, and healthy environment.'
}];
export function Process() {
  return <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'radial-gradient(circle, #1E3A8A 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.span initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
          ◆ How It Works
        </motion.span>
        <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-ink">
          Four simple steps to a{' '}
          <span className="italic font-serif text-brand-navy">spotless</span>{' '}
          space.
        </motion.h2>
      </div>

      <div className="relative">
        {/* Animated connecting line */}
        <motion.div initial={{
          scaleX: 0
        }} whileInView={{
          scaleX: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1.5,
          delay: 0.3
        }} style={{
          originX: 0
        }} className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-brand-navy/20 -z-10" />

        <div className="grid md:grid-cols-4 gap-12 md:gap-6">
          {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.15
          }} className="relative text-center group">
            <motion.div whileHover={{
              scale: 1.1,
              rotate: 5
            }} className="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-soft relative z-10 group-hover:bg-brand-navy transition-colors duration-300">
              <div className="absolute -top-3 -right-3 w-9 h-9 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-brand-light">
                {index + 1}
              </div>
              <step.icon className="w-10 h-10 text-brand-navy group-hover:text-white transition-colors" />
            </motion.div>
            <h3 className="text-xl font-bold mb-3 text-brand-ink">
              {step.title}
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed max-w-[220px] mx-auto">
              {step.description}
            </p>
          </motion.div>)}
        </div>
      </div>
    </div>
  </section>;
}