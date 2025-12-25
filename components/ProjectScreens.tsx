'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useState } from 'react';

type ScreenImage = {
  src: string;
  title: string;
  description: string;
};

type ProjectScreensProps = {
  title: string;
  images: ScreenImage[];
};

export default function ProjectScreens({ title, images }: ProjectScreensProps) {
  const [activeImage, setActiveImage] = useState<ScreenImage | null>(null);

  return (
    <div className="mb-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">{title}</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <button
            key={image.src}
            onClick={() => setActiveImage(image)}
            className="text-left bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-cyan-400/40 transition-all backdrop-blur-md"
          >
            <div className="relative aspect-video">
              <Image src={image.src} alt={image.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-sm">
                Click to view fullscreen
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white mb-1">{image.title}</h3>
              <p className="text-sm text-slate-300">{image.description}</p>
            </div>
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/80" onClick={() => setActiveImage(null)}></div>
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
            <div className="bg-slate-900 rounded-2xl max-w-5xl w-full p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeImage.title}</h3>
                  <p className="text-slate-300 text-sm">{activeImage.description}</p>
                </div>
                <button
                  onClick={() => setActiveImage(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative w-full h-[70vh] rounded-xl overflow-hidden bg-black">
                <Image src={activeImage.src} alt={activeImage.title} fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
