import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
function Counter({
  to,
  suffix = ''



}: {to: number;suffix?: string;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 2,
        ease: 'easeOut'
      });
      return controls.stop;
    }
  }, [inView, to, count]);
  return <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>;
}
const stats = [{
  value: 15,
  suffix: '+',
  label: 'Years Experience'
}, {
  value: 2500,
  suffix: '+',
  label: 'Happy Clients'
}, {
  value: 50,
  suffix: '+',
  label: 'Trained Staff'
}, {
  value: 100,
  suffix: '%',
  label: 'Satisfaction Guarantee'
}];
export function Stats() {
  return <section className="relative -mt-20 z-30 mx-4 sm:mx-6 lg:mx-8">
      <motion.div initial={{
      opacity: 0,
      y: 50
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-y lg:divide-y-0 divide-slate-100">
          {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="p-8 md:p-10 text-center group hover:bg-brand-light transition-colors">
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-navy mb-2">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-700 font-semibold text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>)}
        </div>
      </motion.div>
    </section>;
}