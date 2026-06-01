import { CreditCard, DollarSign, CheckCircle2, ShieldCheck, HelpCircle, FileText, Info } from 'lucide-react';

export const AnnualFeesSection = () => {
  const feesList = [
    { 
      name: 'Komite Sekolah', 
      amount: 500000, 
      frequency: 'Tahunan', 
      desc: 'Satu-satunya iuran rutin tahunan (tetap Rp 500.000,- per tahun) untuk pendanaan kegiatan operasional penunjang siswa & komite.' 
    },
    { 
      name: 'Pembangunan', 
      amount: 50000, 
      frequency: 'Sekali Bayar', 
      desc: 'Iuran pemeliharaan sarana prasarana. Hanya dibayarkan 1 kali saja selama menjadi siswa baru.' 
    },
    {
      name: 'Pakaian',
      amount: null,
      isHeaderOnly: true,
      desc: 'Paket seragam & atribut lengkap siswa baru. Seluruh biaya di bawah ini hanya dibebankan 1 kali saja.'
    },
    { 
      name: 'Pakaian Olahraga', 
      amount: 120000, 
      isSubItem: true, 
      frequency: 'Sekali Bayar', 
      desc: 'Satu pasang seragam kaos & celana olahraga resmi SPENDU Waigete.' 
    },
    { 
      name: 'Pakaian OSIS', 
      amount: 80000, 
      isSubItem: true, 
      frequency: 'Sekali Bayar', 
      desc: 'Seragam pakaian / rompi khas OSIS penunjang kelengkapan seragam resmi.' 
    },
    { 
      name: 'Atribut Seragam', 
      amount: 20000, 
      isSubItem: true, 
      frequency: 'Sekali Bayar', 
      desc: 'Badge dada bordir sekolah, lambang saku, dasi, ikat pinggang, topi, dan kelengkapan atribut seragam.' 
    },
    { 
      name: 'Pas foto', 
      amount: 30000, 
      frequency: 'Sekali Bayar', 
      desc: 'Biaya pengambilan dan pencetakan pas foto resmi siswa (latar merah) untuk urusan ijazah & raport.' 
    },
    { 
      name: 'Buku Raport', 
      amount: 65000, 
      frequency: 'Sekali Bayar', 
      desc: 'Penyediaan dokumen cetak buku laporan hasil belajar Kurikulum Merdeka yang berlaku selama masa sekolah.' 
    },
    { 
      name: 'Solidaritas Pendidikan', 
      amount: 25000, 
      frequency: 'Sekali Bayar', 
      desc: 'Iuran kemitraan solidaritas penunjang dana duka, bantuan sosial kebajikan, atau musibah tak terduga (hanya dibayar 1x).' 
    },
  ];

  // Calculate total fees
  const totalFees = feesList.reduce((acc, curr) => acc + (curr.amount || 0), 0);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num) + ',-';
  };

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Rincian Biaya & Keuangan</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Daftar Keuangan sekolah Siswa baru dan Tahunan secara transparan, akuntabel, dan berlandaskan mufakat bersama.
        </p>
      </div>

      {/* Info Banner explaining policy clearly */}
      <div className="bg-amber-50/70 border border-amber-200/60 rounded-2xl p-5 flex items-start gap-4">
        <Info className="text-amber-600 shrink-0 mt-0.5 animate-pulse" size={20} />
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-amber-900">Ketentuan Penting Masa Pembayaran</h4>
          <p className="text-xs text-amber-800 leading-relaxed font-light">
            Uang <strong className="font-semibold">Komite Sekolah adalah biaya tetap sebesar {formatRupiah(500000)} yang dibayarkan secara rutin setiap tahun (Tahunan)</strong>. Sedangkan seluruh biaya penunjang administrasi lainnya (Pembangunan, Pakaian seragam lengkap, Pas Foto, Raport, dll) <strong className="font-semibold">hanya dibayarkan 1 Kali (Sekali Bayar)</strong> khusus di awal pendaftaran sebagai siswa baru.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Left Side: Table of Fees */}
        <div className="md:col-span-8 space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <CreditCard className="text-blue-600" size={20} />
              Daftar Keuangan Siswa Baru & Tahunan
            </h3>

            <div className="divide-y divide-slate-100">
              {feesList.map((fee, idx) => {
                if (fee.isHeaderOnly) {
                  return (
                    <div key={idx} className="py-4 bg-slate-50/50 -mx-6 px-6">
                      <div className="flex justify-between items-center">
                        <span className="font-extrabold text-slate-700 text-sm uppercase tracking-wide">{fee.name}</span>
                        <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-full">
                          Sekali Bayar
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs font-light mt-0.5">{fee.desc}</p>
                    </div>
                  );
                }

                return (
                  <div key={idx} className={`py-4 flex justify-between items-start gap-4 ${fee.isSubItem ? 'pl-6 border-l-2 border-blue-100/70' : ''}`}>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {fee.isSubItem && <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500"></span>}
                        <span className={`text-slate-800 font-semibold text-sm ${fee.isSubItem ? 'text-slate-700' : 'text-slate-850 font-bold'}`}>
                          {fee.name}
                        </span>
                        {fee.frequency && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                            fee.frequency === 'Tahunan' 
                              ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                              : 'bg-slate-100 text-slate-500 border border-slate-200'
                          }`}>
                            {fee.frequency}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-500 text-xs font-light leading-relaxed max-w-md">{fee.desc}</p>
                    </div>
                    <div className="text-right shrink-0 whitespace-nowrap">
                      <span className="font-mono text-sm font-bold text-slate-700">
                        {fee.amount !== null ? formatRupiah(fee.amount) : '-'}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Total Calculation Row */}
              <div className="py-6 flex justify-between items-center border-t-2 border-slate-200 -mx-6 px-6 bg-blue-50/30">
                <div className="space-y-0.5">
                  <span className="font-black text-slate-800 text-sm uppercase tracking-wider block">Total Pembayaran Awal</span>
                  <p className="text-slate-500 text-[11px] font-light">Jumlah seluruh kewajiban pada tahun pertama masuk sekolah</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-base md:text-lg font-black text-blue-700 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 inline-block">
                    {formatRupiah(totalFees)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Info & Terms */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
            <h4 className="text-sm font-extrabold text-slate-700 flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-500" /> Komitmen Transparansi Sekolah
            </h4>
            <div className="space-y-2.5 text-xs text-slate-500 leading-relaxed font-light">
              <p>
                1. <strong>Mufakat Bersama:</strong> Besaran uang komite dan iuran penunjang pendidikan telah dimusyawarahkan dan disepakati mufakat oleh Pengurus Komite bersama Orang Tua/Wali murid dalam rapat pleno terbuka.
              </p>
              <p>
                2. <strong>Bebas Pungutan Liar:</strong> Tidak ada pungutan harian atau tagihan tidak resmi lainnya di luar daftar yang tercantum di atas. Segala jenis transaksi wajib menyertakan kuitansi resmi dari Bendahara Komite.
              </p>
              <p>
                3. <strong>Bantuan Khusus Ekonomi Prasejahtera:</strong> Bagi yatim piatu atau keluarga tidak mampu pemegang kartu sosial (KIP, PKH, KKS), silakan ajukan keringanan/pembebasan uang komite langsung kepada Kepala Sekolah dengan membawa surat pengantar Ketua Komite.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Action & Highlights */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-md space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-200 uppercase tracking-widest font-mono">PANITIA KEUANGAN</span>
              <h3 className="text-xl font-extrabold leading-tight">Prosedur Pembayaran Biaya</h3>
            </div>
            <div className="space-y-4 text-xs font-light leading-relaxed text-blue-50/90">
              <p>
                Pembayaran administrasi keuangan siswa dapat dilakukan secara bertahap melalui sistem tabungan wali kelas atau langsung disetorkan kepada Bendahara Komite Sekolah di loket administrasi sekolah pada jam kerja.
              </p>
              <div className="bg-white/10 -mx-6 p-4 border-y border-white/15 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-200 block">Dukungan Pertanyaan</span>
                  <span className="font-semibold text-white">Bendahara Komite</span>
                </div>
                <span className="bg-yellow-400 text-blue-950 font-extrabold px-2.5 py-1 rounded text-[10px] uppercase tracking-wide">
                  Aktif
                </span>
              </div>
              <p className="text-[11px] leading-relaxed italic text-blue-100">
                Catatan: Buku tabungan komite akan didistribusikan pada saat hari orientasi sekolah (PLS).
              </p>
            </div>
          </div>

          <div className="border border-slate-100 rounded-3xl p-6 bg-white shadow-sm space-y-4">
            <strong className="text-slate-800 text-sm font-extrabold flex items-center gap-1.5 mb-2">
              <HelpCircle size={16} className="text-blue-500" /> Butuh Layanan Keringanan?
            </strong>
            <p className="text-slate-500 text-xs font-light leading-relaxed">
              Jika keluarga Anda tergolong kurang mampu secara finansial, hubungi panitia bagian Humas atau sekretariat Komite Sekolah untuk memperoleh dispensasi khusus secara kekeluargaan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
