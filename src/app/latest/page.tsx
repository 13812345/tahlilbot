'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import StatusBadge from '@/components/ui/StatusBadge';
import { IconNews, IconSearch, IconFilter, IconEye } from '@tabler/icons-react';
import { mockNews } from '@/lib/mockData';
import { useState } from 'react';

export default function Latest() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredNews = mockNews.filter(news => {
    const matchesSearch = news.title.includes(searchQuery) || news.producer.includes(searchQuery);
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <IconNews className="w-8 h-8 text-seraj-primary" />
          اخبار اخیر
        </h1>
        <p className="text-gray-600 mt-2">
          مشاهده و مدیریت آخرین اخبار دریافتی
        </p>
      </div>

      {/* فیلترها */}
      <Card className="p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* جستجو */}
          <div className="flex-1 relative">
            <IconSearch className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در اخبار..."
              className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary text-sm"
            />
          </div>

          {/* فیلتر دسته‌بندی */}
          <div className="flex items-center gap-2">
            <IconFilter className="w-5 h-5 text-gray-600 shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary text-sm"
            >
              <option value="all">همه دسته‌ها</option>
              <option value="political">سیاسی</option>
              <option value="economic">اقتصادی</option>
              <option value="social">اجتماعی</option>
              <option value="cyber">سایبری</option>
              <option value="sport">ورزشی</option>
            </select>
          </div>
        </div>
      </Card>

      {/* لیست اخبار */}
      <div className="grid grid-cols-1 gap-4">
        {filteredNews.map((news) => (
          <Card key={news.id} hover className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <StatusBadge type={news.category}>
                    {news.category === 'economic' && 'اقتصادی'}
                    {news.category === 'social' && 'اجتماعی'}
                    {news.category === 'political' && 'سیاسی'}
                    {news.category === 'cyber' && 'سایبری'}
                    {news.category === 'sport' && 'ورزشی'}
                  </StatusBadge>
                  <span className="text-sm text-gray-500">{news.time}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {news.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>تولیدکننده: {news.producer}</span>
                  <span>•</span>
                  <span>بلوک: {news.block}</span>
                </div>
              </div>

              <button className="shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <IconEye className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-gray-500">خبری یافت نشد</p>
        </Card>
      )}
    </DashboardLayout>
  );
}
