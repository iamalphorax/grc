import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Award, Users, Leaf, Heart } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { Process } from '../components/Process';
import { Stats } from '../components/Stats';
import { CLEANING_IMAGES, SMS_URL, BAImages, cleaners } from '../constants/images';
const values = [{
  icon: Heart,
  title: 'Care',
  desc: 'We treat every home like our own — meticulous and respectful.'
}, {
  icon: Leaf,
  title: 'Eco-Conscious',
  desc: 'Safe products for your family, pets, and the planet.'
}, {
  icon: Users,
  title: 'Trusted Team',
  desc: 'Background-checked, vetted, professional trained, and continuously being trained.'
}, {
  icon: Award,
  title: 'Excellence',
  desc: '15+ years of consistently exceeding expectations.'
}];
const checklist = ['Trained & vetted professionals', 'Eco-friendly cleaning products', 'Flexible scheduling', '100% satisfaction guarantee', 'Fully insured', 'Text-based booking'];
export function AboutPage() {
  return <>
    <PageBanner title="Cleaning, perfected over 15 years." subtitle="A trusted member of MacAnthony Groups, serving homes and businesses across Clifton, NJ." backgroundImage={CLEANING_IMAGES[16]} breadcrumb="About" />

    {/* Story */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="grid grid-cols-2 gap-4">
          <img src={BAImages[2]} alt="Clean space" className="rounded-3xl aspect-[3/4] object-cover shadow-xl" />
          <img src={BAImages[5]} alt="Clean space" className="rounded-3xl aspect-[3/4] object-cover shadow-xl mt-12" />
        </motion.div>

        <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
          <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
            ◆ Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-brand-ink">
            Built on trust. Driven by{' '}
            <span className="italic font-serif text-brand-navy">detail.</span>
          </h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Global Remote Cleaning Services was founded with a simple belief:
            a clean space transforms how you live and work. For over 15 years,
            we've delivered meticulous, dependable cleaning to families and
            businesses across States of New Jersey and the surrounding communities.
          </p>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            As part of MacAnthony Groups of Companies, we bring institutional
            reliability to a deeply personal service — every clean is
            handchecked, every client is known by name.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {checklist.map((item, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.08
            }} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span className="text-slate-800 font-medium text-sm">
                {item}
              </span>
            </motion.li>)}
          </ul>
        </motion.div>
      </div>
    </section>

    <Stats />

    {/* Values */}
    <section className="py-20 md:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
            ◆ Our Values
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink mb-6">
            What guides our{' '}
            <span className="italic font-serif text-brand-navy">work.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => <motion.div key={i} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.1
          }} whileHover={{
            y: -6
          }} className="bg-white rounded-3xl p-8 text-center hover:shadow-soft transition-all">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-navy/5 flex items-center justify-center mb-5">
              <value.icon className="w-8 h-8 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-brand-ink">
              {value.title}
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              {value.desc}
            </p>
          </motion.div>)}
        </div>
      </div>
    </section>

    <Process />

    {/* CTA */}
    <section className="py-24 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to experience the{' '}
          <span className="italic font-serif">difference?</span>
        </h2>
        <a href={SMS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-green text-white font-bold text-lg hover:bg-brand-greenDark transition-all hover:-translate-y-1">
          <MessageCircle className="w-5 h-5" />
          Text us
        </a>
      </div>
    </section>
  </>;
}