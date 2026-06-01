import { Info, HelpCircle, CheckCircle, AlertTriangle, Percent, DollarSign, Award, MapPin, Users } from 'lucide-react';

export const SpmbInfoSection = () => {
  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Informasi Penerimaan Siswa Baru</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Panduan umum, kuota resmi, dan ketentuan seleksi SPMB SMP Negeri 2 Waigete Tahun Ajaran 2026/2027.
        </p>
      </div>

      {/* Rincian Biaya (Gratis) - Critical Trust Factor */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-lg space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/10 rounded-2xl">
            <DollarSign size={28} />
          </div>
          <div>
            <span className="text-emerald-100 text-xs uppercase tracking-wide font-bold">Biaya Pendidikan</span>
            <h3 className="text-2xl font-extrabold text-white">Biaya Pendaftaran 100% GRATIS!</h3>
          </div>
        </div>
        <p className="text-emerald-50 text-sm font-light leading-relaxed max-w-4xl">
          Sesuai dengan komitmen pemerintah Kabupaten Sikka dan Kementerian Pendidikan, seluruh rangkaian seleksi pendaftaran, pemrosesan berkas, di SMP Negeri 2 Waigete disubsidi penuh oleh dana <strong className="font-bold">Bantuan Operasional Sekolah (BOS)</strong>. Kami melarang keras segala bentuk pungutan liar maupun gratifikasi di lingkungan panitia penerimaan siswa baru.
        </p>
      </div>

      {/* Jalur Pendaftaran & Kuota */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Percent className="text-blue-600" size={24} /> Jalur Pendaftaran Resmi (SPMB)
        </h2>
        <p className="text-slate-500 text-sm font-light max-w-2xl">
          Kuata daya tampung siswa baru untuk tahun ajaran ini adalah <strong>120 siswa</strong> yang akan dibagi ke dalam 4 rombongan belajar (rombel/kelas).
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Jalur Domisili (Quota 40%)',
              desc: 'Jumlah Kuota: 60 Siswa. Ditujukan khusus bagi siswa lulusan SD yang berdomisili dekat dengan wilayah sekolah di Kecamatan Waigete, diukur dalam radius terdekat menggunakan sistem koordinat KK.',
              items: [
                'Desa Wairterang',
                'Desa Nangatobong',
                'Desa Egon',
                'Desa Runut',
                'Desa Lokonggete',
                'Aturan zonasi resmi berdasarkan juknis SPMB 2025'
              ],
              style: 'border-l-4 border-blue-500',
              iconBg: 'bg-blue-50 text-blue-600',
            },
            {
              title: 'Jalur Prestasi (Quota 30%)',
              desc: 'Jumlah Kuota: 36 Siswa. Ditujukan bagi pendaftar dari luar wilayah zonasi yang memiliki prestasi akademik (nilai rapor tinggi) maupun non-akademik (olahraga, seni, keagamaan).',
              items: [
                'Rata-rata nilai rapor 5 semester terakhir',
                'Sertifikat lomba FLS2N/O2SN tingkat kabupaten/provinsi',
                'Piagam penghargaan kepemimpinan OSIS atau Pramuka'
              ],
              style: 'border-l-4 border-yellow-500',
              iconBg: 'bg-yellow-50 text-yellow-600',
            },
            {
              title: 'Jalur Afirmasi (Quota 20%)',
              desc: 'Jumlah Kuota: 18 Siswa. Khusus disiapkan bagi calon siswa yang berasal dari keluarga dengan ekonomi prasejahtera atau penyandang disabilitas ringan yang masih mandiri.',
              items: [
                'Pemegang Kartu Indonesia Pintar (KIP)',
                'Pemegang Kartu Program Keluarga Harapan (PKH)',
                'Keluarga terdaftar dalam DTKS Dinas Sosial Sikka'
              ],
              style: 'border-l-4 border-emerald-500',
              iconBg: 'bg-emerald-50 text-emerald-600',
            },
            {
              title: 'Jalur Mutasi (Quota 10%)',
              desc: 'Jumlah Kuota: 6 Siswa. Disiapkan bagi calon siswa yang orang tua/walinya dipindahtugaskan dinas, atau anak kandung GTK (Guru dan Tenaga Kependidikan) di SMPN 2 Waigete.',
              items: [
                'Surat Keputusan Mutasi Kerja Instansi Pemerintah/BUMN/Swasta',
                'Surat Keterangan Mengajar dari Kepala Sekolah'
              ],
              style: 'border-l-4 border-purple-500',
              iconBg: 'bg-purple-50 text-purple-600',
            },
          ].map((jalur, j) => (
            <div key={j} className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm ${jalur.style} flex flex-col justify-between`}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${jalur.iconBg}`}>
                    <Info size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">{jalur.title}</h4>
                </div>
                <p className="text-slate-650 text-sm font-light leading-relaxed">{jalur.desc}</p>
                <div className="space-y-2 pt-2">
                  <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Persyaratan Utama Pendukung:</span>
                  <ul className="space-y-1.5">
                    {jalur.items.map((it, idx) => (
                      <li key={idx} className="text-xs text-slate-605 flex items-start gap-1.5">
                        <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={13} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sanksi & Pengawasan - Anti Korupsi */}
      <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
        <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
          <AlertTriangle size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 text-base">Transparansi & Kejujuran Berkas</h4>
          <p className="text-xs text-slate-500 leading-relaxed font-light">
            Apabila di kemudian hari ditemukan tindakan manipulasi data (seperti pemalsuan nilai rapor, manipulasi tanggal terbit Kartu Keluarga, pemalsuan KIP, dll), maka panitia SPMB berhak membatalkan status penerimaan siswa sewaktu-waktu secara sepihak dan menyerahkan proses hukum seperlunya.
          </p>
        </div>
      </div>
    </div>
  );
};
