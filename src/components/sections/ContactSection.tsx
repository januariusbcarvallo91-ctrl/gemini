import { useState, FormEvent } from 'react';
import { MapPin, Mail, Phone, Globe, MessageSquare, Send, CheckCircle, RefreshCw } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [waUrl, setWaUrl] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message || !formData.phone) return;

    setLoading(true);
    
    const waNumber = "6281237143514";
    const waText = `Halo Ibu Umy (Panitia SPMB SMPN 2 Waigete), saya *${formData.name}* ingin bertanya:

${formData.message}

Detail Kontak:
- No. HP/WhatsApp: ${formData.phone}
- Email: ${formData.email || '-'}`;

    const finalWaUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(waText)}`;
    setWaUrl(finalWaUrl);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Auto-open WhatsApp link in a new window/tab safely
      window.open(finalWaUrl, '_blank');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Hubungi Kami</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Kirim pertanyaan, kritik, atau saran terkait program sekolah dan prosedur SPMB SMPN 2 Waigete.
        </p>
      </div>

      {/* Grid: Info cards and Contact Form */}
      <div className="grid md:grid-cols-12 gap-8">
        {/* Left Column contacts */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-800">Sekretariat SMPN 2 Waigete</h2>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  label: 'Alamat Sekolah',
                  val: 'Jl. Trans Maumere - Larantuka, KM.27 Kec. Waigete, Kab. Sikka, Nusa Tenggara Timur (86171)',
                  color: 'text-rose-600 bg-rose-50',
                },
                {
                  icon: Phone,
                  label: 'Nomor Telepon / WA',
                  val: '081237806460 (Pak Yano)\n081237143514 (Ibu Umy)\n081389802651 (Pak Ignas)',
                  color: 'text-indigo-600 bg-indigo-50',
                },
                {
                  icon: Mail,
                  label: 'Email Resmi',
                  val: 'smpn2waigete@gmail.com',
                  color: 'text-blue-600 bg-blue-50',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${item.color} h-fit`}>
                    <item.icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {item.label}
                    </span>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal whitespace-pre-line">
                      {item.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Simulation Panel */}
          <div className="bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 aspect-video relative flex flex-col justify-end p-4">
            {/* Visual simulation of map */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600&h=400"
                alt="Map Background"
                className="w-full h-full object-cover saturate-50 opacity-40"
                referrerPolicy="no-referrer"
              />
              {/* Coordinates graphic to add contextual elegance */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-slate-205 shadow-lg max-w-[220px]">
                  <MapPin className="text-red-500 mx-auto mb-1 animate-bounce" size={28} />
                  <span className="text-xs font-extrabold text-slate-805 block">SMPN 2 Waigete</span>
                  <span className="text-[10px] text-slate-500 font-light block">Waigete, Sikka, NTT</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-slate-200/50 flex justify-between items-center text-[10px] text-slate-500 font-mono">
              <span>LAT: -8.6256° S</span>
              <span>LON: 122.3789° E</span>
            </div>
          </div>
        </div>

        {/* Right Column Form */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-1.5">
              <MessageSquare size={20} className="text-blue-600" /> Kirim Pesan Pertanyaan
            </h2>
            <p className="text-slate-500 font-light text-xs sm:text-sm">
              Kami siap membalas pesan Anda selambat-lambatnya dalam tempo 1x24 jam kerja.
            </p>
          </div>

          {success && (
            <div className="bg-emerald-50 border border-emerald-255 text-emerald-800 p-5 rounded-2xl space-y-3 animate-fade-in shadow-sm">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Pertanyaan Berhasil Disiapkan!
                </p>
              </div>
              <p className="text-xs font-light text-emerald-700 leading-relaxed">
                Formulir telah berhasil disiapkan secara otomatis. Anda akan dialihkan langsung ke chat WhatsApp <strong className="font-semibold">Ibu Umy (081237143514)</strong>. Jika tidak terbuka otomatis, silakan klik tombol di bawah ini:
              </p>
              <div className="pt-1">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-md"
                >
                  <MessageSquare size={14} /> Hubungi Lewat WhatsApp Sekarang
                </a>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Nama Lengkap *</label>
                <input
                  type="text"
                  required
                  placeholder="Ketik nama Anda..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 font-light"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Nomor HP / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 0812345xxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 font-light"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Alamat Email (Opsional)</label>
              <input
                type="email"
                placeholder="Contoh: nama@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 font-light"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Isi Pesan Pertanyaan Anda *</label>
              <textarea
                required
                rows={5}
                placeholder="Ketik detail isi pesan atau pertanyaan Anda di sini..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 font-light leading-relaxed"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold p-3.5 rounded-xl shadow-md hover:shadow-blue-650/15 duration-250 flex items-center justify-center gap-2 cursor-pointer text-xs uppercase"
            >
              {loading ? (
                <>
                  <RefreshCw size={14} className="animate-spin" /> Sedang Mengirim...
                </>
              ) : (
                <>
                  <Send size={14} /> Kirim Pesan Pertanyaan
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
