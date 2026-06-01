import { useState, FormEvent } from 'react';
import { FileEdit, CheckCircle, RefreshCw, Printer, AlertTriangle, ArrowRight, User, Phone, MapPin, School } from 'lucide-react';
import { RegistrationData } from '../../types';

interface RegistrationFormProps {
  onAddRegistration: (student: RegistrationData) => void;
}

export const RegistrationFormSection = ({ onAddRegistration }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    nisn: '',
    fullName: '',
    gender: 'Laki-laki',
    birthPlace: 'Waigete',
    birthDate: '',
    previousSchool: '',
    parentName: '',
    parentPhone: '',
    parentAddress: '',
  });

  const [loading, setLoading] = useState(false);
  const [submittedStudent, setSubmittedStudent] = useState<RegistrationData | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validations
    if (formData.nisn.length !== 10 || isNaN(Number(formData.nisn))) {
      alert('NISN harus berupa 10 digit angka!');
      return;
    }
    if (!formData.fullName || !formData.birthDate || !formData.previousSchool || !formData.parentPhone) {
      alert('Mohon isi semua kolom bertanda bintang (*).');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Create student entry
      const randomIdSuffix = Math.floor(100 + Math.random() * 900); // 3 digits
      const newId = `REG-2026-${randomIdSuffix}`;

      const submittedEntry: RegistrationData = {
        id: newId,
        nisn: formData.nisn,
        fullName: formData.fullName,
        gender: formData.gender as any,
        birthPlace: formData.birthPlace,
        birthDate: formData.birthDate,
        previousSchool: formData.previousSchool,
        parentName: formData.parentName,
        parentPhone: formData.parentPhone,
        parentAddress: formData.parentAddress,
        status: 'Pending', // default status
        submittedAt: new Date().toISOString(),
        notes: 'Pendaftaran sukses secara online. Harap bawa fotocopy KK, Akta Lahir, dan SKL/Rapor asli ke kantor panitia SMPN 2 Waigete untuk diverifikasi fisik.',
      };

      // Store in App state
      onAddRegistration(submittedEntry);

      setSubmittedStudent(submittedEntry);
      setLoading(false);

      // Reset form
      setFormData({
        nisn: '',
        fullName: '',
        gender: 'Laki-laki',
        birthPlace: 'Waigete',
        birthDate: '',
        previousSchool: '',
        parentName: '',
        parentPhone: '',
        parentAddress: '',
      });
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Formulir Pra-Pendaftaran Online</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Lengkapi isian resmi di bawah ini dengan valid berdasarkan dokumen kartu keluarga dan rapor sekolah asal.
        </p>
      </div>

      {!submittedStudent ? (
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Instructions Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-bold text-lg">Persiapan Mengisi Formulir:</h3>
              <ul className="space-y-3 text-xs text-blue-100 font-light leading-relaxed">
                <li className="flex gap-2">
                  <span className="bg-white/10 w-5 h-5 flex items-center justify-center rounded-full font-bold">1</span>
                  <span>Siapkan Nomor NISN (10 Digit) dari SD asal.</span>
                </li>
                <li className="flex gap-2">
                  <span className="bg-white/10 w-5 h-5 flex items-center justify-center rounded-full font-bold">2</span>
                  <span>Sediakan Pas Foto Digital berwarna ukuran 3x4.</span>
                </li>
                <li className="flex gap-2">
                  <span className="bg-white/10 w-5 h-5 flex items-center justify-center rounded-full font-bold">3</span>
                  <span>Nomor WA orang tua harus dalam keadaan aktif harian.</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-150 rounded-2xl p-6 space-y-2.5">
              <div className="flex gap-2 text-amber-850 font-bold text-sm">
                <AlertTriangle size={18} className="shrink-0 text-amber-500" />
                <span>Format Pengisian Data</span>
              </div>
              <p className="text-xs text-amber-705 leading-relaxed font-light">
                Mohon isikan nama lengkap sesuai dengan akta kelahiran asli Anda. Jangan gunakan karakter khusus maupun gelar keagamaan pada bagian kolom biodata anak.
              </p>
            </div>
          </div>

          {/* Form Form Column */}
          <form onSubmit={handleSubmit} className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-8">
            {/* Section 1: Siswa */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="p-1 px-2.5 bg-blue-50 text-blue-700 rounded-md font-bold text-xs uppercase tracking-wide">
                  A. DATA CALON SISWA BARU
                </div>
              </div>

              {/* NISN (10 digits) */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">Nomor Induk Siswa Nasional (NISN) *</label>
                <input
                  type="text"
                  maxLength={10}
                  required
                  placeholder="Ketik 10 digit NISN Anda..."
                  value={formData.nisn}
                  onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                  className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white text-slate-800 font-mono"
                />
                <span className="text-[10px] text-slate-400 font-light block">Bisa ditanyakan ke wali kelas SD asal Anda atau cek mandiri di web Kemendikbud.</span>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">Nama Lengkap Siswa (Sesuai Akta) *</label>
                <input
                  type="text"
                  required
                  placeholder="Ketik nama lengkap anak..."
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white text-slate-800 font-light uppercase"
                />
              </div>

              {/* Gender and TTL */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">Jenis Kelamin *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white text-slate-800"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">Tempat Lahir *</label>
                  <input
                    type="text"
                    required
                    placeholder="Kabupaten Sikka"
                    value={formData.birthPlace}
                    onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                    className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white text-slate-800 font-light"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-705 block">Tanggal Lahir *</label>
                  <input
                    type="date"
                    required
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white text-slate-800"
                  />
                </div>
              </div>

              {/* SD asal */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">Sekolah Dasar (SD) Asal *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: SD Inpres Waigete atau SDN Runut Sikka"
                  value={formData.previousSchool}
                  onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                  className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white text-slate-800 font-light"
                />
              </div>
            </div>

            {/* Section 2: Orang tua */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="p-1 px-2.5 bg-emerald-50 text-emerald-700 rounded-md font-bold text-xs uppercase tracking-wide">
                  B. DATA ORANG TUA / WALI MURID
                </div>
              </div>

              {/* Parent Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-705 block">Nama Lengkap Ayah / Ibu / Wali *</label>
                <input
                  type="text"
                  required
                  placeholder="Ketik nama lengkap wali murid..."
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white text-slate-800 font-light"
                />
              </div>

              {/* Phone number */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-705 block">No. HP / WhatsApp Aktif Wali Murid *</label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 08123344xxx"
                  value={formData.parentPhone}
                  onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                  className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white text-slate-800 font-mono"
                />
                <span className="text-[10px] text-slate-400 font-light block">Akan digunakan operator untuk koordinasi verifikasi administrasi harian.</span>
              </div>

              {/* Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-705 block">Alamat Domisili Tetap (Sesuai KK) *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Dusun Habi Gete, Desa Waigete, Kec. Waigete, Kab. Sikka, NTT"
                  value={formData.parentAddress}
                  onChange={(e) => setFormData({ ...formData, parentAddress: e.target.value })}
                  className="w-full text-xs p-3 border border-slate-205 rounded-xl bg-slate-50 focus:bg-white text-slate-800 font-light leading-relaxed"
                />
              </div>
            </div>

            {/* Submission triggers */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-600/10 transition duration-350 cursor-pointer flex items-center justify-center gap-2 text-xs uppercase"
            >
              {loading ? (
                <>
                  <RefreshCw size={14} className="animate-spin" /> Sedang Memproses Formulir...
                </>
              ) : (
                <>
                  <FileEdit size={14} /> Submit Formulir Pendaftaran Online
                </>
              )}
            </button>
          </form>
        </div>
      ) : (
        /* Success receipt slip */
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-2xl mx-auto space-y-8 animate-scale-up">
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-emerald-55 text-emerald-600 rounded-full animate-bounce">
              <CheckCircle size={32} />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold text-slate-800">Pendaftaran Berhasil Terkirim!</h2>
              <p className="text-slate-500 text-sm font-light">
                Berikut adalah draf tanda bukti pra-pendaftaran online calon siswa SMPN 2 Waigete.
              </p>
            </div>
          </div>

          <div className="border border-slate-105 p-6 rounded-2xl bg-slate-50 font-mono relative">
            <span className="absolute top-4 right-4 bg-yellow-450 border text-blue-900 border-yellow-205 text-[10px] uppercase font-bold py-1 px-3 rounded-md">
              DRAF - PENDING VERIFIKASI
            </span>

            {/* Receipt headers */}
            <div className="text-center border-b border-dotted border-slate-350 pb-4 mb-4 space-y-1">
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-850">KEMENTERIAN PENDIDIKAN & KEBUDAYAAN</h3>
              <h4 className="font-extrabold text-[10px] sm:text-xs text-blue-750">SMP NEGERI 2 WAIGETE - SIKKA</h4>
              <p className="text-[9px] text-slate-400 font-light font-sans">Jl. Trans Maumere-Larantuka, Waigete, Kab. Sikka, NTT</p>
            </div>

            {/* Receipt core */}
            <div className="space-y-3.5 text-xs text-slate-650">
              <div className="flex justify-between">
                <span>NOMOR REGISTRASI:</span>
                <span className="font-bold text-blue-600">{submittedStudent.id}</span>
              </div>
              <div className="flex justify-between">
                <span>TANGGAL DAFTAR:</span>
                <span>{new Date(submittedStudent.submittedAt).toLocaleDateString('id-ID', { hour: '2-digit', minute: '2-digit' })} WITA</span>
              </div>
              <div className="flex justify-between border-t border-slate-105 pt-2">
                <span>NISN SISWA:</span>
                <span className="font-bold text-slate-800">{submittedStudent.nisn}</span>
              </div>
              <div className="flex justify-between">
                <span>NAMA LENGKAP:</span>
                <span className="font-bold text-slate-800 uppercase">{submittedStudent.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span>JENIS KELAMIN:</span>
                <span>{submittedStudent.gender}</span>
              </div>
              <div className="flex justify-between">
                <span>SEKOLAH ASAL SD:</span>
                <span className="font-bold">{submittedStudent.previousSchool}</span>
              </div>
              <div className="flex justify-between border-t border-slate-105 pt-2">
                <span>NAMA ORANG TUA:</span>
                <span>{submittedStudent.parentName}</span>
              </div>
              <div className="flex justify-between">
                <span>NO. WA AKTIF:</span>
                <span>{submittedStudent.parentPhone}</span>
              </div>
            </div>

            <div className="border-t border-dotted border-slate-350 mt-6 pt-4 text-[9px] text-slate-400 text-center leading-relaxed">
              Disediakan secara otomatis oleh operator web sistem PPDB SMPN 2 Waigete.
              Simpan Nomor ID pendaftaran Anda di atas guna melakukan pencarian kelulusan secara online mandiri.
            </div>
          </div>

          {/* Action options */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={handlePrint}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold p-3.5 rounded-xl cursor-pointer text-xs uppercase flex items-center justify-center gap-2 duration-250 shadow-sm"
            >
              <Printer size={14} /> Cetak Bukti Pendaftaran
            </button>
            <button
              onClick={() => setSubmittedStudent(null)}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold p-3.5 rounded-xl text-xs uppercase flex items-center justify-center gap-1 cursor-pointer duration-210"
            >
              Isi Pendaftaran Siswa Lain <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
