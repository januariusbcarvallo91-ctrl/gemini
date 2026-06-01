import { useState, useMemo } from 'react';
import { Search, Users, GraduationCap, Award, BookOpen, UserCheck, User } from 'lucide-react';
import { TEACHERS } from '../../mockData';

export const TeachersSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | 'kepdes' | 'guru' | 'staf'>('all');

  const filteredTeachers = useMemo(() => {
    return TEACHERS.filter((t) => {
      // 1. Search Query
      const matchesSearch =
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.education.toLowerCase().includes(searchQuery.toLowerCase());

      // 2. Role filter
      let matchesRole = true;
      if (roleFilter === 'kepdes') {
        matchesRole = t.category === 'kepemimpinan';
      } else if (roleFilter === 'guru') {
        matchesRole = t.category === 'guru';
      } else if (roleFilter === 'staf') {
        matchesRole = t.category === 'staf';
      }

      return matchesSearch && matchesRole;
    });
  }, [searchQuery, roleFilter]);

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Ketenagaan (Guru & Staf)</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Daftar Dewan Guru dan Tenaga Kependidikan SMP Negeri 2 Waigete yang tersertifikasi nasional.
        </p>
      </div>

      {/* Roster Welcome Stats */}
      <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2">
          <h4 className="font-bold text-lg">Pendidik Berkompetensi & Ramah</h4>
          <p className="text-blue-100 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
            Sinergi guru muda kreatif berorientasi teknologi (Informatika & Multimedia) didorong dedikasi dewan guru senior berjiwa asuh menghadirkan asupan akademis berakar budaya bagi setiap murid.
          </p>
        </div>
        <div className="flex items-center gap-4 text-center">
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm min-w-[80px]">
            <div className="text-2xl font-bold">8</div>
            <div className="text-[10px] text-blue-200 uppercase font-semibold">Guru PNS</div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm min-w-[80px]">
            <div className="text-2xl font-bold">6</div>
            <div className="text-[10px] text-blue-200 uppercase font-semibold">Guru P3K</div>
          </div>
        </div>
      </div>

      {/* Filter and Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            placeholder="Cari guru atau gelar mapel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2.5 bg-white border border-slate-205 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-750 font-light"
          />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {[
            { id: 'all', label: 'Semua Ketenagaan' },
            { id: 'kepdes', label: 'Kepemimpinan' },
            { id: 'guru', label: 'Dewan Guru' },
            { id: 'staf', label: 'Tenaga Staf' },
          ].map((r) => (
            <button
              key={r.id}
              onClick={() => setRoleFilter(r.id as any)}
              className={`px-4 py-2 text-xs rounded-xl font-semibold transition ${
                roleFilter === r.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-800 bg-white hover:bg-slate-100 border border-slate-150'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Teachers Cards Grid */}
      {filteredTeachers.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition">
              <div className="p-6 text-center space-y-4">
                {/* Profile Photo */}
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-slate-50 shadow-md">
                  {teacher.photoUrl ? (
                    <img
                      src={teacher.photoUrl}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <User size={48} className="stroke-[1.5]" />
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-850 text-base leading-tight">
                    {teacher.name}
                  </h3>
                  <p className="text-xs text-blue-600 font-semibold tracking-wide uppercase">
                    {teacher.role}
                  </p>
                </div>

                {/* Meta details */}
                <div className="pt-4 border-t border-slate-50 text-left space-y-2.5">
                  {teacher.nip && (
                    <div className="text-xs text-slate-500 flex items-start gap-1.5">
                      <UserCheck size={14} className="text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-slate-700">NIP:</span>
                        <span className="font-mono">{teacher.nip}</span>
                      </div>
                    </div>
                  )}

                  <div className="text-xs text-slate-500 flex items-start gap-1.5">
                    <GraduationCap size={14} className="text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-slate-700">Kualifikasi Akademis:</span>
                      <span className="font-light">{teacher.education}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag/Status Foot */}
              <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 text-[10px] text-center font-mono font-medium text-slate-400 tracking-wider">
                SMP NEGERI 2 WAIGETE
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-2xl border border-dotted border-slate-200">
          <p className="text-slate-500 text-sm font-light">Tidak ada nama pendidik atau staf yang cocok dengan kueri Anda.</p>
        </div>
      )}
    </div>
  );
};
