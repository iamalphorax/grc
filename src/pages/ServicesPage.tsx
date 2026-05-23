import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Building2,
  Sparkles,
  Key,
  Sofa,
  Droplets,
  Check
} from
  'lucide-react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/PageBanner';
import { CtaBanner } from '../components/CtaBanner';
import { CLEANING_IMAGES } from '../constants/images';
const services = [
  {
    icon: Home,
    title: 'House Cleaning',
    description:
      'Comprehensive residential cleaning tailored to your home — weekly, bi-weekly, monthly, or one-time service.',
    features: [
      'All living areas',
      'Kitchen & bathrooms',
      'Dusting & vacuuming',
      'Trash removal'],

    image: CLEANING_IMAGES[0]
  },
  {
    icon: Building2,
    title: 'Office Cleaning',
    description:
      'Professional cleaning solutions for workspaces — keeping your team productive, healthy, and impressed.',
    features: [
      'Daily, weekly, or custom schedule',
      'Restrooms & break rooms',
      'Floor care',
      'Desks & common areas'],

    image: CLEANING_IMAGES[3]
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description:
      'Thorough top-to-bottom cleaning targeting hidden dirt, grime, and hard-to-reach areas.',
    features: [
      'Inside appliances',
      'Baseboards & vents',
      'Cabinet exteriors',
      'Detailed scrubbing'],

    image: CLEANING_IMAGES[6]
  },
  {
    icon: Key,
    title: 'Move-In / Move-Out',
    description:
      'Detailed cleaning to prepare your old or new space for a fresh, spotless start. Get your deposit back.',
    features: [
      'Empty home detailed clean',
      'Inside cabinets & drawers',
      'Appliance interiors',
      'Walls & floors'],

    image: CLEANING_IMAGES[9]
  },
  // {
  //   icon: Sofa,
  //   title: 'Carpet & Upholstery',
  //   description:
  //     'Specialized stain removal and deep fabric cleaning to revitalize your furnishings and carpets.',
  //   features: [
  //     'Stain treatment',
  //     'Deep extraction',
  //     'Odor removal',
  //     'Furniture refresh'],

  //   image: CLEANING_IMAGES[12]
  // },
  // {
  //   icon: Droplets,
  //   title: 'Window Cleaning',
  //   description:
  //     'Streak-free interior and exterior window washing for crystal clear views throughout your space.',
  //   features: [
  //     'Interior & exterior',
  //     'Sills & tracks',
  //     'Screen cleaning',
  //     'Streak-free finish'],

  //   image: CLEANING_IMAGES[15]
  // }
];

export function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services that leave every surface gleaming."
        subtitle="From routine home cleaning to specialized deep cleans, we cover every space and every detail."
        backgroundImage={CLEANING_IMAGES[13]}
        breadcrumb="Services" />


      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  margin: '-100px'
                }}
                transition={{
                  duration: 0.7
                }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>

                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden aspect-[5/4] shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover" />

                  </div>
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-brand-navy" />
                  </div>
                </div>

                <div>
                  <span className="text-brand-greenDark font-bold tracking-widest uppercase text-sm mb-3 block">
                    ◆ Service {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-brand-ink">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) =>
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-brand-greenDark" />
                        </div>
                        <span className="text-slate-800 text-sm font-medium">
                          {feature}
                        </span>
                      </li>
                    )}
                  </ul>

                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-navyDark transition-all hover:-translate-y-0.5">

                    Get a Free Quote
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>);

}