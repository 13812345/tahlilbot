import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// فونت یکان‌باخ
const yekanBakh = localFont({
  src: [
    {
      path: '../../public/fonts/YekanBakhFaNum-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakhFaNum-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakhFaNum-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakhFaNum-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakhFaNum-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakhFaNum-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/YekanBakhFaNum-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-yekan',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "سامانه تحلیلبات",
  description: "سامانه جامع تحلیل و مدیریت هوشمند",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" data-theme="seraj">
      <body className={`${yekanBakh.variable} antialiased font-yekan`}>
        {children}
      </body>
    </html>
  );
}
