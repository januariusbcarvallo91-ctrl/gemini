import { CheckSquare, AlertCircle, FileText, Info, GraduationCap, Map, Users } from 'lucide-react';

export const RequirementsSection = () => {
  const generalRequirements = [
    'Usia maksimal 15 tahun per 1 Juli 2026',
    'FC Akta Kelahiran (1 lembar)',
    'FC Kartu Keluarga (1 lembar)',
    'FC Ijazah SD atau SuKet Lulus (1 lembar)',
    'FC KIP',
    'FC Sertifikat Prestasi',
  ];

  const pathRequirements = [
    {
      title: 'Jalur Domisili',
      icon: Map,
      bg: 'bg-blue-55 border-blue-100',
      text: 'text-blue-800',
      items: [
        'Kartu Keluarga (KK) asli yang menunjukkan alamat domisili di dalam wilayah zonasi Kecamatan Waigete.',
        'Mengutamakan domisili dari Desa Wairterang, Desa Nangatobong, Desa Egon, Desa Runut, dan Desa Lokonggete.',
      ],
    },
    {
      title: 'Jalur Prestasi',
      icon: GraduationCap,
      bg: 'bg-amber-55 border-amber-100',
      text: 'text-amber-800',
      items: [
        'Rata-rata nilai rapor 5 semester terakhir dengan prestasi yang kompetitif.',
        'Sertifikat atau piagam kejuaraan olahraga/seni/akademik paling singkat diterbitkan 6 bulan dan paling lama 3 tahun dari tanggal pendaftaran.',
      ],
    },
    {
      title: 'Jalur Afirmasi',
      icon: Users,
      bg: 'bg-emerald-55 border-emerald-100',
      text: 'text-emerald-800',
      items: [
        'Kartu Indonesia Pintar (KIP) asli atau Kartu Program Keluarga Harapan (PKH) asli.',
        'Keluarga terdaftar dalam DTKS Dinas Sosial Sikka atau penyandang disabilitas ringan.',
      ],
    },
  ];

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Syarat Pendaftaran</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Berikut adalah dokumen-dokumen penting yang harus disiapkan oleh calon siswa baru beserta wali murid.
        </p>
      </div>

      {/* Syarat Umum */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
        <div className="flex items-center gap-2">
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
            <CheckSquare size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">1. Persyaratan Umum (Wajib Semua Jalur)</h2>
        </div>
        <p className="text-slate-500 text-sm font-light leading-relaxed">
          Semua calon siswa baru wajib melengkapi berkas pokok di bawah ini saat melakukan pendaftaran di loket sekolah:
        </p>
        <ul className="grid md:grid-cols-2 gap-4">
          {generalRequirements.map((req, idx) => (
            <li key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
              <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-5 h-5 text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-slate-700 text-sm leading-relaxed font-light">{req}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Syarat Khusus Sesuai Jalur */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="p-2.5 bg-yellow-50 text-yellow-600 rounded-xl">
            <FileText size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">2. Persyaratan Tambahan Khusus</h2>
        </div>
        <p className="text-slate-500 text-sm font-light leading-relaxed max-w-3xl">
          Selain berkas umum wajib di atas, kumpulkan berkas tambahan pendukung di bawah ini sesuai jalur pilihan Anda untuk mempermudah panitia meloloskan verifikasi berkas:
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {pathRequirements.map((path, index) => (
            <div key={index} className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4`}>
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-slate-50 text-blue-600`}>
                  <path.icon size={20} />
                </div>
                <h4 className="font-bold text-slate-800 text-base">{path.title}</h4>
              </div>
              <ul className="space-y-3 pt-2">
                {path.items.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                    <p className="leading-relaxed font-light">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Peringatan Legalisir */}
      <div className="bg-red-50/50 border border-red-150 p-6 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
        <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0">
          <AlertCircle size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-red-900 text-base">Legalisir Dokumen Fisik</h4>
          <p className="text-xs text-red-700 leading-relaxed font-light">
            Silakan siapkan fotocopy KK, Akta Lahir, dan SKL / Ijazah sebanyak masing-masing <strong>1 (satu) rangkap</strong> sesuai dengan syarat pendaftaran di atas untuk disimpan sebagai arsip fisik pendaftaran ulang.
          </p>
        </div>
      </div>
    </div>
  );
};
