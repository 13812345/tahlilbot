'use client';

import { IconMenu2, IconSearch, IconCalendar, IconBell, IconMail } from '@tabler/icons-react';

interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-6 sticky top-0 z-40 shadow-sm">
      {/* دکمه منو برای موبایل */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 rounded-lg hover:bg-seraj-primary/10 transition-all duration-300 hover:scale-110"
        aria-label="منو"
      >
        <IconMenu2 className="w-6 h-6 text-seraj-primary" />
      </button>

      {/* سرچ بار */}
      <div className="flex-1 max-w-md mr-2 md:mr-4">
        <div className="relative group">
          <IconSearch className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-seraj-primary transition-colors" />
          <input
            type="text"
            placeholder="جستجو در اخبار..."
            className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-seraj-primary/50 focus:border-seraj-primary transition-all text-sm bg-gray-50 focus:bg-white"
          />
        </div>
      </div>

      

      {/* آیکون‌ها و پروفایل کاربر */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* آیکون‌های نوتیفیکیشن */}
        <button className="p-2 rounded-lg hover:bg-seraj-primary/10 transition-all duration-300 hover:scale-110 relative hidden sm:block group">
          <IconCalendar className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-seraj-primary transition-colors" />
        </button>
        
        <button className="p-2 rounded-lg hover:bg-seraj-primary/10 transition-all duration-300 hover:scale-110 relative group">
          <IconBell className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-seraj-primary transition-colors" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse ring-2 ring-white"></span>
        </button>
        
        <button className="p-2 rounded-lg hover:bg-seraj-primary/10 transition-all duration-300 hover:scale-110 relative hidden sm:block group">
          <IconMail className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-seraj-primary transition-colors" />
        </button>

        {/* پروفایل کاربر */}
        <div className="flex items-center gap-2 pr-2 md:pr-4 border-r border-gray-300 group cursor-pointer">
          <span className="text-xs md:text-sm font-medium text-gray-700 hidden sm:block group-hover:text-seraj-primary transition-colors">
            ۵۱۷۰۶۰۳
          </span>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-seraj-primary to-seraj-accent flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg group-hover:scale-110 transition-transform duration-300 ring-2 ring-seraj-primary/20">
            ۶۰۳
          </div>
        </div>
      </div>
    </header>
  );
}
