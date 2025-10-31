'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import { 
  IconRobot, 
  IconUser, 
  IconSend, 
  IconFileTypePdf, 
  IconFileTypeXls, 
  IconFileTypeDoc, 
  IconDownload, 
  IconSearch, 
  IconMessageDots, 
  IconFolderOpen, 
  IconPlus 
} from '@tabler/icons-react';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'سلام! من تحلیلبات دستیار هوشمند شما در سامانه هستم. چطور میتوانم امروز به شما کمک کنم',
      sender: 'bot',
      time: '14:35'
    },
    {
      id: 2,
      text: 'سلام لطفا گزارش مناطق 4 گانه اصفهان را بهم بده.',
      sender: 'user',
      time: '14:36'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [fileSearchValue, setFileSearchValue] = useState('');

  const files = [
    { id: 1, name: 'پیشنهادات اصلاح شبکه', type: 'pdf', icon: IconFileTypePdf, recommended: true, color: 'text-red-600' },
    { id: 2, name: 'گزارش وضعیت کلی شبکه', type: 'excel', icon: IconFileTypeXls, recommended: false, color: 'text-green-600' },
    { id: 3, name: 'راهنمای کاربری سامانه تحلیلبات', type: 'word', icon: IconFileTypeDoc, recommended: false, color: 'text-blue-600' }
  ];

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user' as const,
        time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: 'در حال پردازش درخواست شما هستم... لطفا چند لحظه صبر کنید.',
          sender: 'bot' as const,
          time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-2">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg">
            <IconRobot className="w-8 h-8 text-white" />
          </div>
           دستیار هوشمند تحلیلبات
        </h1>
        <p className="text-gray-600">
          گفتگو با هوش مصنوعی و دسترسی به اسناد و فایلهای سامانه
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6 h-[calc(100vh-200px)]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <IconMessageDots className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800"> گفتگو با هوش مصنوعی تحلیلبات</h3>
            </div>

            <div className="flex flex-col h-[calc(100%-100px)]">
              <div className="flex-1 overflow-y-auto mb-6 space-y-4 px-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={'flex gap-3 ' + (message.sender === 'user' ? 'flex-row-reverse' : 'flex-row') + ' items-start'}
                  >
                    <div className={'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ' + (message.sender === 'user' ? 'bg-gradient-to-br from-seraj-primary to-seraj-secondary' : 'bg-gradient-to-br from-purple-500 to-indigo-600')}>
                      {message.sender === 'user' ? (
                        <IconUser className="w-5 h-5 text-white" />
                      ) : (
                        <IconRobot className="w-5 h-5 text-white" />
                      )}
                    </div>

                    <div className={'max-w-[75%] rounded-2xl px-5 py-3 shadow-md ' + (message.sender === 'user' ? 'bg-gradient-to-br from-seraj-primary to-seraj-secondary text-white rounded-tr-sm' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 border border-gray-200 rounded-tl-sm')}>
                      <p className="mb-2 leading-relaxed">{message.text}</p>
                      <span className={'text-xs ' + (message.sender === 'user' ? 'text-white/80' : 'text-gray-500')}>
                        {message.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 items-center bg-gray-50 p-4 rounded-2xl border border-gray-200">
                <button
                  onClick={handleSend}
                  className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <IconSend className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="پیام خود را اینجا بنویسید..."
                  className="flex-1 px-5 py-3 border-0 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 h-[calc(100vh-200px)]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <IconFolderOpen className="w-6 h-6 text-seraj-primary" />
              <h3 className="text-xl font-bold text-gray-800"> خدمات فایل و اسناد</h3>
            </div>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              با جستجو در این بخش میتوانید درخواست فایلهای خاصی را از سیستم داشته باشید یا اسناد پیشنهادی را دانلود کنید.
            </p>

            <div className="relative mb-6">
              <input
                type="text"
                value={fileSearchValue}
                onChange={(e) => setFileSearchValue(e.target.value)}
                placeholder="جستجوی عنوان فایل یا سند..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-seraj-primary transition-all"
              />
              <button className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-seraj-primary transition-colors">
                <IconSearch className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              {files.map((file) => {
                const FileIcon = file.icon;
                return (
                  <div
                    key={file.id}
                    className={'group relative overflow-hidden rounded-xl p-4 border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ' + (file.recommended ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300' : 'bg-white border-gray-200 hover:border-seraj-primary')}
                  >
                    {file.recommended && (
                      <div className="absolute top-0 left-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-3 py-1 rounded-br-lg font-bold">
                        پیشنهادی
                      </div>
                    )}
                    
                    <div className="flex items-center gap-3">
                      <FileIcon className={'w-8 h-8 ' + file.color + ' flex-shrink-0'} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-800 truncate mb-1">{file.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 uppercase">{file.type}</span>
                        </div>
                      </div>
                      <button className="flex-shrink-0 p-2 bg-gradient-to-r from-seraj-primary to-seraj-secondary text-white rounded-lg hover:shadow-md transition-all group-hover:scale-110">
                        <IconDownload className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="w-full bg-gradient-to-r from-seraj-primary to-seraj-secondary text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <IconPlus className="w-5 h-5" />
              ثبت درخواست فایل جدید
            </button>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
