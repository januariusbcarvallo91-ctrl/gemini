import { useState, useMemo } from 'react';
import { Image, Search, Eye, X, HelpCircle, Calendar, MapPin, BookOpen, Compass, Sparkles, Building2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../../mockData';
import { GalleryItem } from '../../types';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'KBM':
      return <BookOpen size={28} className="text-blue-600" />;
    case 'Fasilitas':
      return <Building2 size={28} className="text-purple-600" />;
    case 'Ekstrakurikuler':
      return <Compass size={28} className="text-emerald-600" />;
    case 'Acara':
      return <Sparkles size={28} className="text-amber-600" />;
    default:
      return <Image size={28} className="text-slate-600" />;
  }
};

const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'KBM':
      return {
        bg: 'from-blue-50/80 to-indigo-50/30',
        badge: 'bg-blue-100/80 text-blue-800 border-blue-200/60',
        iconBg: 'bg-blue-100/80 text-blue-600',
        hover: 'group-hover:from-blue-100/80 group-hover:to-indigo-100/40 text-blue-700'
      };
    case 'Fasilitas':
      return {
        bg: 'from-purple-50/80 to-pink-50/30',
        badge: 'bg-purple-100/80 text-purple-800 border-purple-200/60',
        iconBg: 'bg-purple-100/80 text-purple-600',
        hover: 'group-hover:from-purple-100/80 group-hover:to-pink-100/40 text-purple-700'
      };
    case 'Ekstrakurikuler':
      return {
        bg: 'from-emerald-50/80 to-teal-50/30',
        badge: 'bg-emerald-100/80 text-emerald-800 border-emerald-200/60',
        iconBg: 'bg-emerald-100/80 text-emerald-600',
        hover: 'group-hover:from-emerald-100/80 group-hover:to-teal-100/40 text-emerald-700'
      };
    case 'Acara':
      return {
        bg: 'from-amber-50/80 to-orange-50/30',
        badge: 'bg-amber-100/80 text-amber-800 border-amber-200/60',
        iconBg: 'bg-amber-100/80 text-amber-600',
        hover: 'group-hover:from-amber-100/80 group-hover:to-orange-100/40 text-amber-700'
      };
    default:
      return {
        bg: 'from-slate-50/80 to-slate-100/30',
        badge: 'bg-slate-100 text-slate-800 border-slate-200/60',
        iconBg: 'bg-slate-200/80 text-slate-600',
        hover: 'group-hover:from-slate-100/80 group-hover:to-slate-200/40 text-slate-705'
      };
  }
};

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
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Agenda Kegiatan</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Agenda dan dokumentasi ragam aktivitas belajar mengajar (KBM), sarana prasarana, ekstrakurikuler, dan momen gembira siswa SMPN 2 Waigete.
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

      {/* Gallery Cards Grid (No Photos) */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => {
          const styles = getCategoryStyles(item.category);
          return (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                {/* Elegant Category Icon Block */}
                <div className={`p-4 rounded-2xl w-14 h-14 flex items-center justify-center bg-gradient-to-br ${styles.bg} border border-slate-100/50 transition-all duration-300 ${styles.hover}`}>
                  {getCategoryIcon(item.category)}
                </div>

                <div className="space-y-2">
                  <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${styles.badge}`}>
                    {item.category}
                  </span>
                  <h4 className="font-extrabold text-slate-800 text-base leading-tight group-hover:text-blue-650 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="px-6 py-3 bg-slate-50/65 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-750 transition-colors">
                <span>Lihat Detail Kegiatan</span>
                <Eye size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Item Modal (No Photos) */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-10 flex flex-col gap-6 animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${getCategoryStyles(selectedImage.category).bg} border border-slate-100`}>
                {getCategoryIcon(selectedImage.category)}
              </div>
              <div>
                <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${getCategoryStyles(selectedImage.category).badge}`}>
                  {selectedImage.category}
                </span>
                <span className="block text-xs font-mono text-slate-400 mt-0.5">ID: {selectedImage.id.toUpperCase()}</span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 leading-tight">
                {selectedImage.title}
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                {selectedImage.description}
              </p>
            </div>

            {/* Metadata Footer */}
            <div className="border-t border-slate-100 pt-6 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-center gap-3 text-xs text-slate-500 bg-slate-50/70 p-3 rounded-xl border border-slate-100/50">
                <Calendar size={15} className="text-blue-500 shrink-0" />
                <span>Dokumen: Tahun Ajaran Terkini</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500 bg-slate-50/70 p-3 rounded-xl border border-slate-100/50">
                <MapPin size={15} className="text-emerald-500 shrink-0" />
                <span>Kecamatan Waigete, NTT</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
