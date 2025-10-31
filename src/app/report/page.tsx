'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import { IconChartPie, IconTrendingUp, IconCalendar } from '@tabler/icons-react';

export default function Report() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <IconChartPie className="w-8 h-8 text-seraj-primary" />
          آمار و گزارشات
        </h1>
        <p className="text-gray-600 mt-2">
          مشاهده آمار و گزارش‌های تحلیلی سیستم
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Card hover className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">گزارش روزانه</p>
              <p className="text-2xl font-bold text-seraj-primary">۱۲۳</p>
            </div>
            <IconTrendingUp className="w-10 h-10 text-green-500" />
          </div>
        </Card>

        <Card hover className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">گزارش هفتگی</p>
              <p className="text-2xl font-bold text-seraj-primary">۸۵۶</p>
            </div>
            <IconCalendar className="w-10 h-10 text-blue-500" />
          </div>
        </Card>

        <Card hover className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">گزارش ماهانه</p>
              <p className="text-2xl font-bold text-seraj-primary">۳۴۵۰</p>
            </div>
            <IconChartPie className="w-10 h-10 text-purple-500" />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">نمودار تحلیلی</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-500">نمودار در نسخه نهایی نمایش داده می‌شود</p>
        </div>
      </Card>
    </DashboardLayout>
  );
}
