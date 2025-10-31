'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import StatCard from '@/components/ui/StatCard';
import StatusBadge from '@/components/ui/StatusBadge';
import {
  IconNews,
  IconClock,
  IconTags,
  IconUsers,
  IconAlertTriangle,
  IconFlame,
  IconCalendarEvent,
  IconBulb,
} from '@tabler/icons-react';
import { mockNews, mockStats, mockHadiths, securityCalendarText } from '@/lib/mockData';

export default function Dashboard() {
  const [currentHadith, setCurrentHadith] = useState(mockHadiths[0]);
  const [displayedCalendarText, setDisplayedCalendarText] = useState('');

  // تغییر حدیث روزانه
  useEffect(() => {
    const randomHadith = mockHadiths[Math.floor(Math.random() * mockHadiths.length)];
    setCurrentHadith(randomHadith);
  }, []);

  // افکت تایپ برای تقویم امنیتی
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < securityCalendarText.length) {
        setDisplayedCalendarText(securityCalendarText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      {/* هدر صفحه */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span>🖥️</span>
          داشبورد سامانه تحلیلبات
        </h1>
        <p className="text-gray-600 mt-2">
          خوش آمدید به سامانه تحلیل و مدیریت هوشمند
        </p>
      </div>

      {/* نوار حدیث روز */}
      <Card className="mb-6 p-4 bg-gradient-to-l from-seraj-primary to-seraj-secondary text-white">
        <div className="flex items-start gap-3">
          <IconBulb className="w-6 h-6 shrink-0 mt-1" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold mb-1">💡 حدیث روز:</p>
            <p className="text-sm leading-relaxed opacity-95">{currentHadith.text}</p>
            {currentHadith.source && (
              <p className="text-xs mt-2 opacity-75">منبع: {currentHadith.source}</p>
            )}
          </div>
        </div>
      </Card>

      {/* Grid آمارها و تقویم */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* تقویم امنیتی هفته */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-3">
            <IconCalendarEvent className="w-6 h-6 text-seraj-primary" />
            <h3 className="text-xl font-bold text-gray-800">تقویم امنیتی هفته</h3>
          </div>
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm">
            {displayedCalendarText}
            <span className="animate-pulse">|</span>
          </div>
        </Card>

        {/* کارت آمار کل اخبار */}
        <StatCard
          icon={<IconNews className="w-12 h-12" />}
          number={mockStats.totalNews.toLocaleString('fa-IR')}
          label="کل اخبار تحلیل شده"
        />
      </div>

      {/* Grid کارت‌های آمار */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          icon={<IconClock className="w-10 h-10" />}
          number={mockStats.last24Hours.toLocaleString('fa-IR')}
          label="اخبار ۲۴ ساعت گذشته"
        />
        
        <StatCard
          icon={<IconTags className="w-10 h-10" />}
          number={mockStats.categories.toLocaleString('fa-IR')}
          label="دسته‌بندی موضوعی"
        />

        <StatCard
          icon={<IconUsers className="w-10 h-10" />}
          number={mockStats.totalMembers.toLocaleString('fa-IR')}
          label="تعداد اعضا شبکه"
          subNumber={mockStats.activeMembers.toLocaleString('fa-IR')}
          subLabel="اعضا فعال شبکه"
        />

        <Card hover variant="glass" className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-3">
              <div>
                <div className="text-lg font-bold text-seraj-primary">
                  {mockStats.yearTopic}
                </div>
                <div className="text-xs text-gray-600">موضوع سال</div>
              </div>
              <div>
                <div className="text-lg font-bold text-seraj-secondary">
                  {mockStats.monthTopic}
                </div>
                <div className="text-xs text-gray-600">موضوع ماه</div>
              </div>
              <div>
                <div className="text-lg font-bold text-seraj-accent">
                  {mockStats.weekTopic}
                </div>
                <div className="text-xs text-gray-600">موضوع هفته</div>
              </div>
            </div>
            <IconAlertTriangle className="w-10 h-10 text-orange-500 opacity-80" />
          </div>
        </Card>
      </div>

      {/* جدول مهم‌ترین اخبار */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-3">
          <IconFlame className="w-6 h-6 text-red-500" />
          <h3 className="text-xl font-bold text-gray-800">مهم‌ترین اخبار اخیر</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  عنوان خبر
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  تولید کننده
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  موضوع
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  بلوک
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  زمان وقوع
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockNews.map((news) => (
                <tr
                  key={news.id}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {news.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {news.producer}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge type={news.category}>
                      {news.category === 'economic' && 'اقتصادی'}
                      {news.category === 'social' && 'اجتماعی'}
                      {news.category === 'political' && 'سیاسی'}
                      {news.category === 'cyber' && 'سایبری'}
                      {news.category === 'sport' && 'ورزشی'}
                    </StatusBadge>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {news.block}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {news.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardLayout>
  );
}
