import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building2, Sparkles, Key, Sofa, Droplets, Star, Quote } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { CtaBanner } from '../components/CtaBanner';
import { CLEANING_IMAGES } from '../constants/images';
const previewServices = [{
  icon: Home,
  title: 'House Cleaning',
  desc: 'Recurring or one-time for spotless homes.'
}, {
  icon: Building2,
  title: 'Office Cleaning',
  desc: 'Healthy workspaces that boost productivity.'
}, {
  icon: Sparkles,
  title: 'Deep Cleaning',
  desc: 'Top-to-bottom thorough refresh.'
}, {
  icon: Key,
  title: 'Move-In / Out',
  desc: 'Move with confidence into clean spaces.'
},
  // {
  //   icon: Sofa,
  //   title: 'Carpet Care',
  //   desc: 'Stain removal and fabric revival.'
  // }, {
  //   icon: Droplets,
  //   title: 'Windows',
  //   desc: 'Crystal-clear, streak-free views.'
  // }
];
const homeTestimonials = [{
  name: 'Sarah Jenkins',
  role: 'Homeowner • Clifton',
  img: 'https://i.pravatar.cc/150?img=44',
  quote: 'They transformed my home. Attention to detail is unmatched.'
}, {
  name: 'David Chen',
  role: 'Office Manager • Paterson',
  img: 'https://i.pravatar.cc/150?img=11',
  quote: 'Professional, punctual, and meticulous. Highly recommended!'
}];
export function HomePage() {
  return <>
    <Hero />
    <Stats />

    {/* About Preview */}
    <section className="py-24 md:py-32 bg-brand-light">
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
          <img src={CLEANING_IMAGES[15]} alt="Clean space" className="rounded-3xl aspect-[3/4] object-cover shadow-xl" />
          <img src={CLEANING_IMAGES[6]} alt="Clean space" className="rounded-3xl aspect-[3/4] object-cover shadow-xl mt-8" />
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
            ◆ About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-brand-ink">
            15+ years of{' '}
            <span className="italic font-serif text-brand-navy">
              trusted excellence.
            </span>
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Based in Clifton, New Jersey, we provide top quality cleaning services with unmatched attention to detail for homes and businesses. As a trusted member of the MacAnthony Groups, we are committed to professionalism, reliability, and excellence in every space we clean. Using eco-friendly products and proven cleaning methods, we guarantee spotless results and 100% customer satisfaction with every clean.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-navy text-white font-bold text-lg hover:bg-brand-navyDark transition-all hover:shadow-glow hover:-translate-y-1">
            Learn About Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
            ◆ What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink mb-6">
            Services that{' '}
            <span className="italic font-serif text-brand-navy">
              sparkle.
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service, i) => <motion.div key={i} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i % 3 * 0.1
          }} whileHover={{
            y: -6
          }} className="group p-7 bg-brand-light rounded-3xl border border-transparent hover:border-brand-navy hover:bg-white hover:shadow-soft transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:bg-brand-navy transition-colors">
              <service.icon className="w-7 h-7 text-brand-navy group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-brand-ink">
              {service.title}
            </h3>
            <p className="text-slate-700 text-sm">{service.desc}</p>
          </motion.div>)}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-brand-navy font-bold text-lg hover:gap-3 transition-all">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>

    {/* Gallery Teaser */}
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
              ◆ Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-ink">
              See the sparkle.
            </h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-brand-navy font-bold hover:gap-3 transition-all">
            View Full Gallery <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CLEANING_IMAGES.slice(0, 4).map((img, i) => <motion.div key={i} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.08
          }} className="aspect-square overflow-hidden rounded-2xl group">
            <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* Testimonials Teaser */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
            ◆ Client Love
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink">
            What our clients{' '}
            <span className="italic font-serif text-brand-navy">say.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {homeTestimonials.map((t, i) => <motion.div key={i} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.1
          }} className="bg-brand-light rounded-3xl p-8 relative border border-slate-100">
            <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-navy/5" />
            <div className="flex text-brand-gold mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-slate-800 mb-6 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-bold text-brand-ink text-sm">{t.name}</p>
                <p className="text-xs text-slate-600">{t.role}</p>
              </div>
            </div>
          </motion.div>)}
        </div>
        <div className="text-center mt-10">
          <Link to="/reviews" className="inline-flex items-center gap-2 text-brand-navy font-bold hover:gap-3 transition-all">
            Read All Reviews <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>

    <CtaBanner />
  </>;
}