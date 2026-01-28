import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Booking() {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-4">Бронирование</h1>
        <p className="text-center text-muted-foreground mb-12">
          Забронируйте комфортный отдых в Карелии
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">О нашем доме</h2>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Наш уютный гостевой дом находится в живописном селе Кончезеро, на берегу озера. 
                  Это тихое место, идеально подходящее для семейного отдыха или романтических выходных.
                </p>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Icon name="Home" size={20} className="text-primary" />
                    Что есть в доме:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-6">
                    <li>Две уютные спальни на 4 человека</li>
                    <li>Полностью оборудованная кухня</li>
                    <li>Санузел с душевой кабиной</li>
                    <li>Гостиная с камином</li>
                    <li>Wi-Fi интернет</li>
                    <li>Отопление и горячая вода</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Icon name="TreePine" size={20} className="text-primary" />
                    На территории:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-6">
                    <li>Терраса с видом на озеро</li>
                    <li>Зона барбекю</li>
                    <li>Парковка для автомобиля</li>
                    <li>Баня (по запросу)</li>
                    <li>Место для костра</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    Что рядом:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-6">
                    <li>Озеро Кончезеро — 100 метров</li>
                    <li>Продуктовый магазин — 500 метров</li>
                    <li>Кафе — 1 км</li>
                    <li>Кивач водопад — 15 км</li>
                    <li>Петрозаводск — 45 км</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Особенности расположения</h3>
                <p className="text-muted-foreground mb-4">
                  Село Кончезеро расположено в одном из самых живописных уголков Карелии. 
                  Здесь вы сможете насладиться настоящей северной природой, чистым воздухом 
                  и спокойствием. Летом можно купаться в озере, ходить за грибами и ягодами. 
                  Зимой — кататься на лыжах и санках, наслаждаться снежными пейзажами.
                </p>
                <p className="text-muted-foreground">
                  Рядом находятся знаменитые карельские достопримечательности: водопад Кивач, 
                  курорт «Марциальные воды», музей-заповедник «Кижи».
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <h2 className="text-2xl font-bold">Стоимость</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">От</p>
                  <p className="text-4xl font-bold text-primary">3 500 ₽</p>
                  <p className="text-sm text-muted-foreground">за сутки</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Вместимость:</span>
                    <span className="font-medium">До 4 человек</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Минимальный срок:</span>
                    <span className="font-medium">2 суток</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Скидка от 7 дней:</span>
                    <span className="font-medium text-accent">-10%</span>
                  </div>
                </div>

                <a 
                  href="https://vk.com/market/product/domik-u-ozera-228342349-11905542"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full" size="lg">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Перейти к бронированию
                  </Button>
                </a>

                <div className="text-xs text-center text-muted-foreground pt-4 border-t">
                  Бронирование через ВКонтакте
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
