import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { CtaBanner } from '../components/CtaBanner';
import { CLEANING_IMAGES } from '../constants/images';
const testimonials = [{
  name: 'Sarah Jenkins',
  role: 'Homeowner • Clifton, NJ',
  img: 'https://i.pravatar.cc/150?img=44',
  quote: 'Global Remote Cleaning completely transformed my home. Their attention to detail is unmatched, and I love coming home to a spotless house after they visit.',
  rating: 5
}, {
  name: 'David Chen',
  role: 'Office Manager • Paterson, NJ',
  img: 'https://i.pravatar.cc/150?img=11',
  quote: 'We hired them for our space cleaning, and the difference is night and day. The team is professional, punctual, and highly thorough.',
  rating: 5
}, {
  name: 'Emily Rodriguez',
  role: 'Real Estate Agent • Passaic, NJ',
  img: 'https://i.pravatar.cc/150?img=5',
  quote: 'I use them for all my move-in/move-out cleanings. They make properties look brand new, which makes my job selling them so much easier.',
  rating: 5
}, {
  name: 'Marcus Thompson',
  role: 'Homeowner • Nutley, NJ',
  img: 'https://i.pravatar.cc/150?img=12',
  quote: 'Reliable, on-time, and the house smells amazing every time they leave. The booking via WhatsApp is so convenient.',
  rating: 5
}, {
  name: 'Priya Patel',
  role: 'Homeowner • Montclair, NJ',
  img: 'https://i.pravatar.cc/150?img=47',
  quote: 'Their deep clean made my kitchen look brand new. Eco-friendly products are a huge plus for my family with young kids.',
  rating: 5
}, {
  name: 'Tom Williams',
  role: 'Restaurant Owner • Clifton, NJ',
  img: 'https://i.pravatar.cc/150?img=14',
  quote: 'Our health inspection scores went up after they started cleaning. Professional team, fair pricing, and they get it done right.',
  rating: 5
}];
export function ReviewsPage() {
  return <>
    <PageBanner title="Loved by hundreds of NJ clients." subtitle="Don't just take our word for it — here's what our customers have to say about working with us." backgroundImage={CLEANING_IMAGES[13]} breadcrumb="Reviews" />

    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Summary */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-brand-light rounded-3xl p-10 mb-16 text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-brand-gold text-brand-gold" />)}
          </div>
          <div className="text-6xl font-serif font-bold text-brand-navy mb-2">
            4.9/5
          </div>
          <p className="text-slate-700 font-semibold">
            Based on 250+ verified reviews
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index % 3 * 0.1
          }} whileHover={{
            y: -8
          }} className="bg-brand-light rounded-3xl p-8 relative border border-slate-100 hover:border-brand-navy/20 hover:shadow-soft transition-all">
            <Quote className="absolute top-6 right-8 w-14 h-14 text-brand-navy/5" />
            <div className="flex text-brand-gold mb-5">
              {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-slate-800 mb-6 leading-relaxed relative z-10">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
              <div>
                <h4 className="font-bold text-brand-ink">{t.name}</h4>
                <p className="text-sm text-slate-600">{t.role}</p>
              </div>
            </div>
          </motion.div>)}
        </div>
      </div>
    </section>

    <CtaBanner />
  </>;
}