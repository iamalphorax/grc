import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  MessageCircle,
  Calendar,
  Home,
  Building2,
  Sparkles,
  Key,
  Sofa,
  Droplets
} from
  'lucide-react';
import { toast } from 'sonner';
import { PageBanner } from '../components/PageBanner';
import { CLEANING_IMAGES, SMS_URL } from '../constants/images';
const SERVICES = [
  {
    id: 'house',
    label: 'House Cleaning',
    icon: Home
  },
  {
    id: 'office',
    label: 'Office / Commercial',
    icon: Building2
  },
  {
    id: 'deep',
    label: 'Deep Cleaning',
    icon: Sparkles
  },
  {
    id: 'move',
    label: 'Move-In / Move-Out',
    icon: Key
  },
  // {
  //   id: 'carpet',
  //   label: 'Carpet & Upholstery',
  //   icon: Sofa
  // },
  // {
  //   id: 'window',
  //   label: 'Window Cleaning',
  //   icon: Droplets
  // }
];

const FREQUENCIES = ['One-time', 'Weekly', 'Bi-weekly', 'Monthly'];
const BEDROOMS = ['Studio', '1', '2', '3', '4', '5+'];
export function QuotePage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [frequency, setFrequency] = useState<string>('');
  const [bedrooms, setBedrooms] = useState<string>('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Quote request received! We'll text you back within the hour."
    );
    (e.target as HTMLFormElement).reset();
    setSelectedService(null);
    setFrequency('');
    setBedrooms('');
  };
  return (
    <>
      <PageBanner
        title="Get a free quote — fast."
        subtitle="Tell us a bit about your space and we'll send a personalized quote within the hour."
        backgroundImage={CLEANING_IMAGES[13]}
        breadcrumb="Get a Quote" />


      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Side info */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="lg:col-span-1 space-y-6">

              <div className="bg-brand-navy text-white rounded-3xl p-6">
                <h3 className="font-bold text-lg mb-4 text-[#FFFFFF]">
                  What happens next?
                </h3>
                <ol className="space-y-3 text-sm">
                  {[
                    'Submit your quote request',
                    'We review your needs',
                    'Receive a quote via text',
                    'Schedule your first clean'].
                    map((step, i) =>
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-white/90">{step}</span>
                      </li>
                    )}
                </ol>
              </div>

              <div className="bg-brand-light rounded-3xl p-6">
                <h3 className="font-bold text-brand-ink mb-3">
                  Prefer to chat?
                </h3>
                <p className="text-sm text-slate-700 mb-4">
                  Message us directly by text for the fastest quote.
                </p>
                <a
                  href={SMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-green text-white px-4 py-2.5 rounded-full text-sm font-bold hover:bg-brand-greenDark transition-colors">

                  <MessageCircle className="w-4 h-4" />
                  Text Us
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
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
              onSubmit={handleSubmit}
              className="lg:col-span-2 bg-brand-light rounded-3xl p-8 md:p-10 space-y-8">

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-bold text-brand-ink mb-4">
                  1. What type of service do you need?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SERVICES.map((s) =>
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`relative p-4 rounded-2xl border-2 transition-all text-left ${selectedService === s.id ? 'border-brand-navy bg-white shadow-md' : 'border-slate-200 bg-white hover:border-brand-navy/40'}`}>

                      {selectedService === s.id &&
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-brand-navy text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      }
                      <s.icon
                        className={`w-6 h-6 mb-2 ${selectedService === s.id ? 'text-brand-navy' : 'text-slate-600'}`} />

                      <p className="text-xs font-semibold text-brand-ink leading-tight">
                        {s.label}
                      </p>
                    </button>
                  )}
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-bold text-brand-ink mb-4">
                  2. How often do you need cleaning?
                </label>
                <div className="flex flex-wrap gap-2">
                  {FREQUENCIES.map((f) =>
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${frequency === f ? 'bg-brand-navy text-white' : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-brand-navy/40'}`}>

                      {f}
                    </button>
                  )}
                </div>
              </div>

              {/* Property Size */}
              <div>
                <label className="block text-sm font-bold text-brand-ink mb-4">
                  3. How many bedrooms?{' '}
                  <span className="text-slate-500 font-normal">
                    (or skip for commercial)
                  </span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {BEDROOMS.map((b) =>
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBedrooms(b)}
                      className={`min-w-[56px] px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${bedrooms === b ? 'bg-brand-navy text-white' : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-brand-navy/40'}`}>

                      {b}
                    </button>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-slate-200 space-y-5">
                <label className="block text-sm font-bold text-brand-ink">
                  4. Your contact info
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="qname"
                      className="block text-xs font-semibold text-slate-700 mb-2">

                      Full Name
                    </label>
                    <input
                      type="text"
                      id="qname"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none bg-white text-slate-900"
                      placeholder="John Doe" />

                  </div>
                  <div>
                    <label
                      htmlFor="qphone"
                      className="block text-xs font-semibold text-slate-700 mb-2">

                      Phone (text preferred)
                    </label>
                    <input
                      type="tel"
                      id="qphone"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none bg-white text-slate-900"
                      placeholder="(908) 000-0000" />

                  </div>
                </div>

                <div>
                  <label
                    htmlFor="qzip"
                    className="block text-xs font-semibold text-slate-700 mb-2">

                    ZIP / Area
                  </label>
                  <input
                    type="text"
                    id="qzip"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none bg-white text-slate-900"
                    placeholder="07011 (Clifton, NJ)" />

                </div>

                <div>
                  <label
                    htmlFor="qdate"
                    className="block text-xs font-semibold text-slate-700 mb-2">

                    <Calendar className="w-3.5 h-3.5 inline mr-1" />
                    Preferred date{' '}
                    <span className="text-slate-500 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="date"
                    id="qdate"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none bg-white text-slate-900" />

                </div>

                <div>
                  <label
                    htmlFor="qnotes"
                    className="block text-xs font-semibold text-slate-700 mb-2">

                    Anything else we should know?{' '}
                    <span className="text-slate-500 font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="qnotes"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none bg-white text-slate-900 resize-none"
                    placeholder="Pets, square footage, special requests..." />

                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-brand-navy text-white font-bold text-lg hover:bg-brand-navyDark transition-all hover:-translate-y-0.5 hover:shadow-glow">

                Request My Free Quote
              </button>
              <p className="text-xs text-slate-600 text-center">
                No spam, no obligation. We'll reach out via text within the
                hour.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </>);

}