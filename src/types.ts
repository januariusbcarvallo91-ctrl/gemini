export type ActiveTab =
  | 'home'
  | 'profile'
  | 'spmb-info'
  | 'annual-fees'
  | 'schedule'
  | 'requirements'
  | 'procedure'
  | 'teachers'
  | 'facilities'
  | 'achievements'
  | 'gallery'
  | 'downloads'
  | 'committee'
  | 'contact'
  | 'registration-form'
  | 'registration-status';

export interface MenuItem {
  id: ActiveTab;
  label: string;
  category: 'main' | 'spmb' | 'school' | 'action';
  iconName: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  nip?: string;
  photoUrl: string;
  education: string;
  category?: 'kepemimpinan' | 'guru' | 'staf';
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  iconName: string;
}

export interface Achievement {
  id: string;
  title: string;
  level: string; // e.g., 'Kabupaten', 'Provinsi', 'Nasional'
  year: string;
  category: 'Akademik' | 'Non-Akademik';
  recipient: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'KBM' | 'Fasilitas' | 'Ekstrakurikuler' | 'Acara';
  imageUrl: string;
  description: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileSize: string;
  fileType: 'PDF' | 'DOCX' | 'XLSX';
  downloadUrl: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  phone?: string;
  section: string;
}

export interface RegistrationData {
  id: string;
  nisn: string;
  fullName: string;
  gender: 'Laki-laki' | 'Perempuan';
  birthPlace: string;
  birthDate: string;
  previousSchool: string;
  parentName: string;
  parentPhone: string;
  parentAddress: string;
  status: 'Pending' | 'Terverifikasi' | 'Menunggu Hasil Seleksi' | 'Diterima' | 'Tidak Diterima';
  submittedAt: string;
  notes?: string;
}
