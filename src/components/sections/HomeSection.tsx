import { ArrowRight, CheckCircle, GraduationCap, Users, Building, Award, Calendar, Phone } from 'lucide-react';
import { ActiveTab } from '../../types';

const schoolHeroImage = "/src/assets/images/school_front_gate_1780313886358.png";

interface HomeSectionProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  return (
    <div className="space-y-16 py-4 animate-fade-in">
      {/* 1. Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 text-white min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={schoolHeroImage}
            alt="SMP Negeri 2 Waigete"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-3xl px-8 sm:px-12 py-16 space-y-6">
          <span className="inline-block bg-yellow-400 text-blue-950 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md">
            Penerimaan Murid Baru 2026/2027
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-sm">
            Selamat Datang di Portal Resmi <span className="text-yellow-300">SPMB SMPN 2 Waigete</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-50/90 font-light max-w-2xl leading-relaxed">
            Membentuk generasi cerdas, berkarakter luhur, berbudaya, unggul dalam iptek, serta peduli lingkungan berlandaskan Profil Pelajar Pancasila.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onNavigate('spmb-info')}
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold px-8 py-3.5 rounded-xl transition duration-350 shadow-lg hover:shadow-yellow-400/20 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              Info Pendaftaran <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Key Stats / Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { icon: Users, count: '280+', label: 'Siswa Aktif', color: 'text-blue-600 bg-blue-50' },
          { icon: GraduationCap, count: '26+', label: 'Guru & Staf', color: 'text-emerald-600 bg-emerald-50' },
          { icon: Building, count: '5+', label: 'Fasilitas Unggulan', color: 'text-purple-600 bg-purple-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
            <div className={`p-4 rounded-xl ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">{stat.count}</div>
              <div className="text-sm font-medium text-slate-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Welcome Message */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
          <div className="w-24 h-24 bg-gradient-to-tr from-blue-100 to-indigo-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-inner border border-blue-200/50 mb-4 font-mono">
            PR
          </div>
          <h4 className="font-bold text-slate-900 text-lg">Pankrasius Rasmani, S.Pd.</h4>
          <p className="text-xs text-blue-600 font-semibold tracking-wide">Kepala Sekolah SMPN 2 Waigete</p>
        </div>
        <div className="md:col-span-8 space-y-6 md:pl-4">
          <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">Sambutan Kepala Sekolah</span>
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Selamat Datang Calon Siswa Baru SMP Negeri 2 Waigete!
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed font-light">
            <p>
              Salute, salam sejahtera untuk kita semua. Selamat datang di portal penerimaan murid baru digital kami. Di SMP Negeri 2 Waigete, kami percaya bahwa setiap anak memiliki bakat unik yang patut diasah dengan tulus dalam lingkungan yang asri dan saling mendukung.
            </p>
            <p>
              Kami mengintegrasikan Kurikulum Merdeka dengan kearifan lokal Kabupaten Sikka yang luhur guna membekali murid-murid kami dengan keilmuan mutakhir, literasi digital, akhlak mulia, serta kecintaan mendalam pada kelestarian alam Waigete yang indah ini.
            </p>
            <p>
              Melalui sistem SPMB online ini, kami berkomitmen menyajikan proses pendaftaran yang transparan, mudah diakses, akuntabel, dan bebas pungutan liar. Mari bergabung bersama kami, menjadi bagian dari keluarga besar SMP Negeri 2 Waigete demi masa depan yang lebih cerah!
            </p>
          </div>
        </div>
      </div>

      {/* 4. Why Choose SMPN 2 Waigete */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Kenapa Memilih SMPN 2 Waigete?</h2>
          <p className="text-slate-500 font-light">
            Kami mendedikasikan seluruh sumber daya sekolah untuk menghadirkan pembinaan komprehensif lahir dan batin bagi putra-putri Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Akademik Berbasis Karakter',
              desc: 'Penerapan Kurikulum Merdeka yang menekankan pada 6 dimensi profil lulusan: Keimanan dan Ketakwaan, Kewargaan, Penalaran Kritis, Kreativitas, Kolaborasi, Kemandirian, Kesehatan, Komunikasi dalam kegiatan intra kurikuler, kokurikuler dan extrakurikuler',
              color: 'border-t-4 border-blue-500',
            },
            {
              title: 'Bimbingan & Kepemimpinan',
              desc: 'Layanan Bimbingan Konseling, wadah OSIS, dan Kepemimpinan Siswa untuk menunjang kedisiplinan serta kemandirian kepemimpinan siswa.',
              color: 'border-t-4 border-amber-500',
            },
            {
              title: 'Ekstrakurikuler Pilihan',
              desc: 'Mengembangkan bakat siswa lewat Pramuka, Seni Musik Tradisional-Modern, Volly, English Club, Futsal, Seni Suara, Seni Tari, Bimbingan Rohani-ret ret, serta Kelas Berbasis Proyek (PjBL).',
              color: 'border-t-4 border-emerald-500',
            },
            {
              title: 'Fasilitas Asri & Lestari',
              desc: 'Lingkungan belajar yang asri & sejuk, minim plastik sekali pakai, dilengkapi laboratorium komputer ANBK terkoneksi internet, laboratorium IPA lengkap, serta perpustakaan digital.',
              color: 'border-t-4 border-purple-500',
            },
          ].map((item, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ${item.color} space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between`}>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-800 leading-snug">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Latest Info Announcement Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-yellow-400 font-semibold text-xs tracking-wider uppercase">
            <Calendar size={16} /> Informasi Terkini SPMB
          </div>
          <h3 className="text-2xl font-extrabold">Pendaftaran murid baru SMPN 2 Waigete Telah Dibuka!</h3>
          <p className="text-blue-100 text-sm font-light leading-relaxed">
            Periode pendaftaran dibuka dari tanggal <strong>22 Juni 2026 s.d. 09 Juli 2026</strong>. Pastikan Anda melengkapi dokumen prasyarat yang valid dan membawa dokumen asli langsung ke loket panitia sekolah. Silahkan lihat syarat pendaftaran disamping.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => onNavigate('schedule')}
            className="bg-white text-blue-900 hover:bg-slate-100 font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-sm"
          >
            Lihat Jadwal
          </button>
          <button
            onClick={() => onNavigate('requirements')}
            className="text-white hover:text-yellow-300 font-semibold px-4 py-3 flex items-center gap-1 transition"
          >
            Syarat Daftar <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* 6. Quick Links Section */}
      <div className="py-2 grid sm:grid-cols-2 gap-8">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-blue-200 transition-colors">
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-slate-800">Siapkan Persyaratan Daftar</h4>
            <p className="text-slate-500 text-sm font-light">
              Pelajari semua berkas administrasi dan dokumen fisik wajib yang harus diserahkan langsung ke loket panitia sekolah.
            </p>
          </div>
          <div>
            <button
              onClick={() => onNavigate('requirements')}
              className="mt-4 text-blue-600 hover:text-blue-700 font-bold text-sm flex items-center gap-1 group"
            >
              Lihat Syarat Pendaftaran <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="bg-slate-55 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-emerald-200 transition-colors">
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-slate-800">Ingin Memantau Status Pendaftaran Anda?</h4>
            <p className="text-slate-500 text-sm font-light">
              Lihat jadwal dan hubungi panitia untuk mengetahui kelulusan.
            </p>
          </div>
          <div>
            <button
              onClick={() => onNavigate('registration-status')}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-bold text-sm flex items-center gap-1 group"
            >
              Cek Status Hasil <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* 7. Contact CTA Grid */}
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
            <Phone size={28} />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-slate-800 text-lg">Butuh Bantuan Panitia SPMB?</h4>
            <p className="text-sm text-slate-500 font-light">
              Narahubung kami aktif melayani konsultasi pendaftaran jalur Zonasi maupun Afirmasi.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <a
            href="https://wa.me/6281237143514"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/10 transition flex items-center justify-center gap-2"
          >
            Hubungi via WhatsApp
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="w-full md:w-auto text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl transition"
          >
            Halaman Kontak
          </button>
        </div>
      </div>
    </div>
  );
};
