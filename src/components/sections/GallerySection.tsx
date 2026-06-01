import { useState, useMemo } from 'react';
import { Image, Search, Eye, X, HelpCircle, Calendar, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../../mockData';
import { GalleryItem } from '../../types';

export const GallerySection = () => {
  const [selectedTag, setSelectedTag] = useState<'Semua' | 'KBM' | 'Fasilitas' | 'Ekstrakurikuler' | 'Acara'>('Semua');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedTag === 'Semua') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedTag);
  }, [selectedTag]);

  return (
    <div className="space-y-12 py-4 animate-fade-in relative z-20">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Galeri Kegiatan</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Kilas balik dokumentasi foto aktivitas belajar mengajar, sarana prasarana, dan momen gembira siswa SMPN 2 Waigete.
        </p>
      </div>

      {/* Category Pills Header */}
      <div className="flex flex-wrap gap-2 justify-center py-2 border-b border-slate-50">
        {['Semua', 'KBM', 'Fasilitas', 'Ekstrakurikuler', 'Acara'].map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag as any)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              selectedTag === tag
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10 scale-102'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition duration-300 relative"
          >
            {/* Visual Frame */}
            <div className="relative h-56 overflow-hidden bg-slate-900">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transform duration-500 group-hover:scale-105 group-hover:opacity-85"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/20">
                  <Eye size={20} />
                </div>
              </div>

              {/* Category tag */}
              <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                {item.category}
              </span>
            </div>

            {/* Caption */}
            <div className="p-5 space-y-2">
              <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-tight group-hover:text-blue-650 transition-colors line-clamp-1">
                {item.title}
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Lightbox Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition"
            >
              <X size={20} />
            </button>

            {/* Left Column Image */}
            <div className="md:w-3/5 bg-slate-900 flex items-center justify-center max-h-[50vh] md:max-h-none overflow-hidden">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Column Meta Details */}
            <div className="md:w-2/5 p-8 flex flex-col justify-between bg-white max-h-[40vh] md:max-h-none overflow-y-auto">
              <div className="space-y-4">
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase px-3.5 py-1 rounded-full border border-blue-100">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-850 leading-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-650 text-sm font-light leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar size={14} className="text-slate-400" />
                  <span>Periode Dokumen: Tahun Ajaran Terkini</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin size={14} className="text-slate-400" />
                  <span>Kecamatan Waigete, Sikka, NTT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
