import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin, DollarSign, Heart, Award, GraduationCap, ArrowRight, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { PageBanner } from '../components/PageBanner';
import { CLEANING_IMAGES, SMS_URL } from '../constants/images';
const openings = [{
  title: 'Residential Cleaning Specialist',
  type: 'Full-time',
  location: 'Clifton, NJ',
  pay: '$18 – $24 / hr',
  description: 'Join our residential team and bring sparkle to homes across New Jersey.'
}, {
  title: 'Team Lead / Supervisor',
  type: 'Full-time',
  location: 'Clifton, NJ',
  pay: '$26 – $32 / hr',
  description: 'Lead a small team, ensure quality on every job, and grow with our company.'
}, {
  title: 'Deep Cleaning Specialist',
  type: 'Part-time / Contract',
  location: 'Clifton, NJ',
  pay: '$22 – $28 / hr',
  description: 'Specialized role for detail-oriented cleaners who excel at thorough deep cleans.'
}];
const benefits = [{
  icon: DollarSign,
  title: 'Competitive Pay',
  desc: 'Above-market hourly rates with tips and bonuses.'
}, {
  icon: Clock,
  title: 'Flexible Schedule',
  desc: 'Choose hours that fit your life — full-time or part-time.'
}, {
  icon: GraduationCap,
  title: 'Paid Training',
  desc: 'Get paid while learning our professional standards.'
}, {
  icon: Heart,
  title: 'Supportive Team',
  desc: 'Work with kind, respectful colleagues who have your back.'
}, {
  icon: Award,
  title: 'Performance Bonuses',
  desc: 'Earn extra through quality bonuses and client tips.'
}, {
  icon: Briefcase,
  title: 'Growth Path',
  desc: 'Move up to lead, supervisor, or specialized roles.'
}];
export function CareersPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application received! We'll contact you via text shortly.");
    (e.target as HTMLFormElement).reset();
  };
  return <>
    <PageBanner title="Build a career, not just a job." subtitle="Join a team that values your work, respects your time, and pays what you're worth." backgroundImage={CLEANING_IMAGES[13]} breadcrumb="Careers" />

    {/* Why work with us */}
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
            ◆ Why Join Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink mb-6">
            Work with people who{' '}
            <span className="italic font-serif text-brand-navy">value</span>{' '}
            you.
          </h2>
          <p className="text-lg text-slate-700">
            We're a member of MacAnthony Groups — a stable, growing business
            that invests in its team for the long haul.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => <motion.div key={i} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i % 3 * 0.1
          }} whileHover={{
            y: -6
          }} className="bg-brand-light rounded-3xl p-8 hover:shadow-soft transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm">
              <benefit.icon className="w-7 h-7 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-brand-ink">
              {benefit.title}
            </h3>
            <p className="text-slate-700">{benefit.desc}</p>
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* Open Positions */}
    <section className="py-20 md:py-28 bg-brand-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
            ◆ Open Positions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
            We're{' '}
            <span className="italic font-serif text-brand-navy">hiring.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {openings.map((job, i) => <motion.div key={i} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.08
          }} className="group bg-white rounded-3xl p-6 md:p-8 border border-slate-100 hover:border-brand-navy hover:shadow-soft transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-brand-ink mb-3">
                  {job.title}
                </h3>
                <p className="text-slate-700 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-semibold">
                    <Briefcase className="w-3.5 h-3.5" /> {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-greenDark font-semibold">
                    <MapPin className="w-3.5 h-3.5" /> {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-brand-goldDark font-semibold">
                    <DollarSign className="w-3.5 h-3.5" /> {job.pay}
                  </span>
                </div>
              </div>
              <a href="#apply" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-navyDark transition-all hover:-translate-y-0.5">
                Apply
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* Application Form */}
    <section id="apply" className="py-20 md:py-28 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-4 block">
            ◆ Apply Now
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
            Join our{' '}
            <span className="italic font-serif text-brand-navy">team.</span>
          </h2>
          <p className="text-slate-700">
            Fill out the form below, or message us directly by text to get
            started today.
          </p>
        </div>

        <motion.form initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} onSubmit={handleSubmit} className="bg-brand-light p-8 md:p-10 rounded-3xl space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="cname" className="block text-sm font-semibold text-slate-800 mb-2">
                Full Name
              </label>
              <input type="text" id="cname" required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all bg-white text-slate-900" placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="cphone" className="block text-sm font-semibold text-slate-800 mb-2">
                Phone Number
              </label>
              <input type="tel" id="cphone" required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all bg-white text-slate-900" placeholder="(908) 000-0000" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="cemail" className="block text-sm font-semibold text-slate-800 mb-2">
                Email (optional)
              </label>
              <input type="email" id="cemail" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all bg-white text-slate-900" placeholder="jane@example.com" />
            </div>
            <div>
              <label htmlFor="cposition" className="block text-sm font-semibold text-slate-800 mb-2">
                Position Interested In
              </label>
              <select id="cposition" required defaultValue="" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all bg-white text-slate-900">
                <option value="" disabled>
                  Select a role...
                </option>
                {openings.map((o) => <option key={o.title} value={o.title}>
                  {o.title}
                </option>)}
                <option value="general">General Application</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="cexp" className="block text-sm font-semibold text-slate-800 mb-2">
              Cleaning Experience
            </label>
            <select id="cexp" required defaultValue="" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all bg-white text-slate-900">
              <option value="" disabled>
                Select experience level...
              </option>
              <option>No experience — willing to learn</option>
              <option>Less than 1 year</option>
              <option>1 – 3 years</option>
              <option>3 – 5 years</option>
              <option>5+ years</option>
            </select>
          </div>

          <div>
            <label htmlFor="cmsg" className="block text-sm font-semibold text-slate-800 mb-2">
              Tell us about yourself
            </label>
            <textarea id="cmsg" rows={4} required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all bg-white text-slate-900 resize-none" placeholder="A few sentences about why you'd be a great fit..." />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button type="submit" className="flex-1 py-4 rounded-xl bg-brand-navy text-white font-bold text-lg hover:bg-brand-navyDark transition-all hover:-translate-y-0.5">
              Submit Application
            </button>
            <a href={SMS_URL} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 rounded-xl bg-brand-green text-white font-bold text-lg hover:bg-brand-greenDark transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Apply via Text
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  </>;
}