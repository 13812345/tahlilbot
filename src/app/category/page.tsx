'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import { 
  IconChartLine, 
  IconNews,
  IconUsers,
  IconBook,
  IconCoin,
  IconSettings,
  IconArrowRight
} from '@tabler/icons-react';

export default function CategoryPage() {
  const categories = [
    {
      id: 1,
      icon: IconChartLine,
      title: 'تحلیل داده‌های هوشمند',
      description: 'دسترسی به ابزارهای تحلیل روند و گزارش‌های آماری پیشرفته.',
      count: '۴ ابزار',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      icon: IconNews,
      title: 'اخبار و اطلاعیه‌ها',
      description: 'آخرین رویدادهای سازمانی و اخبار مهم اقتصادی و سیاسی.',
      count: '۲۸ خبر جدید',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      id: 3,
      icon: IconUsers,
      title: 'مدیریت دسترسی‌ها',
      description: 'مشاهده و ویرایش پروفایل کاربران و تعریف سطوح دسترسی.',
      count: '۱۴ کاربر فعال',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50',
      borderColor: 'border-purple-200',
      iconBg: 'bg-gradient-to-br from-purple-500 to-violet-600'
    },
    {
      id: 4,
      icon: IconBook,
      title: 'اسناد و مستندات فنی',
      description: 'بایگانی راهنماها، آموزش‌ها و مستندات فنی سامانه سراج.',
      count: '۱۰۵ سند',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'from-orange-50 to-amber-50',
      borderColor: 'border-orange-200',
      iconBg: 'bg-gradient-to-br from-orange-500 to-amber-600'
    },
    {
      id: 5,
      icon: IconCoin,
      title: 'گزارشات مالی و بودجه',
      description: 'دسترسی به صورت‌های مالی، بودجه سالانه و تحلیل درآمد.',
      count: '۷ گزارش ماهانه',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-50 to-pink-50',
      borderColor: 'border-rose-200',
      iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600'
    },
    {
      id: 6,
      icon: IconSettings,
      title: 'تنظیمات و پیکربندی',
      description: 'تغییر پارامترهای اصلی سامانه و مدیریت پایگاه داده.',
      count: '۵ بخش تنظیمات',
      color: 'from-slate-500 to-gray-600',
      bgColor: 'from-slate-50 to-gray-50',
      borderColor: 'border-slate-200',
      iconBg: 'bg-gradient-to-br from-slate-500 to-gray-600'
    }
  ];

  return (
    <DashboardLayout>
      {/* Header Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-seraj-primary via-blue-600 to-seraj-secondary rounded-2xl p-5 md:p-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
              <IconChartLine className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl md:text-2xl font-bold text-white mb-1">
                دسته‌بندی‌های اصلی سامانه
              </h1>
              <p className="text-white/90 text-xs md:text-sm">
                برای مشاهده محتوا و ابزارهای مرتبط، روی دسته‌بندی مورد نظر کلیک کنید
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <Card
              key={category.id}
              className="group relative overflow-hidden border-2 border-gray-200 bg-white hover:shadow-2xl hover:border-seraj-primary transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br ${category.color} rounded-full blur-3xl`}></div>
              </div>

              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-5 ${category.iconBg} rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                    <CategoryIcon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-seraj-primary transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 min-h-[60px]">
                  {category.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100 group-hover:border-seraj-primary/30 transition-colors">
                  <span className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-bold shadow-md`}>
                    {category.count}
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-seraj-primary to-seraj-secondary text-white rounded-lg hover:shadow-lg transition-all hover:scale-105 font-medium text-sm">
                    <span>مشاهده</span>
                    <IconArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute -inset-full group-hover:inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000"></div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Quick Stats Section */}
      <div className="mt-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 md:p-3 bg-gradient-to-br from-seraj-primary to-seraj-secondary rounded-xl shadow-lg flex-shrink-0">
            <IconChartLine className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-800">آمار کلی سامانه</h2>
            <p className="text-gray-600 text-xs md:text-sm">نمای سریع از وضعیت فعلی سیستم</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-semibold mb-2">کل دسته‌بندی‌ها</p>
                <p className="text-4xl font-bold text-blue-800">{categories.length}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-seraj-primary to-blue-600 rounded-2xl shadow-lg">
                <IconChartLine className="w-10 h-10 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-semibold mb-2">اخبار جدید</p>
                <p className="text-4xl font-bold text-green-800">۲۸</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                <IconNews className="w-10 h-10 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-semibold mb-2">کاربران فعال</p>
                <p className="text-4xl font-bold text-purple-800">۱۴</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl shadow-lg">
                <IconUsers className="w-10 h-10 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-600 text-sm font-semibold mb-2">مستندات</p>
                <p className="text-4xl font-bold text-orange-800">۱۰۵</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl shadow-lg">
                <IconBook className="w-10 h-10 text-white" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
