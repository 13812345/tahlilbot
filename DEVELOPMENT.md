# راهنمای توسعه‌دهنده - سامانه سراج

## 📌 نکات مهم برای توسعه

### 1. ساختار کامپوننت‌ها

همه کامپوننت‌ها در دو دسته اصلی قرار دارند:
- `components/layout/` - کامپوننت‌های مربوط به Layout (Sidebar, Header, DashboardLayout)
- `components/ui/` - کامپوننت‌های قابل استفاده مجدد (Card, StatCard, StatusBadge)

### 2. نحوه ایجاد صفحه جدید

برای ایجاد صفحه جدید:

```bash
# ایجاد فولدر در app
mkdir src/app/page-name

# ایجاد فایل page.tsx
```

مثال ساده:
```typescript
'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';

export default function MyPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">عنوان صفحه</h1>
      <Card className="p-6">
        محتوای صفحه
      </Card>
    </DashboardLayout>
  );
}
```

### 3. استفاده از Mock Data

داده‌های تستی در `src/lib/mockData.ts` قرار دارند:

```typescript
import { mockNews, mockStats } from '@/lib/mockData';

// استفاده در کامپوننت
const news = mockNews;
```

### 4. اتصال به API واقعی

برای اتصال به Backend:

#### روش ۱: Route Handlers (توصیه می‌شود)

```typescript
// src/app/api/news/route.ts
export async function GET() {
  const res = await fetch('https://your-backend.com/api/news');
  const data = await res.json();
  return Response.json(data);
}
```

```typescript
// استفاده در کامپوننت
'use client';

const [news, setNews] = useState([]);

useEffect(() => {
  fetch('/api/news')
    .then(res => res.json())
    .then(data => setNews(data));
}, []);
```

#### روش ۲: Server Components

```typescript
// src/app/page.tsx
async function getData() {
  const res = await fetch('https://your-backend.com/api/news');
  return res.json();
}

export default async function Page() {
  const news = await getData();
  
  return <div>...</div>;
}
```

### 5. افزودن Type جدید

Types در `src/types/index.ts` قرار دارند:

```typescript
export interface MyNewType {
  id: string;
  name: string;
  // ...
}
```

### 6. استایل‌دهی

#### کلاس‌های Tailwind:
```typescript
<div className="bg-seraj-primary text-white p-4 rounded-lg">
  محتوا
</div>
```

#### رنگ‌های سیستم:
- `bg-seraj-primary` - #005A5F
- `bg-seraj-secondary` - #007B83
- `bg-seraj-accent` - #00AFB5
- `text-seraj-primary`
- `border-seraj-primary`

#### کلاس‌های سفارشی در globals.css:
- `.glass-card` - افکت شیشه مات
- `.animate-fade-in` - انیمیشن ورود

### 7. آیکون‌ها

از Tabler Icons استفاده می‌شود:

```typescript
import { IconUser, IconSettings } from '@tabler/icons-react';

<IconUser className="w-6 h-6 text-seraj-primary" />
```

لیست کامل آیکون‌ها: https://tabler.io/icons

### 8. فرم‌ها و Input

```typescript
<input
  type="text"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seraj-primary"
  placeholder="متن..."
/>
```

### 9. کارت‌ها

```typescript
import Card from '@/components/ui/Card';

// کارت ساده
<Card className="p-6">محتوا</Card>

// کارت با hover effect
<Card hover className="p-6">محتوا</Card>

// کارت شیشه‌ای
<Card variant="glass" className="p-6">محتوا</Card>
```

### 10. Loading و Error Handling

```typescript
'use client';

import { useState, useEffect } from 'react';

export default function MyPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا: {error.message}</div>;

  return <div>{/* محتوا */}</div>;
}
```

### 11. Responsive Design

```typescript
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-6
">
  {/* محتوا */}
</div>
```

Breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

### 12. Navigation

```typescript
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// استفاده از Link
<Link href="/page">لینک</Link>

// استفاده از router
const router = useRouter();
router.push('/page');
```

### 13. Environment Variables

فایل `.env.local` ایجاد کنید:

```
NEXT_PUBLIC_API_URL=https://your-api.com
API_SECRET_KEY=your-secret-key
```

استفاده:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### 14. Testing

برای افزودن تست:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

### 15. Build و Deploy

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

## 🔧 Troubleshooting

### مشکل: کامپوننت رندر نمی‌شود
- اطمینان حاصل کنید که `'use client'` در بالای فایل است (برای کامپوننت‌های تعاملی)

### مشکل: استایل‌ها اعمال نمی‌شوند
- Tailwind classes را چک کنید
- از DevTools مرورگر استفاده کنید

### مشکل: Error در Build
- `npm run build` را اجرا کرده و error را بخوانید
- Type errors را رفع کنید

## 📞 پشتیبانی

برای سوالات و مشکلات، با تیم توسعه تماس بگیرید.
