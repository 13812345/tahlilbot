'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import { IconSettings, IconUser, IconBell, IconShield, IconPalette } from '@tabler/icons-react';

export default function Setting() {
  return (
    <DashboardLayout>
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 flex items-center gap-2 md:gap-3">
          <IconSettings className="w-6 h-6 md:w-8 md:h-8 text-seraj-primary" />
          تنظیمات
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          مدیریت تنظیمات کاربری و سیستم
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card hover className="p-4 md:p-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
              <IconUser className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-sm md:text-base text-gray-800">پروفایل کاربری</h3>
              <p className="text-xs md:text-sm text-gray-600 truncate">ویرایش اطلاعات شخصی</p>
            </div>
          </div>
        </Card>

        <Card hover className="p-4 md:p-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
              <IconBell className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-sm md:text-base text-gray-800">اعلان‌ها</h3>
              <p className="text-xs md:text-sm text-gray-600 truncate">مدیریت اعلان‌های سیستم</p>
            </div>
          </div>
        </Card>

        <Card hover className="p-4 md:p-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
              <IconShield className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-sm md:text-base text-gray-800">امنیت</h3>
              <p className="text-xs md:text-sm text-gray-600 truncate">تنظیمات امنیتی و رمز عبور</p>
            </div>
          </div>
        </Card>

        <Card hover className="p-4 md:p-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
              <IconPalette className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-sm md:text-base text-gray-800">ظاهر</h3>
              <p className="text-xs md:text-sm text-gray-600 truncate">تنظیمات نمایش و رنگ‌بندی</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
