import { useState } from 'react';
import { FileDown, Download, CheckCircle, RefreshCw, FileText, AlertCircle } from 'lucide-react';
import { DOWNLOAD_ITEMS } from '../../mockData';

export const DownloadsSection = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccessName, setDownloadSuccessName] = useState<string | null>(null);

  const handleDownloadSimulation = (item: typeof DOWNLOAD_ITEMS[0]) => {
    setDownloadingId(item.id);
    setDownloadSuccessName(null);

    // Simulate download delay
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccessName(item.title);

      // Dismiss success alert after 5 seconds
      setTimeout(() => {
        setDownloadSuccessName(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Pusat Unduhan</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Dapatkan berkas fisik, brosur rincian agenda, serta draf surat pernyataan komitmen wali murid yang sah.
        </p>
      </div>

      {/* Float Success notification */}
      {downloadSuccessName && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3 animate-fade-in shadow-md">
          <CheckCircle className="text-emerald-500 shrink-0" size={20} />
          <div className="text-xs sm:text-sm">
            Telah Berhasil Mengunduh: <strong>{downloadSuccessName}</strong>. Berkas tersimpen di folder Unduhan lokal perangkat Anda.
          </div>
        </div>
      )}

      {/* Downloads List */}
      <div className="space-y-6">
        {DOWNLOAD_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md transition duration-300"
          >
            {/* File Info */}
            <div className="flex items-start gap-4">
              <div className={`p-4 rounded-xl shrink-0 ${
                item.fileType === 'PDF'
                  ? 'bg-rose-50 text-rose-600'
                  : 'bg-blue-50 text-blue-600'
              }`}>
                <FileText size={28} />
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 border text-slate-500">
                    {item.fileType}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    Siz: {item.fileSize}
                  </span>
                </div>
                <h3 className="font-bold text-slate-850 text-base leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full md:w-auto shrink-0">
              <button
                disabled={downloadingId !== null}
                onClick={() => handleDownloadSimulation(item)}
                className={`w-full md:w-auto flex items-center justify-center gap-2 font-bold text-xs px-5 py-3.5 rounded-xl transition cursor-pointer shadow-sm ${
                  downloadingId === item.id
                    ? 'bg-blue-50 text-blue-600 border border-blue-100'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/10'
                }`}
              >
                {downloadingId === item.id ? (
                  <>
                    <RefreshCw size={14} className="animate-spin" /> Mengunduh...
                  </>
                ) : (
                  <>
                    <Download size={14} /> Unduh Berkas
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Panduan Cetak */}
      <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100/60 text-slate-650 text-xs leading-relaxed space-y-2">
        <div className="flex items-center gap-2 font-bold text-blue-800">
          <AlertCircle size={16} />
          <span>Petunjuk Pencetakan Dokumen:</span>
        </div>
        <p className="font-light">
          Bila mengunduh **Surat Pernyataan Orang Tua**, silakan cetak di kertas ukuran **F4 / HVS** polos putih bersih seberat minimal 70 gram. Silakan rekatkan materai resmi bertanda Rp10.000,00 dan bubuhkan tanda tangan pena basah berwarna hitam sebelum diserahkan kembali pada panitia verifikasi fisik.
        </p>
      </div>
    </div>
  );
};
