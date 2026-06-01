import { Award, BookOpen, Compass, Shield, MapPin, Calendar, Heart } from 'lucide-react';

export const ProfileSection = () => {
  const isis = [
    {
      icon: Compass,
      title: 'Visi Sekolah',
      content: '“Unggul dalam prestasi, mandiri dalam karya, teladan dalam karakter berdasarkan iman dan taqwa kepada TYME.”',
      bg: 'bg-blue-50 text-blue-700',
    },
    {
      icon: Shield,
      title: 'Misi Utama',
      content: '1. Melaksanakan pembelajaran dan bimbingan secara efektif.\n2. Mengembangkan IPTEK berdasarkan bakat, minat, dan daya kreasi melalui kegiatan ekstrakurikuler.\n3. Membangun kemandirian melalui kegiatan kewirausahaan dan pengembangan diri.\n4. Menerapkan manajeman partisipatif dan demokratis dengan melibatkan seluruh warga sekolah dalam mengambil keputusan\n5. Menumbuhkan keimanan dan ketaqwaan melalui pengamalan dan penghayatan ajaran agama.',
      bg: 'bg-emerald-50 text-emerald-700',
    },
  ];

  return (
    <div className="space-y-12 py-4 animate-fade-in">
      {/* Title */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Profil Sekolah</h1>
        <p className="text-slate-500 font-light text-sm mt-1">
          Mengenal lebih dekat visi, misi, identitas, dan sejarah berdirinya SMP Negeri 2 Waigete.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {isis.map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <div className={`p-4 w-fit rounded-xl ${item.bg}`}>
              <item.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-850">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-light">
              {item.content}
            </p>
          </div>
        ))}
      </div>

      {/* Sejarah Singkat */}
      <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-100 space-y-6">
        <div className="flex items-center gap-2">
          <BookOpen className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-slate-800">Sejarah Singkat Sekolah</h2>
        </div>
        <div className="space-y-4 text-slate-600 leading-relaxed font-light text-sm sm:text-base border-t border-slate-100 pt-4">
          <p>
            SMP Negeri 2 Waigete didirikan demi mendekatkan akses pendidikan menengah pertama yang bermutu bagi masyarakat di lingkar timur Kabupaten Sikka, khususnya di Kecamatan Waigete, NTT. Dengan dimulainya pembangunan infrastruktur sekolah, sekolah ini resmi menyambut angkatan belajar pertamanya.
          </p>
          <p>
            Sejak awal pendiriannya, sekolah berfokus pada pengembangan kecerdasan holistik. Tidak hanya dari sisi materi buku pelajaran, namun juga penanaman kecintaan terhadap lingkungan alam pegunungan dan pantai Wairterang yang hijau lestari. Hal ini terlaksana dalam kegiatan Project P5 yang sekarang diubah menjadi kegiatan Kokurikuler oleh Kemdikdasmen.
          </p>
          <p>
            Kini, di bawah kepemimpinan Bapak <strong>Pankrasius Rasmani, S.Pd.</strong>, sekolah bertransformasi penuh ke media pembelajaran berbasis digital. Kami dipercaya menyelenggarakan Asesmen Nasional Berbasis Komputer (ANBK) secara mandiri dan mengimplementasikan Kurikulum Merdeka dengan rekam jejak kelulusan siswa yang terus menorehkan prestasi membanggakan.
          </p>
        </div>
      </div>

      {/* Identitas Resmi Tabel */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
        <div className="flex items-center gap-2">
          <Award className="text-yellow-600" size={24} />
          <h2 className="text-2xl font-bold text-slate-800">Identitas Resmi Sekolah</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-700">
                <th className="py-4 px-6 font-semibold">Uraian Identitas</th>
                <th className="py-4 px-6 font-semibold">Keterangan Resmi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {[
                { name: 'Nama Sekolah', val: 'SMP Negeri 2 Waigete' },
                { name: 'NPSN', val: '69799866' },
                { name: 'Bentuk Pendidikan', val: 'Sekolah Menengah Pertama (Negeri)' },
                { name: 'Status Akreditasi', val: 'Akreditasi B' },
                { name: 'Kurikulum Operasional', val: 'Kurikulum Merdeka (KBM Berpusat pada Siswa & P5)' },
                { name: 'Kepala Sekolah', val: 'Pankrasius Rasmani, S.Pd' },
                { name: 'Alamat Sekolah', val: 'Jl. Trans Maumere - Larantuka, KM.27 Kec. Waigete, Kab. Sikka, Nusa Tenggara Timur (86171)' },
                { name: 'Email Resmi', val: 'smpn2waigete@gmail.com' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-800">{row.name}</td>
                  <td className="py-4 px-6">{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Nilai-Nilai Luhur Sekolah */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Heart, colors: 'text-amber-500 bg-amber-50', title: 'Budaya Kasih', d: 'Mendidik dengan rasa asih dan empati, menciptakan kenyamanan tanpa diskriminasi.' },
          { icon: Calendar, colors: 'text-blue-500 bg-blue-50', title: 'Disiplin Tinggi', d: 'Tepat waktu dan bertanggung jawab adalah modal dasar kesuksesan siswa Waigete.' },
          { icon: MapPin, colors: 'text-rose-500 bg-rose-50', title: 'Sinergi Komunitas', d: 'Menjalin kolaborasi aktif dengan orang tua murid serta tetua adat desa.' },
        ].map((v, i) => (
          <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center space-y-3">
            <div className={`p-3 mx-auto w-fit rounded-xl ${v.colors}`}>
              <v.icon size={20} />
            </div>
            <h4 className="font-bold text-slate-800 text-base">{v.title}</h4>
            <p className="text-slate-500 text-xs leading-relaxed font-light">{v.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
