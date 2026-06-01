import { GitFork, CheckCircle, Sparkles, RefreshCw, Smartphone } from 'lucide-react';

export const ProcedureSection = () => {
  const offlineSteps = [
    {
      step: '01',
      title: 'Kunjungi Sekretariat SPMB',
      desc: 'Datang langsung ke gedung utama SMP Negeri 2 Waigete memakai pakaian bebas, rapi, bersepatu jinjing pada hari dan jam operasional kerja.',
    },
    {
      step: '02',
      title: 'Ambil & Isi Formulir Cetak',
      desc: 'Ambil formulir pendaftaran fisik gratis dari petugas loket dan isi selengkap mungkin menggunakan pulpen hitam dengan huruf cetak/kapital.',
    },
    {
      step: '03',
      title: 'Serahkan Berkas Persyaratan',
      desc: 'Serahkan formulir yang sudah diisi bersama fotocopy Akta Lahir, KK, SKL SD, pas foto berwarna 3x4 (3 lembar) yang disusun dalam amplop berkas.',
    },
    {
      step: '04',
      title: 'Penerimaan Tanda Terima Antrean',
      desc: 'Panitia menginput data Anda langsung ke pangkalan data Dapodik sekolah dan memberikan Kartu Registrasi Resmi untuk disimpan sebagai bukti pengambilan hasil.',
    },
    {
      step: '05',
      title: 'Panutan Papan Pengumuman',
      desc: 'Cari nama Anda pada kertas pengumuman kelulusan resmi yang ditempel di mading / papan sekolah pada puncak tanggal 5 Juli 2026.',
    },
  ];

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Alur Pendaftaran</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Pahami langkah-langkah mudah mendaftar sebagai murid baru dengan jalur yang nyaman bagi keluarga Anda.
        </p>
      </div>

      {/* Steps List */}
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-5 gap-6">
          {offlineSteps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-blue-500/35 tracking-tight font-mono">
                  {step.step}
                </span>
                <span className="p-1 px-2.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold tracking-wider uppercase">
                  Tahap {idx + 1}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-base leading-tight mb-2">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Syarat Khusus Guru & Panitia Helper */}
      <div className="bg-indigo-50/50 rounded-2xl p-6 sm:p-8 border border-indigo-150 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h4 className="font-bold text-indigo-900 text-lg flex items-center gap-1.5">
            <Sparkles size={20} className="text-indigo-600 shrink-0" /> Butuh Bantuan Pendaftaran?
          </h4>
          <p className="text-xs text-indigo-700 leading-relaxed font-light">
            Jika orang tua menghadapi kendala pengisian formulir atau memiliki pertanyaan mengenai persyaratan, silakan datangi sekretariat pendaftaran kami. Panitia dan pengelola sekolah siap melayani Anda secara langsung demi kemudahan proses pendaftaran putra-putri Anda.
          </p>
        </div>
        <div className="shrink-0">
          <div className="px-5 py-3.5 bg-indigo-600 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-lg shadow-indigo-650/15">
            <RefreshCw size={14} className="animate-spin" /> Panitia Aktif Melayani
          </div>
        </div>
      </div>
    </div>
  );
};
