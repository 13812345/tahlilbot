'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import { IconSettings, IconUser, IconBell, IconShield, IconPalette } from '@tabler/icons-react';

export default function Setting() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <IconSettings className="w-8 h-8 text-seraj-primary" />
          تنظیمات
        </h1>
        <p className="text-gray-600 mt-2">
          مدیریت تنظیمات کاربری و سیستم
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card hover className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <IconUser className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">پروفایل کاربری</h3>
              <p className="text-sm text-gray-600">ویرایش اطلاعات شخصی</p>
            </div>
          </div>
        </Card>

        <Card hover className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <IconBell className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">اعلان‌ها</h3>
              <p className="text-sm text-gray-600">مدیریت اعلان‌های سیستم</p>
            </div>
          </div>
        </Card>

        <Card hover className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <IconShield className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">امنیت</h3>
              <p className="text-sm text-gray-600">تنظیمات امنیتی و رمز عبور</p>
            </div>
          </div>
        </Card>

        <Card hover className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <IconPalette className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">ظاهر</h3>
              <p className="text-sm text-gray-600">تنظیمات نمایش و رنگ‌بندی</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
