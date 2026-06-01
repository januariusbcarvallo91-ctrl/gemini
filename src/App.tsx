import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, MapPin, Phone, Mail, Clock, ExternalLink, Calendar, HelpCircle, Bell } from 'lucide-react';

import { ActiveTab, RegistrationData } from './types';
import { MENU_ITEMS, DEMO_REGISTRATIONS } from './mockData';
import { DynamicIcon } from './components/Icons';

// Import all section components
import { HomeSection } from './components/sections/HomeSection';
import { ProfileSection } from './components/sections/ProfileSection';
import { SpmbInfoSection } from './components/sections/SpmbInfoSection';
import { ScheduleSection } from './components/sections/ScheduleSection';
import { RequirementsSection } from './components/sections/RequirementsSection';
import { ProcedureSection } from './components/sections/ProcedureSection';
import { TeachersSection } from './components/sections/TeachersSection';
import { FacilitiesSection } from './components/sections/FacilitiesSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { GallerySection } from './components/sections/GallerySection';
import { DownloadsSection } from './components/sections/DownloadsSection';
import { CommitteeSection } from './components/sections/CommitteeSection';
import { ContactSection } from './components/sections/ContactSection';
import { RegistrationFormSection } from './components/sections/RegistrationFormSection';
import { RegistrationStatusSection } from './components/sections/RegistrationStatusSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);

  // Load custom student registrations from localStorage & merge with demo registrations
  useEffect(() => {
    const saved = localStorage.getItem('smpn2waigete_registrations');
    let localList: RegistrationData[] = [];
    if (saved) {
      try {
        localList = JSON.parse(saved);
      } catch (err) {
        console.error('Error parsing local registrations', err);
      }
    }
    // Combined unique list
    setRegistrations([...DEMO_REGISTRATIONS, ...localList]);
  }, []);

  const handleAddRegistration = (newStudent: RegistrationData) => {
    // Save to local storage
    const saved = localStorage.getItem('smpn2waigete_registrations');
    let currentLocal: RegistrationData[] = [];
    if (saved) {
      try {
        currentLocal = JSON.parse(saved);
      } catch (e) {
        currentLocal = [];
      }
    }
    const updatedLocal = [newStudent, ...currentLocal];
    localStorage.setItem('smpn2waigete_registrations', JSON.stringify(updatedLocal));

    // Update in memory state
    setRegistrations([...DEMO_REGISTRATIONS, ...updatedLocal]);
  };

  const handleNavigate = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Menu categorization mapping for beautiful visual layout groups
  const MENU_GROUPS = [
    {
      title: 'Portal Utama',
      items: ['home', 'contact'],
    },
    {
      title: 'Profil Sekolah',
      items: ['profile', 'teachers', 'facilities', 'achievements', 'gallery'],
    },
    {
      title: 'Informasi SPMB PPDB',
      items: ['spmb-info', 'schedule', 'requirements', 'procedure', 'committee'],
    },
    {
      title: 'Aksi Layanan Mandiri',
      items: ['registration-status'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* 1. Header Urgant Notification Alert Banner */}
      <div className="bg-blue-900 border-b border-blue-950 text-white text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-light">
            <span className="bg-yellow-400 text-blue-950 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider animate-pulse">
              NEWS
            </span>
            <span>SPMB SPENDU WAIGETE: 20 Juni s.d 09 Juli 2026. Segera daftarkan anak Anda!</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-blue-250 font-mono divide-x divide-blue-805">
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-yellow-400" /> Waigete, Sikka, NTT
            </span>
            <span className="pl-4 flex items-center gap-1">
              <Clock size={12} className="text-yellow-400" /> SENIN - SABTU: 08.00 - 14.00 WITA
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Branding Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-150/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="p-2.5 bg-blue-600 text-white rounded-2xl shadow-md group-hover:bg-blue-700 transition-colors">
              <GraduationCap size={26} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block font-mono">PANITIA SPMB 2026/2027</span>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-850 group-hover:text-blue-600 duration-200 uppercase">
                SMP Negeri 2 Waigete
              </h1>
            </div>
          </div>

          {/* Desktop Right Info Shortcut */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavigate('registration-status')}
              className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl transition shadow-md hover:shadow-blue-600/10"
            >
              Cek Status Kelulusan
            </button>
          </div>

          {/* Hamburger Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-slate-50 border border-slate-100 rounded-xl lg:hidden text-slate-600 hover:text-slate-850 transition"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* 3. Main Workspace container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 grid lg:grid-cols-12 gap-8 items-start">
        
        {/* SIDEBAR NAVIGATION: Desktop */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-[100px] border border-slate-200/60 bg-white p-6 rounded-2xl shadow-sm space-y-6 max-h-[80vh] overflow-y-auto">
          {MENU_GROUPS.map((group, gIdx) => (
            <div key={gIdx} className="space-y-2">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 block px-3">
                {group.title}
              </span>
              <nav className="space-y-1">
                {group.items.map((key) => {
                  const item = MENU_ITEMS.find((m) => m.id === key);
                  if (!item) return null;
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleNavigate(key as ActiveTab)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600 shadow-sm pl-4'
                          : 'text-slate-605 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <DynamicIcon
                          name={item.iconName}
                          size={15}
                          className={isActive ? 'text-blue-600' : 'text-slate-400'}
                        />
                        <span>{item.label}</span>
                      </div>
                      {item.category === 'action' && !isActive && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          ))}
        </aside>

        {/* MOBILE DRAWER: Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[77px] z-30 bg-slate-950/40 backdrop-blur-sm lg:hidden animate-fade-in flex flex-col justify-start">
            <div className="bg-white p-6 max-h-[75vh] overflow-y-auto border-b border-slate-200 shadow-xl space-y-6">
              {MENU_GROUPS.map((group, gIdx) => (
                <div key={gIdx} className="space-y-2">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 block">
                    {group.title}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {group.items.map((key) => {
                      const item = MENU_ITEMS.find((m) => m.id === key);
                      if (!item) return null;
                      const isActive = activeTab === key;
                      return (
                        <button
                          key={key}
                          onClick={() => handleNavigate(key as ActiveTab)}
                          className={`flex items-center gap-2 px-3 py-3 rounded-xl text-left text-xs font-semibold transition ${
                            isActive
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <DynamicIcon
                            name={item.iconName}
                            size={14}
                            className={isActive ? 'text-white' : 'text-slate-400'}
                          />
                          <span className="truncate">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. MAIN CENTRAL CONTENT CHASSIS PANEL */}
        <main className="lg:col-span-9 w-full min-h-[60vh] bg-transparent">
          {activeTab === 'home' && <HomeSection onNavigate={handleNavigate} />}
          {activeTab === 'profile' && <ProfileSection />}
          {activeTab === 'spmb-info' && <SpmbInfoSection />}
          {activeTab === 'schedule' && <ScheduleSection />}
          {activeTab === 'requirements' && <RequirementsSection />}
          {activeTab === 'procedure' && <ProcedureSection />}
          {activeTab === 'teachers' && <TeachersSection />}
          {activeTab === 'facilities' && <FacilitiesSection />}
          {activeTab === 'achievements' && <AchievementsSection />}
          {activeTab === 'gallery' && <GallerySection />}
          {activeTab === 'downloads' && <DownloadsSection />}
          {activeTab === 'committee' && <CommitteeSection />}
          {activeTab === 'contact' && <ContactSection />}
          {activeTab === 'registration-form' && (
            <RegistrationFormSection onAddRegistration={handleAddRegistration} />
          )}
          {activeTab === 'registration-status' && (
            <RegistrationStatusSection registrations={registrations} />
          )}
        </main>
      </div>

      {/* 5. Primary Footer Layout */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-950 mt-16 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Logo brand */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <div className="p-1.5 bg-blue-600 text-white rounded-xl">
                <GraduationCap size={20} />
              </div>
              <h4 className="font-extrabold uppercase text-slate-100">SMPN 2 Waigete</h4>
            </div>
            <p className="text-slate-500 font-light leading-relaxed text-xs">
              Membina tunas bangsa di Kabupaten Sikka dengan keluhuran etika, literasi digital kokoh, serta cinta budaya dan kelestarian alam berkelanjutan.
            </p>
          </div>

          {/* Quick paths */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-200">PORTAL PPDB 2026</h5>
            <ul className="space-y-2 font-light text-xs">
              {['spmb-info', 'schedule', 'requirements', 'procedure'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => handleNavigate(tab as ActiveTab)}
                    className="hover:text-yellow-400 transition"
                  >
                    {MENU_ITEMS.find((m) => m.id === tab)?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads and details */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-200">LAYANAN MANDIRI</h5>
            <ul className="space-y-2 font-light text-xs">
              {['registration-status', 'profile'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => handleNavigate(tab as ActiveTab)}
                    className="hover:text-yellow-400 transition"
                  >
                    {MENU_ITEMS.find((m) => m.id === tab)?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sikka address contact */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-200">HUBUNGI SEKRETARIAT</h5>
            <div className="space-y-2.5 font-light text-xs">
              <p className="leading-relaxed text-slate-500">
                Jl. Trans Maumere - Larantuka, Kecamatan Waigete, Kabupaten Sikka, Nusa Tenggara Timur (NTT). CP: 0812-3456-7890
              </p>
              <div className="flex items-center gap-1.5 font-bold text-blue-400 hover:text-blue-300 transition">
                <Mail size={12} /> smpn2waigete@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Secondary credits bar */}
        <div className="bg-slate-950 text-slate-600 border-t border-slate-900/40 text-center py-5 text-[11px] font-mono select-none">
          <p>© 2026 SPMB SMP Negeri 2 Waigete. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
      </footer>
    </div>
  );
}
