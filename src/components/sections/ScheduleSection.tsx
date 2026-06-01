import { Calendar, Clock, MapPin, Bell, UserCheck, Search } from 'lucide-react';

export const ScheduleSection = () => {
  const schedules = [
    {
      step: '1',
      title: 'Pendaftaran & Penyerahan Berkas Fisik',
      date: '20 Juni - 09 Juli 2026',
      time: '08.00 - 14.00 WITA',
      desc: 'Orang tua siswa mengisi formulir dan membawa berkas persyaratan dasar langsung ke Sekretariat Panitia di SMPN 2 Waigete.',
      status: 'Mendatang',
      statusColor: 'bg-blue-50 text-blue-850 border-blue-100',
      note: 'Layanan verifikasi fisik di sekolah sedang dibuka melayani antrean hari ini.',
    },
    {
      step: '2',
      title: 'Verifikasi & Validasi Dokumen Calon Siswa',
      date: '20 Juni - 10 Juli 2026',
      time: '08.00 - 14.00 WITA',
      desc: 'Panitia mengecek validitas NISN, Kartu Keluarga, pencocokan nilai rata-rata rapor, serta kelengkapan kartu afirmasi bagi pemegang KIP/PKH pendaftar.',
      status: 'Saat pendaftaran oleh panitia',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      step: '3',
      title: 'Rapat Pleno Panitia & Tim Guru Penentu',
      date: '09 Juli 2026',
      time: 'Setelah penutupan pendaftaran',
      desc: 'Rapat internal dewan guru yang dipimpin langsung oleh Bapak Pankrasius Rasmani selaku Kepala Sekolah untuk memutuskan kelulusan final calon siswa baru.',
      status: 'Mendatang',
      statusColor: 'bg-slate-100 text-slate-800 border-slate-200',
    },
    {
      step: '4',
      title: 'Pengumuman Resmi Hasil SPMB',
      date: '10 Juli 2026',
      time: '08.00 - 14.00 WITA',
      desc: 'Hasil seleksi diumumkan secara terbuka di papan pengumuman sekolah, serta dapat dicek langsung secara instan lewat menu mandiri website portal ini.',
      status: 'Mendatang',
      statusColor: 'bg-slate-100 text-slate-800 border-slate-200',
    },
    {
      step: '5',
      title: 'Pendaftaran Ulang Siswa Baru yang Lolos',
      date: '11 Juli 2026',
      time: '07.00 WITA - Selesai',
      desc: 'Calon siswa yang dinyatakan diterima wajib melapor diri, melengkapi surat pernyataan komitmen bermaterai, serta mengukur seragam dan mendapat pembagian kelas belajar.',
      status: 'Mendatang',
      statusColor: 'bg-slate-100 text-slate-800 border-slate-200',
    },
    {
      step: '6',
      title: 'Awal Mulai Tahun Ajaran Baru 2026/2027',
      date: '13 Juli 2026',
      time: '07.00 WITA - Selesai',
      desc: 'Hari pertama sekolah, dimulai dengan kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS) guna membentuk karakter bela negara dan penanaman budi pekerti.',
      status: 'Mendatang',
      statusColor: 'bg-slate-100 text-slate-800 border-slate-200',
    },
  ];

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Jadwal Pelaksanaan</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Simpan tanggal-tanggal krusial di bawah ini agar proses pendaftaran putra-putri Anda berjalan lancar tanpa kendala keterlambatan.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-slate-200 ml-4 pl-8 space-y-12 py-2">
        {schedules.map((sched, idx) => (
          <div key={idx} className="relative group">
            {/* Round Bullet Icon */}
            <div className="absolute -left-[45px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white font-bold text-xs shadow-md transition-colors bg-slate-200 text-slate-650">
              {sched.step}
            </div>

            {/* Content Body Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 transition duration-300 hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <span className={`text-xs px-3 py-1 rounded-full font-bold border max-w-fit ${sched.statusColor}`}>
                  {sched.status}
                </span>

                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-slate-400" /> {sched.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-slate-400" /> {sched.time}
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-850 group-hover:text-blue-650 transition-colors">
                {sched.title}
              </h3>
              <p className="text-slate-600 font-light text-sm mt-3 leading-relaxed">
                {sched.desc}
              </p>

              {sched.note && (
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-600 font-medium">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  {sched.note}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Catatan Penting Kontak */}
      <div className="bg-yellow-50/50 border border-yellow-150 p-6 rounded-2xl space-y-2">
        <h4 className="font-bold text-amber-810 text-base">Informasi Lokasi Sekretariat Fisik:</h4>
        <p className="text-xs text-amber-700 leading-relaxed font-light">
          Bila ingin berkonsultasi langsung, silakan kunjungi kantor panitia di <strong className="font-semibold">Gedung Utama Ruang Guru SMPN 2 Waigete</strong>, Jl. Trans Maumere-Larantuka, Waigete. Pelayanan dibuka pukul 08.00 s.d. 14.00 WITA. Harap memakai masker dan pakaian bebas rapi yang sopan.
        </p>
      </div>
    </div>
  );
};
