import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const COORDS = {
  lat: 62.1146,
  lon: 33.9808,
};

export default function Map() {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Мы на карте</h1>
        <p className="text-center text-muted-foreground mb-12">
          Карелия, село Кончезеро, улица Габозерская, 121
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="overflow-hidden">
            <div className="h-[500px] bg-muted/30 relative">
              <iframe
                src={`https://yandex.ru/map-widget/v1/?ll=${COORDS.lon}%2C${COORDS.lat}&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzExODQ5MRJB0KDQvtGB0YHQuNGPLCDQmtCw0YDQtdC70LjRjywg0JrQvtC90LTQvtC_0L7Qs9GB0LrQuNC5INGA0LDQudC-0L0iCg1A3epBFQTcWEI%2C&z=15`}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`yandexnavi://build_route_on_map?lat_to=${COORDS.lat}&lon_to=${COORDS.lon}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                <Icon name="Navigation" className="mr-2" size={20} />
                Открыть в Яндекс Навигаторе
              </Button>
            </a>
            <a 
              href={`dgis://2gis.ru/routeSearch/rsType/car/to/${COORDS.lon},${COORDS.lat}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                <Icon name="MapPin" className="mr-2" size={20} />
                Открыть в 2ГИС
              </Button>
            </a>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Как добраться</h2>
              
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Icon name="Car" size={20} className="text-primary" />
                    На автомобиле:
                  </h3>
                  <p className="ml-7">
                    Из Петрозаводска ехать по трассе А-121 в сторону Кондопоги. 
                    После въезда в село Кончезеро повернуть на улицу Габозерскую. 
                    Дом находится под номером 121. Время в пути — около 45 минут.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Icon name="Bus" size={20} className="text-primary" />
                    На автобусе:
                  </h3>
                  <p className="ml-7">
                    С автовокзала Петрозаводска на автобусе до Кондопоги. 
                    Выйти на остановке «Кончезеро». От остановки пешком около 10 минут.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Icon name="Info" size={20} className="text-primary" />
                    Координаты:
                  </h3>
                  <p className="ml-7 font-mono text-sm">
                    {COORDS.lat}, {COORDS.lon}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
