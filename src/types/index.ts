export interface NewsItem {
  id: string;
  title: string;
  producer: string;
  category: 'political' | 'economic' | 'sport' | 'social' | 'cyber';
  block: string;
  time: string;
  content?: string;
  importance?: 'high' | 'medium' | 'low';
}

export interface Hadith {
  id: number;
  text: string;
  source?: string;
}

export interface StatData {
  totalNews: number;
  last24Hours: number;
  categories: number;
  totalMembers: number;
  activeMembers: number;
  yearTopic: string;
  monthTopic: string;
  weekTopic: string;
}

export interface User {
  id: string;
  name: string;
  code: string;
  avatar?: string;
}
