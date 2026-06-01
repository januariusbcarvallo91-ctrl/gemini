import { UserCheck, Phone, CheckCircle, HelpCircle } from 'lucide-react';
import { COMMITTEE_MEMBERS } from '../../mockData';

export const CommitteeSection = () => {
  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Panitia Penerimaan Siswa (SPMB)</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Susunan resmi jajaran guru dan tenaga administrasi yang ditugaskan melayani konsultasi pendaftaran 2026/2027.
        </p>
      </div>

      {/* Intro Table */}
      <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <UserCheck className="text-blue-600" size={24} /> Struktur SK Panitia SPMB
          </h2>
          <p className="text-slate-500 text-sm font-light">
            Sesuai Surat Keputusan (SK) Kepala Sekolah SMP Negeri 2 Waigete Nomor: <strong>421.3 / 112 / PL / 2026</strong>, berikut adalah daftar panitia rujukan sah:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMITTEE_MEMBERS.map((member) => (
            <div key={member.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-105 flex flex-col justify-between hover:border-blue-200 transition duration-300">
              <div className="space-y-3">
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-850 text-base leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
                <div className="text-xs text-slate-500 border-t border-slate-200/60 pt-2 font-light">
                  <span className="font-semibold block text-slate-700">Tugas / Seksi:</span>
                  <span>{member.section}</span>
                </div>
              </div>

              {member.phone && (
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                  {/* WhatsApp Hub Link */}
                  <a
                    href={`https://wa.me/` + member.phone.replace(/[^0-9]/g, '')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1 group"
                  >
                    <Phone size={13} />
                    <span>WhatsApp Panitia</span>
                  </a>
                  <span className="font-mono text-[10px] text-slate-400">AKTIF</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Responsibilites Section */}
      <div className="bg-blue-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <h3 className="text-2xl font-extrabold mb-4">Prinsip Pelayanan Panitia SPMB:</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { t: 'Objektifitas Tinggi', d: 'Melakukan penyeleksian nilai murni tanpa didasarkan hubungan kepartaian, kerabat, maupun materi.' },
            { t: 'Bebas Pungli', d: 'Seluruh pemrosesan kuota pendaftaran tidak dipungut biaya sepeser pun demi kesejahteraan masyarakat NTT.' },
            { t: 'Layanan Cepat Tanggap', d: 'Menghadapi kesulitan pendaftaran online dengan pendampingan langsung di laboratorium komputer.' },
          ].map((prinsip, pi) => (
            <div key={pi} className="bg-white/10 p-5 rounded-2xl border border-white/10 font-light space-y-2">
              <h4 className="font-bold text-yellow-300 text-sm sm:text-base">{prinsip.t}</h4>
              <p className="text-blue-100 text-xs leading-relaxed">{prinsip.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
