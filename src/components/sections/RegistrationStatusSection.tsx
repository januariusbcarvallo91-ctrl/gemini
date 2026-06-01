import { useState, useMemo, FormEvent } from 'react';
import { Search, AlertCircle, CheckCircle, Info, RefreshCw, XCircle, ArrowRight, UserCheck, Phone } from 'lucide-react';
import { RegistrationData } from '../../types';

interface RegistrationStatusProps {
  registrations: RegistrationData[];
}

export const RegistrationStatusSection = ({ registrations }: RegistrationStatusProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<RegistrationData | null>(null);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setSearched(false);

    // Simulate search delay
    setTimeout(() => {
      // Find matches in either ID or NISN
      const match = registrations.find(
        (r) =>
          r.id.toLowerCase() === searchQuery.trim().toLowerCase() ||
          r.nisn === searchQuery.trim()
      );

      setSearchResult(match || null);
      setLoading(false);
      setSearched(true);
    }, 1000);
  };

  const getStatusStyle = (status: RegistrationData['status']) => {
    switch (status) {
      case 'Diterima':
        return {
          bg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
          badge: 'bg-emerald-500 text-white',
          desc: 'Selamat! Berkas Anda dinyatakan LENGKAP & DINYATAKAN LULUS SELEKSI.',
        };
      case 'Terverifikasi':
        return {
          bg: 'bg-blue-50 border-blue-200 text-blue-800',
          badge: 'bg-blue-500 text-white',
          desc: 'Berkas pendaftaran digital Anda telah diperiksa dan disetujui oleh Panitia Operator.',
        };
      case 'Menunggu Hasil Seleksi':
        return {
          bg: 'bg-yellow-50 border-yellow-250 text-yellow-805',
          badge: 'bg-yellow-500 text-slate-900',
          desc: 'Berkas dalam pemrosesan kriteria zonasi dan ketersediaan bangku rombel dewan guru.',
        };
      case 'Tidak Diterima':
        return {
          bg: 'bg-rose-50 border-rose-200 text-rose-800',
          badge: 'bg-rose-550 text-white',
          desc: 'Mohon maaf, Anda dinyatakan belum lolos kuota seleksi rombel penerimaan tahun ini.',
        };
      default: // Pending
        return {
          bg: 'bg-slate-50 border-slate-205 text-slate-700',
          badge: 'bg-slate-400 text-white',
          desc: 'Pendaftaran sukses dikirim. Menunggu verifikasi berkas persyaratan fisik asli.',
        };
    }
  };

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Cek Status Hasil Seleksi</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Gunakan NISN (10 Digit) atau kode pendaftaran resmi anak (misal: REG-2026-001) untuk melihat status verifikasi.
        </p>
      </div>

      {/* Info Card: Kontak WA Panitia */}
      <div className="bg-gradient-to-br from-emerald-50/70 to-teal-50/70 border border-emerald-100/80 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto space-y-4">
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-emerald-500 text-white rounded-2xl shrink-0 shadow-md">
            <Phone size={22} />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-slate-800">Hubungi WhatsApp Panitia Untuk Informasi Kelulusan</h3>
            <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
              Silakan menghubungi nomor WA panitia di bawah ini untuk mendapatkan informasi rincian kelulusan siswa secara akurat dan responsif:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          {[
            { name: 'Pak Yano', phone: '081237806460', raw: '6281237806460' },
            { name: 'Ibu Umy', phone: '081237143514', raw: '6281237143514' },
            { name: 'Pak Ignas', phone: '081389802651', raw: '6281389802651' },
          ].map((contact, ci) => (
            <a
              key={ci}
              href={`https://wa.me/${contact.raw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-emerald-600 border border-slate-100 hover:border-emerald-600 hover:text-white rounded-2xl p-4 text-center transition-all duration-300 flex flex-col items-center gap-1 group shadow-sm hover:shadow-md cursor-pointer"
            >
              <span className="text-[9px] text-emerald-600 group-hover:text-emerald-150 font-black uppercase tracking-wider font-mono">HUBUNGI WA</span>
              <span className="text-xs font-bold text-slate-850 group-hover:text-white">{contact.name}</span>
              <span className="text-xs font-mono text-slate-500 group-hover:text-emerald-100 font-semibold">{contact.phone}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Search Input Box */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100 shadow-sm max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-slate-800">Cari Pendaftaran Calon Siswa</h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
            Sistem terintegrasi secara langsung dengan pangkalan data verifikasi panitia SPMB harian.
          </p>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 block">KODE PENDAFTARAN ATAU NISN SISWA *</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                required
                placeholder="REG-2026-001 atau 0123456789"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-4 py-3 border border-slate-205 rounded-xl bg-slate-50 text-slate-800 font-mono font-bold uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold p-3.5 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2 text-xs uppercase"
          >
            {loading ? (
              <>
                <RefreshCw size={14} className="animate-spin" /> Sedang Mencari Data...
              </>
            ) : (
              'Cari Data Pendaftaran'
            )}
          </button>
        </form>

        {/* Search Helper Info */}
        <div className="pt-2 text-center text-[10px] text-slate-400 leading-relaxed font-light">
          Wali murid juga bisa mencoba mencari demo data awal menggunakan NISN bawaan: <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-blue-600 font-bold">0123456789</span> atau <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-blue-600 font-bold">0112233445</span>.
        </div>
      </div>

      {/* Render results */}
      {searched && (
        <div className="max-w-xl mx-auto animate-scale-up">
          {searchResult ? (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden">
              <div className="p-6 sm:p-8 space-y-6">
                {/* Visual Header */}
                <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 block font-mono">ID REGISTRASI: {searchResult.id}</span>
                    <h3 className="text-xl font-extrabold text-slate-850 uppercase leading-snug">{searchResult.fullName}</h3>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-bold leading-none ${getStatusStyle(searchResult.status).badge}`}>
                    {searchResult.status}
                  </span>
                </div>

                {/* Status Notice card */}
                <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${getStatusStyle(searchResult.status).bg} space-y-2`}>
                  <div className="font-bold flex items-center gap-1.5 uppercase tracking-wide">
                    <UserCheck size={16} /> Status Kelipatan Pelajar:
                  </div>
                  <p className="font-light">{getStatusStyle(searchResult.status).desc}</p>
                </div>

                {/* Student Details table */}
                <div className="space-y-3.5 text-xs text-slate-650 border-t border-slate-100 pt-4">
                  <div className="flex justify-between">
                    <span>NISN SISWA:</span>
                    <span className="font-mono font-bold text-slate-800">{searchResult.nisn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SEKOLAH ASAL:</span>
                    <span className="font-bold text-slate-800 uppercase">{searchResult.previousSchool}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>NAMA WALI:</span>
                    <span className="font-medium text-slate-800 uppercase">{searchResult.parentName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>NOMOR HP WALI:</span>
                    <span className="font-mono">{searchResult.parentPhone}</span>
                  </div>
                </div>

                {/* Specific details / Notes from operator */}
                {searchResult.notes && (
                  <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block font-sans tracking-wide">Catatan Panitia SPMB:</span>
                    <p className="text-xs text-slate-600 font-light leading-relaxed whitespace-pre-line">
                      {searchResult.notes}
                    </p>
                  </div>
                )}
              </div>

              {/* Decorative foot */}
              <div className="bg-blue-900 text-white px-6 py-3 text-center text-[10px] uppercase font-mono tracking-widest font-bold">
                PANITIA SPMB SMP NEGERI 2 WAIGETE 2026/2027
              </div>
            </div>
          ) : (
            /* Not Found State */
            <div className="bg-red-50 border border-red-200 p-6 sm:p-8 rounded-2xl text-red-800 text-center space-y-4">
              <div className="inline-flex p-3.5 bg-red-100 text-red-600 rounded-full">
                <AlertCircle size={28} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Pendaftaran Tidak Ditemukan</h3>
                <p className="text-xs text-red-700 leading-relaxed font-light max-w-sm mx-auto">
                  Maaf, data NISN atau Nomor ID pendaftaran <strong className="font-mono">{searchQuery}</strong> belum terdaftar dalam pangkalan PPDB kami. Mohon periksa kembali ejaan input Anda.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
