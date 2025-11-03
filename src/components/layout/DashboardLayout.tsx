"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // بستن سایدبار با تغییر سایز صفحه
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // بستن سایدبار با اسکرول در موبایل
  useEffect(() => {
    if (sidebarOpen) {
      const handleScroll = () => {
        if (window.innerWidth < 1024) {
          setSidebarOpen(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [sidebarOpen]);

  // جلوگیری از اسکرول body وقتی سایدبار باز است
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="max-h-screen overflow-y-auto bg-white/30 backdrop-blur-sm">
      {/* Overlay برای موبایل */}
      <div
        className={`
          fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300
          ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeSidebar}
      />

      <div className="grid grid-cols-8">
        {/* Sidebar */}
        <div className="col-span-2">
          <Sidebar onClose={closeSidebar} />
        </div>

        {/* Main Content */}
        <div className="col-span-6 h-full max-h-screen overflow-y-auto">
          <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
          <main className="p-3 sm:p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
