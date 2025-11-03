'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconDashboard,
  IconRobot,
  IconNews,
  IconChartPie,
  IconHandStop,
  IconTools,
  IconMessage,
  IconTags,
  IconSettings,
  IconLogout,
  IconX,
} from '@tabler/icons-react';
import Image from 'next/image';

interface NavItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/', icon: IconDashboard, label: 'داشبورد' },
  { href: '/analysis', icon: IconRobot, label: 'تحلیل هوشمند' },
  { href: '/latest', icon: IconNews, label: 'اخبار اخیر' },
  { href: '/report', icon: IconChartPie, label: 'آمار و گزارشات' },
  { href: '/suspect', icon: IconHandStop, label: 'سوژه‌خبر' },
  { href: '/decision', icon: IconTools, label: 'تصمیمات و اصلاحات' },
  { href: '/chatbot', icon: IconMessage, label: 'رُبوگپ' },
  { href: '/category', icon: IconTags, label: 'پنل مدیریتی' },
  { href: '/setting', icon: IconSettings, label: 'تنظیمات' },
];

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  };

  const handleLinkClick = () => {
    if (onClose && typeof window !== 'undefined' && window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <aside className="w-80 bg-white border-l border-gray-200 h-screen overflow-y-auto  transition-all duration-300 flex flex-col">
      {/* دکمه بستن برای موبایل */}
      {onClose && (
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 left-4 z-10 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="بستن منو"
        >
          <IconX className="w-6 h-6" />
        </button>
      )}
      
      <div className="relative shrink-0 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 p-8 border-b border-gray-200">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNUE1RiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
        <Link href="/" className="relative flex flex-col items-center gap-4 group" onClick={handleLinkClick}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-seraj-accent/30 via-seraj-primary/40 to-seraj-secondary/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100"></div>
            <div><Image src="/images/esfahan.png" width={124} height={124} className="w-24 h-24 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" alt="لوگو اصفهان" /></div>
          </div>
        </Link>
        <div className="relative mt-5 text-center">
          <h2 className="text-gray-800 font-bold text-2xl tracking-wider mb-2 bg-gradient-to-l from-seraj-primary via-seraj-secondary to-seraj-accent bg-clip-text text-transparent">سامانه تحلیلبات</h2>
          <p className="text-gray-600 text-sm font-medium tracking-wider">سیستم تحلیل و مدیریت هوشمند</p>
        </div>
      </div>
      <nav className="flex-1 p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent bg-gradient-to-b from-white via-gray-50/50 to-white">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link href={item.href} onClick={handleLinkClick} className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 relative overflow-hidden ${isActive ? 'bg-gradient-to-l from-seraj-primary via-seraj-secondary to-seraj-accent text-white font-bold shadow-xl shadow-seraj-primary/30 scale-[1.02]' : 'text-gray-600 hover:bg-seraj-primary/5 hover:text-seraj-primary hover:translate-x-[-8px] border border-transparent hover:border-seraj-primary/20 hover:shadow-md'}`}>
                  {isActive && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-14 bg-white rounded-l-full shadow-lg"></div>}
                  <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white/20 backdrop-blur-sm text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-600 border border-gray-200 group-hover:bg-seraj-primary/10 group-hover:text-seraj-primary group-hover:scale-110 group-hover:border-seraj-primary/30 group-hover:shadow-lg'}`}>
                    <Icon className={`w-7 h-7 shrink-0 transition-transform duration-300 ${isActive ? '' : 'group-hover:scale-110 group-hover:rotate-12'}`} />
                  </div>
                  <span className={`text-base flex-1 whitespace-nowrap tracking-wide ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                  {isActive && <div className="flex items-center gap-1.5 mr-auto"><div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-lg"></div><div className="w-2 h-2 rounded-full bg-white/80 animate-pulse delay-75"></div><div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse delay-150"></div></div>}
                  {!isActive && <div className="mr-auto opacity-0 group-hover:opacity-100 transition-all duration-300"><div className="w-2 h-2 rounded-full bg-seraj-accent shadow-lg shadow-seraj-accent/50"></div></div>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="shrink-0 w-full p-3 border-t border-gray-200 bg-gradient-to-t from-gray-50/50 to-white">
        <button onClick={handleLogout} className="group flex items-center gap-4 px-5 py-3 rounded-2xl transition-all duration-300 w-full bg-gradient-to-r from-white-500 via-white-600 to-white-700 text-black hover:text-white hover:from-red-600 hover:via-red-700 hover:to-red-800 hover:shadow-2xl hover:shadow-red-500/40 hover:scale-[1.03] active:scale-[0.97]">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"><IconLogout className="w-7 h-7 shrink-0 transition-transform duration-300" /></div>
          <span className="font-bold text-base whitespace-nowrap flex-1 tracking-wide">خروج از سامانه</span>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300"><div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-lg"></div><div className="w-2 h-2 rounded-full bg-white/80 animate-pulse delay-75"></div></div></div>
        </button>
      </div>
    </aside>
  );
}
