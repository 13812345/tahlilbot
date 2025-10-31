'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import { 
  IconHandStop, 
  IconList, 
  IconMapPin, 
  IconFilter,
  IconClock,
  IconAlertTriangle,
  IconEye,
  IconCalendar,
  IconUser
} from '@tabler/icons-react';

export default function SuspectPage() {
  const [filterMode, setFilterMode] = useState<'list' | 'map'>('list');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [showResults, setShowResults] = useState(false);

  const topics = [
    { value: '', label: 'همه موضوعات' },
    { value: 'سیاسی', label: 'سیاسی' },
    { value: 'اقتصادی', label: 'اقتصادی' },
    { value: 'امنیت', label: 'امنیت' },
    { value: 'اجتماعی', label: 'اجتماعی' },
    { value: 'فرهنگی', label: 'فرهنگی' },
    { value: 'سایبری', label: 'سایبری' }
  ];

  const newsResults = [
    {
      id: 1,
      title: 'کشف شبکه سایبری جدید در حوزه امنیتی',
      category: 'امنیت',
      date: '//',
      time: ':',
      priority: 'high',
      views: 245,
      source: 'خبرگزاری مهر'
    },
    {
      id: 2,
      title: 'تحولات اقتصادی جدید در بازار ارز',
      category: 'اقتصادی',
      date: '//',
      time: ':',
      priority: 'medium',
      views: 189,
      source: 'ایسنا'
    },
    {
      id: 3,
      title: 'بررسی وضعیت سیاسی منطقه در هفته گذشته',
      category: 'سیاسی',
      date: '//',
      time: ':',
      priority: 'medium',
      views: 312,
      source: 'ایرنا'
    },
    {
      id: 4,
      title: 'رویدادهای فرهنگی و هنری هفته جاری',
      category: 'فرهنگی',
      date: '//',
      time: ':',
      priority: 'low',
      views: 156,
      source: 'فارس'
    },
    {
      id: 5,
      title: 'گزارش تحلیلی از تغییرات اجتماعی اخیر',
      category: 'اجتماعی',
      date: '//',
      time: ':',
      priority: 'high',
      views: 428,
      source: 'تسنیم'
    }
  ];

  const handleApplyFilters = () => {
    setShowResults(true);
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <div className="bg-gradient-to-r from-seraj-primary via-blue-600 to-seraj-secondary rounded-2xl p-5 md:p-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
              <IconHandStop className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl md:text-2xl font-bold text-white mb-1">سوژهیاب هوشمند</h1>
              <p className="text-white/90 text-xs md:text-sm">شناسایی و تحلیل سوژههای خبری بر اساس موضوعات</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for View Mode */}
      <div className="mb-6">
        <div className="inline-flex bg-white rounded-2xl p-1 shadow-lg border-2 border-gray-200">
          <button
            onClick={() => setFilterMode('list')}
            className={'relative px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ' + (filterMode === 'list' ? 'bg-gradient-to-r from-seraj-primary to-seraj-secondary text-white shadow-lg' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50')}
          >
            <div className="flex items-center gap-2">
              <IconList className="w-5 h-5" />
              <span>همه مناطق</span>
            </div>
          </button>
          <button
            onClick={() => setFilterMode('map')}
            className={'relative px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ' + (filterMode === 'map' ? 'bg-gradient-to-r from-seraj-primary to-seraj-secondary text-white shadow-lg' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50')}
          >
            <div className="flex items-center gap-2">
              <IconMapPin className="w-5 h-5" />
              <span>انتخاب از نقشه</span>
            </div>
          </button>
        </div>
      </div>

      {/* Filters Card */}
      <Card className="p-4 md:p-6 mb-6 border-2 border-gray-200">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-gray-200">
          <div className="p-2 bg-gradient-to-br from-seraj-primary to-seraj-secondary rounded-lg flex-shrink-0">
            <IconFilter className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <h3 className="text-base md:text-lg font-bold text-gray-800">فیلترهای جستجو</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Select Topic */}
          <div className="lg:col-span-9">
            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
              نوع سوژه / موضوع:
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-seraj-primary focus:border-seraj-primary transition-all text-sm md:text-base bg-white hover:border-seraj-primary/50"
            >
              {topics.map((topic) => (
                <option key={topic.value} value={topic.value}>
                  {topic.label}
                </option>
              ))}
            </select>
          </div>

          {/* Apply Button */}
          <div className="lg:col-span-3 flex items-end">
            <button
              onClick={handleApplyFilters}
              className="w-full bg-gradient-to-r from-seraj-primary to-seraj-secondary text-white py-3 px-6 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              جستجو
            </button>
          </div>
        </div>

        {/* Map Display Area */}
        {filterMode === 'map' && (
          <div className="mt-5 pt-5 border-t-2 border-gray-200">
            <div className="h-64 md:h-80 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 rounded-xl flex items-center justify-center border-2 border-dashed border-seraj-primary/30">
              <div className="text-center p-4">
                <IconMapPin className="w-16 h-16 md:w-20 md:h-20 text-seraj-primary/60 mx-auto mb-3" />
                <p className="text-gray-700 font-bold text-base md:text-lg mb-2">نقشه تعاملی</p>
                <p className="text-xs md:text-sm text-gray-500">برای انتخاب محدوده جغرافیایی، روی نقشه کلیک کنید</p>
                <p className="text-xs text-gray-400 mt-2">(در نسخه نهایی فعال می‌شود)</p>
              </div>
            </div>
          </div>
        )}
      </Card>

      {showResults ? (
        <div className="space-y-4 md:space-y-6">
          <Card className="p-4 md:p-5 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border-2 border-seraj-primary/30 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 md:p-3 bg-gradient-to-br from-seraj-primary to-seraj-secondary rounded-xl shadow-lg flex-shrink-0">
                  <IconAlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base md:text-lg">نتایج سوژهیابی</h3>
                  <p className="text-xs md:text-sm text-gray-600">{newsResults.length} مورد یافت شد</p>
                </div>
              </div>
              <span className="text-xs text-gray-600 bg-white px-3 py-2 rounded-full shadow-sm font-medium">
                {selectedTopic ? 'فیلتر: ' + selectedTopic : 'همه موضوعات'}
              </span>
            </div>
          </Card>

          {newsResults.map((news) => (
            <Card key={news.id} className="p-4 md:p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] border-2 border-gray-200 hover:border-seraj-primary">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <span className={'inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-bold shadow-md ' + (news.priority === 'high' ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' : news.priority === 'medium' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : 'bg-gradient-to-r from-green-500 to-green-600 text-white')}>
                      <IconAlertTriangle className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      {news.priority === 'high' ? 'اولویت بالا' : news.priority === 'medium' ? 'اولویت متوسط' : 'اولویت پایین'}
                    </span>
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-seraj-primary/10 to-seraj-secondary/10 text-seraj-primary border-2 border-seraj-primary/30 rounded-full text-xs font-bold">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4 hover:text-seraj-primary cursor-pointer transition-colors leading-tight">
                    {news.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <IconCalendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-seraj-primary flex-shrink-0" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <IconClock className="w-3.5 h-3.5 md:w-4 md:h-4 text-seraj-primary flex-shrink-0" />
                      <span>{news.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <IconEye className="w-3.5 h-3.5 md:w-4 md:h-4 text-seraj-primary flex-shrink-0" />
                      <span>{news.views}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <IconUser className="w-3.5 h-3.5 md:w-4 md:h-4 text-seraj-primary flex-shrink-0" />
                      <span className="truncate">{news.source}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full sm:w-auto sm:flex-shrink-0 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-seraj-primary to-seraj-secondary text-white rounded-xl hover:shadow-xl transition-all hover:scale-105 active:scale-95 text-xs md:text-sm font-bold whitespace-nowrap">
                  مشاهده جزئیات
                </button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-8 md:p-16 text-center border-2 border-dashed border-gray-300">
          <div className="max-w-md mx-auto">
            <div className="mb-6 inline-flex p-4 md:p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full">
              <IconHandStop className="w-16 h-16 md:w-20 md:h-20 text-gray-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">آماده برای شروع سوژهیابی</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">لطفا فیلترهای مورد نظر خود را انتخاب کرده و دکمه اعمال فیلترها را بزنید تا نتایج نمایش داده شود.</p>
          </div>
        </Card>
      )}
    </DashboardLayout>
  );
}
