import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { getPhotos, getNews } from '@/lib/storage';

export default function Home() {
  const [randomPhotos, setRandomPhotos] = useState<any[]>([]);
  const [latestNews, setLatestNews] = useState<any[]>([]);

  useEffect(() => {
    const allPhotos = getPhotos();
    const shuffled = [...allPhotos].sort(() => 0.5 - Math.random());
    setRandomPhotos(shuffled.slice(0, 3));

    const allNews = getNews();
    setLatestNews(allNews.slice(0, 4));
  }, []);
  return (
    <div>
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/0cc32477-021d-4944-8e18-528ad79c06f7.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Добро пожаловать в Карелию
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Тихий отдых для 4 человек на берегу озера Кончезеро
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground animate-scale-in">
              Забронировать
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Фотогалерея</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {randomPhotos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover-scale">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4">
                  <p className="font-medium">{photo.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/photos">
              <Button variant="outline">Смотреть все фото</Button>
            </Link>
          </div>
        </div>
      </section>

      {latestNews.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Последние новости</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {latestNews.map((item) => (
                <Card key={item.id} className="overflow-hidden hover-scale">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                      <span>{item.category}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.content.replace(/<[^>]*>/g, '')}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/news">
                <Button variant="outline">Все новости</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Уютный отдых в Карелии</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Наш гостевой дом расположен в живописном селе Кончезеро, на берегу одноименного озера. 
                  Это идеальное место для тех, кто ищет спокойствия, единения с природой и настоящего карельского отдыха.
                </p>
                <p>
                  Дом рассчитан на комфортное размещение до 4 человек. Здесь есть всё необходимое для приятного отдыха: 
                  уютные спальни, оборудованная кухня, санузел, терраса с видом на озеро.
                </p>
                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <p className="text-lg font-semibold text-foreground mb-2">Стоимость аренды:</p>
                  <p className="text-2xl font-bold text-accent mb-1">от 3 500 ₽ / сутки</p>
                  <p className="text-sm text-muted-foreground">Специальные цены на длительный срок</p>
                </div>
                <Link to="/booking">
                  <Button className="w-full md:w-auto" size="lg">
                    Забронировать дом
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://00.img.avito.st/image/1/1.3750z7a5c1dCePFaRrCJiWJtcVHKbvFBQmNxVcZ6d1U.snTM3FgxfzQjAxuj4zL1A_sz5h0FUlP0pkW1G2V2gSk" 
                alt="Гостевой дом" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Как добраться</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`yandexnavi://build_route_on_map?lat_to=62.1146&lon_to=33.9808`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full md:w-auto bg-secondary hover:bg-secondary/90">
                <Icon name="Navigation" className="mr-2" size={20} />
                Яндекс Навигатор
              </Button>
            </a>
            <a 
              href={`dgis://2gis.ru/routeSearch/rsType/car/to/33.9808,62.1146`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full md:w-auto bg-secondary hover:bg-secondary/90">
                <Icon name="MapPin" className="mr-2" size={20} />
                2ГИС
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">Обратная связь</h2>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Петров" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email или телефон</label>
                  <Input placeholder="ivan@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea placeholder="Ваш вопрос или комментарий..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}