'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import { 
  IconChartLine, 
  IconFilter,
  IconTrendingUp,
  IconChartPie,
  IconCloud,
  IconTable
} from '@tabler/icons-react';

export default function Analysis() {
  const [filters, setFilters] = useState({
    dateRange: 'آخرین 30 روز',
    subject: 'فرهنگی',
    target: 'همه منابع',
    subTopic: 'همه منابع',
    reporter: 'منابع',
    block: '1',
    city: 'منطقه1'
  });

  const kpiData = [
    { label: 'رشد ماهانه', value: '۴۵%', color: 'from-blue-500 to-blue-600' },
    { label: 'تعداد کل ورودی', value: '۱۲,۰۰۰', color: 'from-green-500 to-green-600' },
    { label: 'دقت پیش‌بینی', value: '۹۲.۵%', color: 'from-purple-500 to-purple-600' }
  ];

  const subjects = [
    'فرهنگی', 'سایبری', 'امنیت', 'مذهبی', 'خارجی', 
    'اجتماعی', 'داخلی', 'علمی فناوری', 'اقتصادی', 'سیاسی'
  ];

  const targets = ['همه منابع', 'آموزش‌ و پرورش', 'آموزش عالی'];

  const reporters = ['منابع', 'خبرنگار رسمی', 'شهروند خبرنگار', 'تیم تدوین', 'پرسنل'];

  const cities = [
    'منطقه1', 'مطقه8', 'مطقه6', 'منطقه3', 'خمینی‌شهر', 'کاشان', 
    'شاهین‌شهر', 'فلاورجان', 'فریدن', 'درچه', 'آران و بیدگل', 
    'نجف‌آباد', 'لنجان', 'اردستان', 'نائین', 'گلپایگان', 
    'خوانسار', 'سمیرم', 'تیران و کرون', 'فریدونشهر'
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-2">
          <div className="p-3 bg-gradient-to-br from-seraj-primary to-seraj-secondary rounded-2xl shadow-lg">
            <IconChartLine className="w-8 h-8 text-white" />
          </div>
          📈 تحلیل هوشمند
        </h1>
        <p className="text-gray-600">
          تحلیل داده‌ها و روندهای کلان با استفاده از هوش مصنوعی
        </p>
      </div>

      {/* Filters Bar - بالای صفحه */}
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-2 mb-5 pb-4 border-b border-gray-200">
          <IconFilter className="w-6 h-6 text-seraj-primary" />
          <h3 className="text-lg font-bold text-gray-800">⚙️ فیلترها و تنظیمات</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* محدوده زمانی */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              محدوده زمانی:
            </label>
            <input
              type="text"
              value={filters.dateRange}
              onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary focus:border-transparent transition-all"
            />
          </div>

          {/* موضوع */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              موضوع:
            </label>
            <select
              value={filters.subject}
              onChange={(e) => setFilters({...filters, subject: e.target.value})}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary focus:border-transparent transition-all bg-white"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          {/* اهداف */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              اهداف:
            </label>
            <select
              value={filters.target}
              onChange={(e) => setFilters({...filters, target: e.target.value})}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary focus:border-transparent transition-all bg-white"
            >
              {targets.map(target => (
                <option key={target} value={target}>{target}</option>
              ))}
            </select>
          </div>

          {/* ریز موضوعات */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ریز موضوعات:
            </label>
            <select
              value={filters.subTopic}
              onChange={(e) => setFilters({...filters, subTopic: e.target.value})}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary focus:border-transparent transition-all bg-white"
            >
              {targets.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>

          {/* گزارش دهنده */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              گزارش دهنده:
            </label>
            <select
              value={filters.reporter}
              onChange={(e) => setFilters({...filters, reporter: e.target.value})}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary focus:border-transparent transition-all bg-white"
            >
              {reporters.map(reporter => (
                <option key={reporter} value={reporter}>{reporter}</option>
              ))}
            </select>
          </div>

          {/* بلوک */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              بلوک:
            </label>
            <select
              value={filters.block}
              onChange={(e) => setFilters({...filters, block: e.target.value})}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary focus:border-transparent transition-all bg-white"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num.toString()}>{num}</option>
              ))}
            </select>
          </div>

          {/* شهرستان */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              شهرستان:
            </label>
            <select
              value={filters.city}
              onChange={(e) => setFilters({...filters, city: e.target.value})}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary focus:border-transparent transition-all bg-white"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* دکمه اعمال */}
          <div className="flex items-end">
            <button className="w-full bg-gradient-to-r from-seraj-primary to-seraj-secondary text-white py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
              اعمال فیلترها
            </button>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <div className="space-y-6">
          {/* نمودار بزرگ */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <IconTrendingUp className="w-6 h-6 text-seraj-primary" />
              <h3 className="text-xl font-bold text-gray-800">نمودار تحلیل روند کلان</h3>
            </div>
            <div className="h-[350px] bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <IconChartLine className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">نمودار خطی تعاملی (Chart.js)</p>
                <p className="text-sm text-gray-400 mt-2">در نسخه نهایی نمایش داده می‌شود</p>
              </div>
            </div>
          </Card>

          {/* نمودارهای کوچک */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <IconChartPie className="w-6 h-6 text-seraj-secondary" />
                <h3 className="text-lg font-bold text-gray-800">تحلیل جغرافیایی</h3>
              </div>
              <div className="h-[200px] bg-gradient-to-br from-green-50 to-teal-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <IconChartPie className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">نمودار دایره‌ای</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <IconCloud className="w-6 h-6 text-seraj-accent" />
                <h3 className="text-lg font-bold text-gray-800">ابر کلیدواژه‌ها</h3>
              </div>
              <div className="h-[200px] bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <IconCloud className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">نمودار میله‌ای</p>
                </div>
              </div>
            </Card>
          </div>

          {/* KPI و جدول */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <IconTable className="w-6 h-6 text-seraj-primary" />
              <h3 className="text-xl font-bold text-gray-800">📈 خلاصه شاخص‌های کلیدی (KPI)</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {kpiData.map((kpi, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${kpi.color}`}></div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-gray-800 mb-2">{kpi.value}</p>
                    <p className="text-sm text-gray-600 font-medium">{kpi.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <IconTable className="w-5 h-5 text-seraj-secondary" />
              جدول جزئیات تحلیل
            </h3>
            <div className="h-[250px] bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <IconTable className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">جدول داده‌ها و جزئیات</p>
                <p className="text-sm text-gray-400 mt-2">در نسخه نهایی با داده‌های واقعی نمایش داده می‌شود</p>
              </div>
            </div>
          </Card>
        </div>
      </DashboardLayout>
    );
  }
