'use client';

import { Download, Loader2 } from 'lucide-react';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function DownloadPDFButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      const element = document.getElementById('lms-content');
      
      if (!element) {
        console.error('Content element not found');
        return;
      }

      // Wait for fonts/images to be fully ready if needed, 
      // but html2canvas usually handles it well enough.
      
      const canvas = await html2canvas(element, {
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
        backgroundColor: '#020617', // Match the background color
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // Create PDF with custom dimensions matching the content
      // This creates a "single long page" PDF
      const pdf = new jsPDF({
        orientation: imgWidth > imgHeight ? 'landscape' : 'portrait',
        unit: 'px',
        format: [imgWidth, imgHeight]
      });

      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('sm-lms-overview.pdf');
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 transition-all text-teal-300 hover:text-teal-200 text-xs sm:text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      title="Save as PDF"
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      <span>{isLoading ? 'Generating...' : 'Save as PDF'}</span>
    </button>
  );
}
