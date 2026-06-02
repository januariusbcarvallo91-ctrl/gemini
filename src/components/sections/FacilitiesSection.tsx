import { Laptop, BookOpen, Beaker, Activity, Utensils, HelpCircle, Music, Palette } from 'lucide-react';
import { FACILITIES } from '../../mockData';

export const FacilitiesSection = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Laptop':
        return <Laptop size={22} />;
      case 'BookOpen':
        return <BookOpen size={22} />;
      case 'Beaker':
        return <Beaker size={22} />;
      case 'Activity':
        return <Activity size={22} />;
      case 'Utensils':
        return <Utensils size={22} />;
      case 'Music':
        return <Music size={22} />;
      case 'Palette':
        return <Palette size={22} />;
      default:
        return <HelpCircle size={22} />;
    }
  };

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Fasilitas Penunjang</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Dukungan sarana prasarana modern di SMP Negeri 2 Waigete untuk menunjang kegiatan KBM dan talenta bakat siswa.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FACILITIES.map((facility) => (
          <div key={facility.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition group">
            <div>
              {/* Info */}
              <div className="p-6 space-y-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {getIcon(facility.iconName)}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800 text-lg leading-tight transition-colors group-hover:text-blue-600">
                    {facility.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Class info */}
            <div className="bg-slate-50 border-t border-slate-100 px-6 py-3.5 text-[10px] text-slate-400 font-medium tracking-widest uppercase">
              KONDISI: PRIMA & TERAWAT
            </div>
          </div>
        ))}
      </div>

      {/* Ruang Tambahan Banner */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-150 text-center space-y-3">
        <h4 className="font-bold text-slate-800">Fasilitas Lingkungan Lainya:</h4>
        <p className="text-xs text-slate-505 max-w-2xl mx-auto leading-relaxed font-light">
          Selain fasilitas utama di atas, kami juga menyediakan 12 Ruang Kelas Multimedia modern, Masjid Al-Ikhlas sekolah, Aula Pertemuan Rapat Serbaguna yang representatif, Pos Kesehatan Sekolah (UKS) terpadu, serta taman botani pengolahan pupuk organik mandiri sekolah.
        </p>
      </div>
    </div>
  );
};
