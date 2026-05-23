import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Sparkles, Key, Sofa, Droplets, ArrowRight } from 'lucide-react';
const services = [{
  icon: Home,
  title: 'House Cleaning',
  description: 'Comprehensive residential cleaning tailored to your home — weekly, bi-weekly, or one-time.',
  image: "/WhatsApp_Image_2026-05-20_at_13.05.12.jpg"
}, {
  icon: Building2,
  title: 'Office Cleaning',
  description: 'Professional cleaning solutions for workspaces — keeping your team productive and healthy.',
  image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  icon: Sparkles,
  title: 'Deep Cleaning',
  description: 'Thorough top-to-bottom cleaning targeting hidden dirt and hard-to-reach areas.',
  image: "/WhatsApp_Image_2026-05-20_at_13.05.13_(1).jpg"
}, {
  icon: Key,
  title: 'Move-In / Move-Out',
  description: 'Detailed cleaning to prepare your old or new space for a fresh, spotless start.',
  image: "/WhatsApp_Image_2026-05-20_at_13.05.13.jpg"
},
  // {
  //   icon: Sofa,
  //   title: 'Carpet & Upholstery',
  //   description: 'Specialized stain removal and deep fabric cleaning to revitalize your furnishings.',
  //   image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  // }, {
  //   icon: Droplets,
  //   title: 'Window Cleaning',
  //   description: 'Streak-free interior and exterior window washing for crystal clear views.',
  //   image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  // }
];
export function Services() {
  return <section id="services" className="py-24 md:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
        <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="lg:col-span-7">
          <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
            ◆ Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-ink">
            Professional cleaning for every space.
          </h2>
        </motion.div>
        <motion.p initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="lg:col-span-5 text-lg text-slate-700 leading-relaxed">
          From daily upkeep to specialized deep cleaning, we deliver
          immaculate results with eco-friendly products and a meticulous eye
          for detail.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => <motion.a href="#contact" key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-50px'
        }} transition={{
          duration: 0.5,
          delay: index % 3 * 0.1
        }} whileHover={{
          y: -8
        }} className="group block bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-brand-navy hover:shadow-glow transition-all duration-300">
          {/* Image header */}
          <div className="relative h-48 overflow-hidden bg-slate-100">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand-navy/30 group-hover:bg-brand-navy/10 transition-colors duration-300" />
            <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center">
              <service.icon className="w-7 h-7 text-brand-navy" />
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-brand-ink group-hover:text-brand-navy transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-700 mb-5 leading-relaxed text-sm">
              {service.description}
            </p>
            <div className="flex items-center text-brand-navy font-bold text-sm">
              Get a quote
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.a>)}
      </div>
    </div>
  </section>;
}