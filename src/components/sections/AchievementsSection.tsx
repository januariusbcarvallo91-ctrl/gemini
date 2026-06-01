import { useState, useMemo } from 'react';
import { Trophy, Award, Search, Star, Medal, Users } from 'lucide-react';
import { ACHIEVEMENTS } from '../../mockData';

export const AchievementsSection = () => {
  const [activeCategory, setActiveCategory] = useState<'Semua' | 'Akademik' | 'Non-Akademik'>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAchievements = useMemo(() => {
    return ACHIEVEMENTS.filter((item) => {
      const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.year.includes(searchQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Prestasi Sekolah</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Daftar apresiasi, medali emas, dan piala kedaerahan yang berhasil diboyong oleh siswa-siswi berprestasi kami.
        </p>
      </div>

      {/* Hero Stats */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-3xl p-8 text-white shadow-md grid md:grid-cols-3 gap-6 items-center">
        <div className="space-y-2 md:col-span-2">
          <div className="flex items-center gap-2">
            <Trophy size={22} className="text-yellow-250" />
            <span className="text-xs uppercase font-bold tracking-widest text-amber-100">kebanggaan waigete</span>
          </div>
          <h3 className="text-2xl font-extrabold leading-snug">Menanamkan Semangat Kompetisi & Kolaborasi Sejak Dini</h3>
          <p className="text-xs sm:text-sm text-yellow-50 font-light leading-relaxed">
            Dari olimpiade sains berskala kabupaten hingga tarian kolosal adat bergengsi tingkat provinsi, siswa-siswi SMPN 2 Waigete terlatih berjuang sepenuh hati di bawah bimbingan guru teladan.
          </p>
        </div>
        <div className="p-6 bg-white/15 rounded-2xl border border-white/10 text-center space-y-1 backdrop-blur-sm">
          <div className="text-4xl font-extrabold text-yellow-200">100%</div>
          <div className="text-xs font-semibold text-white uppercase tracking-wider">Dukungan Pendanaan Lomba</div>
          <p className="text-[10px] text-amber-100 font-light mt-1">Sekolah membiayai seluruh uang pendaftaran & transportasi delegasi</p>
        </div>
      </div>

      {/* Toolbar Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
        <div className="relative w-full sm:max-w-xs">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            placeholder="Cari prestasi, tahun, penerima..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2.5 bg-white border border-slate-205 rounded-xl text-slate-755 font-light focus:outline-none focus:ring-2 focus:ring-blue-550"
          />
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          {['Semua', 'Akademik', 'Non-Akademik'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-4 py-2 text-xs rounded-xl font-bold transition ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-650 hover:text-slate-800 bg-white border border-slate-150'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      {filteredAchievements.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredAchievements.map((item) => (
            <div key={item.id} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border ${
                    item.category === 'Akademik'
                      ? 'bg-blue-50 text-blue-700 border-blue-100'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Tahun {item.year}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 leading-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs text-blue-600 font-medium flex items-center gap-1">
                    <Medal size={14} className="shrink-0" />
                    <span>Dianugerahi Kepada: <strong>{item.recipient}</strong></span>
                  </div>
                  <p className="text-slate-605 text-xs sm:text-sm leading-relaxed font-light mt-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-yellow-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-md">
                  <Trophy size={12} /> Tingkat {item.level}
                </span>
                <span className="font-mono text-[10px] text-slate-400">SMPN 2 WAIGETE</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-2xl border border-dotted border-slate-200">
          <p className="text-slate-550 text-sm font-light">Tidak ada data prestasi yang cocok dengan kata kunci pencarian Anda.</p>
        </div>
      )}
    </div>
  );
};
