interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
}

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

const PHOTOS_KEY = 'dom_konchezero_photos';
const NEWS_KEY = 'dom_konchezero_news';

const defaultPhotos: Photo[] = [
  { 
    id: '1', 
    url: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/0cc32477-021d-4944-8e18-528ad79c06f7.jpg', 
    title: 'Гостевой дом зимой', 
    description: 'Уютный дом в снежном лесу' 
  },
  { 
    id: '2', 
    url: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/c7638944-0617-4b37-b3d1-8afcf4214338.jpg', 
    title: 'Озеро Кончезеро', 
    description: 'Живописный вид на озеро' 
  },
  { 
    id: '3', 
    url: 'https://00.img.avito.st/image/1/1.3750z7a5c1dCePFaRrCJiWJtcVHKbvFBQmNxVcZ6d1U.snTM3FgxfzQjAxuj4zL1A_sz5h0FUlP0pkW1G2V2gSk', 
    title: 'Фасад дома', 
    description: 'Вид на дом с улицы' 
  },
  { 
    id: '4', 
    url: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/c7638944-0617-4b37-b3d1-8afcf4214338.jpg', 
    title: 'Природа Карелии', 
    description: 'Красота северного края' 
  },
  { 
    id: '5', 
    url: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/0cc32477-021d-4944-8e18-528ad79c06f7.jpg', 
    title: 'Зимний вечер', 
    description: 'Дом в вечернем освещении' 
  },
  { 
    id: '6', 
    url: 'https://00.img.avito.st/image/1/1.3750z7a5c1dCePFaRrCJiWJtcVHKbvFBQmNxVcZ6d1U.snTM3FgxfzQjAxuj4zL1A_sz5h0FUlP0pkW1G2V2gSk', 
    title: 'Терраса', 
    description: 'Место для отдыха на свежем воздухе' 
  },
];

const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: 'Открытие сезона 2025',
    date: '15 января 2025',
    category: 'Новости',
    image: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/0cc32477-021d-4944-8e18-528ad79c06f7.jpg',
    content: 'Мы рады объявить об открытии нового сезона! Наш гостевой дом готов принять гостей. Забронируйте отдых заранее и получите специальные условия.',
  },
  {
    id: '2',
    title: 'Новые удобства в доме',
    date: '10 января 2025',
    category: 'Обновления',
    image: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/c7638944-0617-4b37-b3d1-8afcf4214338.jpg',
    content: 'В доме появились новые удобства: обновлённая кухня с современной техникой, уютная терраса с видом на озеро и зона барбекю.',
  },
];

export function getPhotos(): Photo[] {
  const stored = localStorage.getItem(PHOTOS_KEY);
  if (!stored) {
    localStorage.setItem(PHOTOS_KEY, JSON.stringify(defaultPhotos));
    return defaultPhotos;
  }
  return JSON.parse(stored);
}

export function savePhotos(photos: Photo[]): void {
  localStorage.setItem(PHOTOS_KEY, JSON.stringify(photos));
}

export function addPhoto(photo: Omit<Photo, 'id'>): Photo {
  const photos = getPhotos();
  const newPhoto: Photo = {
    ...photo,
    id: Date.now().toString(),
  };
  photos.push(newPhoto);
  savePhotos(photos);
  return newPhoto;
}

export function updatePhoto(id: string, updates: Partial<Photo>): void {
  const photos = getPhotos();
  const index = photos.findIndex(p => p.id === id);
  if (index !== -1) {
    photos[index] = { ...photos[index], ...updates };
    savePhotos(photos);
  }
}

export function deletePhoto(id: string): void {
  const photos = getPhotos().filter(p => p.id !== id);
  savePhotos(photos);
}

export function getNews(): NewsItem[] {
  const stored = localStorage.getItem(NEWS_KEY);
  if (!stored) {
    localStorage.setItem(NEWS_KEY, JSON.stringify(defaultNews));
    return defaultNews;
  }
  return JSON.parse(stored);
}

export function saveNews(news: NewsItem[]): void {
  localStorage.setItem(NEWS_KEY, JSON.stringify(news));
}

export function addNews(newsItem: Omit<NewsItem, 'id'>): NewsItem {
  const news = getNews();
  const newItem: NewsItem = {
    ...newsItem,
    id: Date.now().toString(),
  };
  news.unshift(newItem);
  saveNews(news);
  return newItem;
}

export function updateNews(id: string, updates: Partial<NewsItem>): void {
  const news = getNews();
  const index = news.findIndex(n => n.id === id);
  if (index !== -1) {
    news[index] = { ...news[index], ...updates };
    saveNews(news);
  }
}

export function deleteNews(id: string): void {
  const news = getNews().filter(n => n.id !== id);
  saveNews(news);
}

export type { Photo, NewsItem };
