import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Clock, Instagram, Facebook } from 'lucide-react';
import { toast } from 'sonner';
const SMS_URL = 'sms:+19089759421';
export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request received! We'll text you back shortly.");
    (e.target as HTMLFormElement).reset();
  };
  return <section id="contact" className="py-24 md:py-32 bg-brand-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
          ◆ Get in Touch
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-ink">
          Let's get your space{' '}
          <span className="italic font-serif text-brand-navy">
            sparkling.
          </span>
        </h2>
        <p className="text-lg text-slate-700">
          Text us — it's the fastest way to book.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Form */}
        <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-soft border border-slate-100 space-y-6">
            <h3 className="text-2xl font-bold text-brand-ink mb-2">
              Request a free quote
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Fill out the form or text us directly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-2">
                  Full Name
                </label>
                <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all text-slate-900" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-800 mb-2">
                  Phone Number
                </label>
                <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all text-slate-900" placeholder="(908) 000-0000" />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-slate-800 mb-2">
                Service Needed
              </label>
              <select id="service" required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all bg-white text-slate-900" defaultValue="">
                <option value="" disabled>
                  Select a service...
                </option>
                <option value="house">House Cleaning</option>
                <option value="office">Office Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="move">Move-In / Move-Out</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-2">
                Tell us about your space
              </label>
              <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all resize-none text-slate-900" placeholder="Square footage, special requests, preferred date..." />
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-brand-navy text-white font-bold text-lg hover:bg-brand-navyDark transition-all hover:shadow-glow hover:-translate-y-0.5">
              Send Request
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="lg:col-span-2 space-y-6">
          {/* Quick contact card */}
          <div className="bg-brand-navy text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <motion.div animate={{
              scale: [1, 1.2, 1]
            }} transition={{
              duration: 4,
              repeat: Infinity
            }} className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-xl text-white font-bold mb-2 relative z-10">
              Fastest way to reach us
            </h3>
            <p className="text-white/80 text-sm mb-6 relative z-10">
              Text only — no phone calls.
            </p>

            <div className="space-y-3 relative z-10">
              <a href={SMS_URL} className="flex items-center gap-4 p-4 rounded-2xl bg-brand-green hover:bg-brand-greenDark transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/80 font-semibold">
                    Text Us
                  </p>
                  <p className="text-lg font-bold text-white">
                    908-975-9421
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-brand-navy/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <h4 className="font-bold text-brand-ink mb-1">
                  Service Area
                </h4>
                <p className="text-slate-700 text-sm">
                  Serving the state of New Jersey
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-brand-navy/5 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <h4 className="font-bold text-brand-ink mb-1">
                  Working Hours
                </h4>
                <p className="text-slate-700 text-sm">
                  Mon – Sat: 8:00 AM – 7:00 PM
                  <br />
                  Sun: By appointment
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h4 className="font-bold text-brand-ink mb-3 text-sm">
                Follow Us
              </h4>
              <div className="flex gap-3">
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-brand-green transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-brand-green transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
}