import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const testimonials = [{
  name: 'Sarah Jenkins',
  role: 'Homeowner • Clifton, NJ',
  image: 'https://i.pravatar.cc/150?img=44',
  quote: 'Global Remote Cleaning completely transformed my home. Their attention to detail is unmatched, and I love coming home to a spotless house after they visit.'
}, {
  name: 'David Chen',
  role: 'Office Manager • Paterson, NJ',
  image: 'https://i.pravatar.cc/150?img=11',
  quote: 'We hired them for our space cleaning, and the difference is night and day. The team is professional, punctual, and highly thorough. Highly recommended!'
}, {
  name: 'Emily Rodriguez',
  role: 'Real Estate Agent • Passaic, NJ',
  image: 'https://i.pravatar.cc/150?img=5',
  quote: 'I use them for all my move-in/move-out cleanings. They make properties look brand new, which makes my job selling them so much easier. Fantastic service.'
}];
export function Testimonials() {
  return <section id="testimonials" className="py-24 md:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
          ◆ Client Love
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
          What our clients{' '}
          <span className="italic font-serif text-brand-navy">say.</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -8
        }} className="bg-brand-light rounded-3xl p-8 relative border border-slate-100 hover:border-brand-navy/20 hover:shadow-soft transition-all">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-brand-navy/5" />

          <div className="flex text-brand-gold mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>

          <p className="text-slate-800 mb-8 leading-relaxed relative z-10 text-base">
            "{testimonial.quote}"
          </p>

          <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200">
            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
            <div>
              <h4 className="font-bold text-brand-ink">
                {testimonial.name}
              </h4>
              <p className="text-sm text-slate-600">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>)}
      </div>
    </div>
  </section>;
}