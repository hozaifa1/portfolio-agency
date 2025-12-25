'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useState } from 'react';

type ProjectHeroImageProps = {
  src: string;
  alt: string;
};

export default function ProjectHeroImage({ src, alt }: ProjectHeroImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-2xl"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-slate-200 group cursor-zoom-in">
          <div className="relative aspect-video">
            <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="font-semibold">Click to view fullscreen</span>
            </div>
          </div>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/80" onClick={() => setOpen(false)}></div>
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
            <div className="bg-slate-900 rounded-2xl max-w-6xl w-full p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">{alt}</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative w-full h-[75vh] rounded-xl overflow-hidden bg-black">
                <Image src={src} alt={alt} fill className="object-contain" sizes="100vw" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
