import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLEANING_IMAGES } from '../constants/images';
const FILTERS = ['All', 'Living Spaces', 'Kitchens & Baths', 'Detail Work'];
const labels = ['Spotless Living Area', 'Pristine Kitchen', 'Bathroom Refresh', 'Detail Cleaning', 'Move-In Ready', 'Deep Clean Result'];

export function Gallery({ images }: { images?: string[] }) {
  const [filter, setFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sourceImages = images ?? CLEANING_IMAGES;
  const categorized = sourceImages.map((src, i) => ({
    src,
    category: i % 3 === 0 ? 'Living Spaces' : i % 3 === 1 ? 'Kitchens & Baths' : 'Detail Work',
    label: labels[i % labels.length]
  }));
  const filtered = filter === 'All' ? categorized : categorized.filter((img) => img.category === filter);
  const next = () => setSelectedIndex((i) => i === null ? 0 : (i + 1) % filtered.length);
  const prev = () => setSelectedIndex((i) => i === null ? 0 : (i - 1 + filtered.length) % filtered.length);
  return <section className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Filter Tabs */}
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="flex flex-wrap justify-center gap-2 mb-12">
        {FILTERS.map((f) => <button key={f} onClick={() => setFilter(f)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${filter === f ? 'bg-brand-navy text-white shadow-lg' : 'bg-brand-light text-slate-700 hover:bg-slate-200'}`}>
          {f}
        </button>)}
      </motion.div>

      {/* Masonry Grid */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-5">
        <AnimatePresence>
          {filtered.map((img, index) => <motion.button key={img.src} layout onClick={() => setSelectedIndex(index)} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.9
          }} transition={{
            duration: 0.4,
            delay: index % 8 * 0.05
          }} whileHover={{
            y: -4
          }} className="group block w-full mb-4 md:mb-5 break-inside-avoid relative overflow-hidden rounded-2xl bg-slate-100">
            <img src={img.src} alt={img.label} loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-bold text-sm bg-brand-navy/80 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                {img.label}
              </p>
            </div>
          </motion.button>)}
        </AnimatePresence>
      </motion.div>
    </div>

    {/* Lightbox */}
    <AnimatePresence>
      {selectedIndex !== null && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
        <button onClick={() => setSelectedIndex(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors z-10" aria-label="Close">
          <X className="w-6 h-6" />
        </button>
        <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors z-10" aria-label="Previous">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors z-10" aria-label="Next">
          <ChevronRight className="w-6 h-6" />
        </button>
        <motion.img key={selectedIndex} initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} src={filtered[selectedIndex].src} alt="Gallery preview" className="max-w-full max-h-[90vh] rounded-2xl object-contain" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold">
          {selectedIndex + 1} / {filtered.length}
        </div>
      </motion.div>}
    </AnimatePresence>
  </section>;
}