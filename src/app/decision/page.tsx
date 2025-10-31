'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import { 
  IconBulb, 
  IconAlertTriangle, 
  IconRobot, 
  IconNews,
  IconChartLine,
  IconTool,
  IconX
} from '@tabler/icons-react';

export default function DecisionPage() {
  const [urgentAlerts, setUrgentAlerts] = useState([
    {
      id: 1,
      text: 'مشکل شناسایی شد پیشنهاد: تلاش برای حفظ آب های زیر زمینی',
      type: 'danger'
    },
    {
      id: 2,
      text: 'پیشنهاد اصلاحی (داده): گزارش "سه ماهه مالی" ورودی امروز با گزارش ماه گذشته بیش از ۹۰٪ همپوشانی دارد. توصیه: بررسی احتمال ورود داده تکراری.',
      type: 'warning'
    }
  ]);

  const suggestions = [
    {
      id: 1,
      icon: IconNews,
      title: 'بهبود محتوای اخبار',
      priority: 'high',
      analysis: 'مقالات و اخبار مرتبط با "تحلیل اقتصادی" ۳۵٪ بیشتر از سایر موضوعات بازدید داشته‌اند.',
      recommendation: 'تمرکز بر تولید محتوای بیشتر در این حوزه برای افزایش تعامل کاربران.'
    },
    {
      id: 2,
      icon: IconChartLine,
      title: 'بهینه‌سازی گزارشات',
      priority: 'medium',
      analysis: '"گزارش کاربران فعال" پراستفاده‌ترین گزارش در ساعات ۸ تا ۱۰ صبح است.',
      recommendation: 'ایجاد یک ویجت دسترسی سریع در صفحه اصلی داشبورد برای این گزارش خاص.'
    },
    {
      id: 3,
      icon: IconTool,
      title: 'اصلاح فرآیند',
      priority: 'low',
      analysis: 'فرآیند "ثبت گزارش جدید" در گام ۳ (بارگذاری فایل) دارای نرخ پرش ۱۲٪ است.',
      recommendation: 'بررسی مجدد رابط کاربری گام ۳ و ساده‌سازی فرآیند آپلود فایل.'
    }
  ];

  const dismissAlert = (id: number) => {
    setUrgentAlerts(urgentAlerts.filter(alert => alert.id !== id));
  };

  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case 'high':
        return 'bg-gradient-to-r from-red-500 to-red-600 text-white';
      case 'medium':
        return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white';
      case 'low':
        return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getPriorityText = (priority: string) => {
    switch(priority) {
      case 'high': return 'اولویت بالا';
      case 'medium': return 'اولویت متوسط';
      case 'low': return 'اولویت پایین';
      default: return priority;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-seraj-primary via-blue-600 to-seraj-secondary rounded-2xl p-5 md:p-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
              <IconBulb className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl md:text-2xl font-bold text-white mb-1">
                پیشنهادات و اصلاحات هوشمند
              </h1>
              <p className="text-white/90 text-xs md:text-sm">
                تحلیل خودکار سامانه بر اساس آخرین داده‌های ورودی
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Urgent Actions Section */}
      <Card className="p-4 md:p-6 mb-6 border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="flex items-start gap-3 mb-5">
          <div className="p-2 md:p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg flex-shrink-0">
            <IconAlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">اقدامات فوری پیشنهادی</h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">مواردی که بر اساس تحلیل AI نیاز به بررسی آنی دارند</p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-r-4 border-amber-500 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <IconRobot className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 leading-relaxed flex-1">
              بررسی سریع شبکه جهت آموزش تخصصی و اصلاح دید گزارش دهنده ها نسبت به مسائل سازمان.
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-r-4 border-blue-500 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <IconRobot className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 leading-relaxed flex-1">
              کاهش بارندگی در اصفهان و آماده باش کامل جهت مقابله با تهدیدات خشکسالی.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {urgentAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`group relative overflow-hidden rounded-xl p-6 border-2 shadow-md hover:shadow-xl transition-all duration-300 ${
                alert.type === 'danger'
                  ? 'bg-gradient-to-r from-red-50 to-rose-50 border-red-300 hover:border-red-400'
                  : 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-300 hover:border-yellow-400'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-xl flex-shrink-0 shadow-md ${
                  alert.type === 'danger' ? 'bg-red-100' : 'bg-yellow-100'
                }`}>
                  <IconRobot className={`w-7 h-7 ${
                    alert.type === 'danger' ? 'text-red-600' : 'text-yellow-600'
                  }`} />
                </div>
                <p className="flex-1 text-gray-800 leading-relaxed font-medium pt-2">
                  {alert.text}
                </p>
                <button
                  onClick={() => dismissAlert(alert.id)}
                  className="flex-shrink-0 p-2 hover:bg-white/80 rounded-lg transition-all group-hover:scale-110"
                  title="نادیده گرفتن"
                >
                  <IconX className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Improvement Opportunities Section */}
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-6">
          <div className="p-2 md:p-3 bg-gradient-to-br from-seraj-primary to-seraj-secondary rounded-xl shadow-lg flex-shrink-0">
            <IconBulb className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">فرصت‌های بهبود و پیشنهادات</h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">تحلیل‌های هوش مصنوعی برای بهینه‌سازی عملکرد سامانه</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {suggestions.map((suggestion) => {
            const SuggestionIcon = suggestion.icon;
            return (
              <Card
                key={suggestion.id}
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-gray-200 hover:border-seraj-primary"
              >
                {/* Header */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-seraj-primary to-seraj-secondary rounded-xl shadow-lg">
                      <SuggestionIcon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`px-4 py-2 rounded-full text-xs font-bold shadow-md ${getPriorityBadge(suggestion.priority)}`}>
                      {getPriorityText(suggestion.priority)}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 leading-tight">{suggestion.title}</h4>
                </div>

                {/* Analysis */}
                <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
                  <p className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-2">
                    <span>📊</span>
                    <span>تحلیل AI:</span>
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {suggestion.analysis}
                  </p>
                </div>

                {/* Recommendation */}
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                  <p className="text-sm font-bold text-green-800 mb-2 flex items-center gap-2">
                    <span>✅</span>
                    <span>پیشنهاد:</span>
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {suggestion.recommendation}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
