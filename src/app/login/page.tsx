'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IconUser, IconLock } from '@tabler/icons-react';

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    // افکت لودینگ
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // در آینده با API واقعی متصل می‌شود
    router.push('/');
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-seraj-accent flex items-center justify-center z-50">
        <div className="animate-fade-in">
          <div className="text-6xl font-bold text-white animate-pulse">
            سامانه تحلیلبات
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* پس‌زمینه با افکت */}
      <div 
        className="fixed inset-0 bg-seraj-accent"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 10px, transparent 10px, transparent 20px)',
        }}
      />
      
      <div className="fixed inset-0 bg-black/15" />

      {/* فرم لاگین */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="glass-card w-full max-w-md p-8 animate-fade-in">
          {/* لوگو */}
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-seraj-primary mb-4">
              سامانه تحلیلبات
            </div>
            {/* <h2 className="text-2xl font-bold text-gray-800">
              ورود به سامانه
            </h2> */}
          </div>

          {/* فرم */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* نام کاربری */}
            <div className="relative">
              <IconUser className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="نام کاربری"
                required
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary focus:border-transparent bg-white/70 transition-all"
              />
            </div>

            {/* رمز عبور */}
            <div className="relative">
              <IconLock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="رمز عبور"
                required
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary focus:border-transparent bg-white/70 transition-all"
              />
            </div>

            {/* گزینه‌ها */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                <input type="checkbox" className="rounded border-gray-300 text-seraj-primary focus:ring-seraj-primary" />
                <span>مرا به خاطر بسپار</span>
              </label>
              <a href="#" className="text-seraj-primary hover:text-seraj-secondary font-medium">
                فراموشی رمز؟
              </a>
            </div>

            {/* دکمه ورود */}
            <button
              type="submit"
              className="w-full bg-seraj-primary text-white py-3 rounded-lg font-bold text-lg hover:bg-seraj-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
