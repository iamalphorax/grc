import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumb: string;
}
export function PageBanner({
  title,
  subtitle,
  backgroundImage,
  breadcrumb
}: PageBannerProps) {
  return <section className="relative pt-20 md:pt-20">
      <div className="relative h-[55vh] min-h-[400px] md:min-h-[500px] w-full overflow-hidden">
        {/* Background */}
        <motion.img initial={{
        scale: 1.1
      }} animate={{
        scale: 1
      }} transition={{
        duration: 1.5,
        ease: 'easeOut'
      }} src={backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-navy/70" />
        <div className="absolute inset-0 bg-slate-950/20" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.nav initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="flex items-center gap-2 text-sm text-white/80 mb-4 font-semibold">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{breadcrumb}</span>
          </motion.nav>
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.1
        }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] font-serif tracking-tight max-w-4xl">
            {title}
          </motion.h1>
          {subtitle && <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl font-light leading-relaxed">
              {subtitle}
            </motion.p>}
        </div>
      </div>
    </section>;
}