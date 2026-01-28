import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">О нас</h1>
        <p className="text-center text-muted-foreground mb-12">
          Всё о нашем гостевом доме и окрестностях
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Icon name="Home" size={24} className="text-primary" />
                  Что включено в услугу
                </h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Наш гостевой дом — это полностью оборудованное жильё для комфортного отдыха. 
                    Мы позаботились о том, чтобы у вас было всё необходимое для приятного пребывания.
                  </p>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">В доме есть:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Две спальни с комфортными кроватями и постельным бельём</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Кухня с плитой, холодильником, посудой и всем необходимым</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Санузел с душевой кабиной, горячей водой, полотенцами</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Гостиная с камином, диваном и телевизором</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Wi-Fi интернет по всему дому</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Отопление в холодное время года</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">На улице:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Просторная терраса с мебелью и видом на озеро</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Зона барбекю с мангалом</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Место для костра</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Парковка для вашего автомобиля</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Баня (доступна по предварительному запросу)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-accent" />
                  Особенности местности
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Кончезеро — живописное карельское село на берегу одноименного озера. 
                    Это тихое место с чистым воздухом, нетронутой природой и по-настоящему 
                    карельской атмосферой.
                  </p>
                  <p>
                    Озеро Кончезеро славится чистой водой и отличной рыбалкой. Летом здесь 
                    можно купаться, кататься на лодке, собирать грибы и ягоды в лесу. 
                    Зимой — любоваться снежными пейзажами, кататься на лыжах и санках.
                  </p>
                  <p>
                    В селе есть всё необходимое: продуктовый магазин в 5 минутах ходьбы, 
                    кафе, остановка автобуса. До Петрозаводска — 45 минут на машине.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Mountain" size={24} className="text-primary" />
                  Достопримечательности
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Водопад Кивач</strong> (15 км) — 
                      один из крупнейших равнинных водопадов Европы
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Марциальные воды</strong> (20 км) — 
                      первый российский курорт, основанный Петром I
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Музей-заповедник Кижи</strong> (80 км) — 
                      знаменитый архитектурный ансамбль под открытым небом
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Петрозаводск</strong> (45 км) — 
                      столица Карелии с музеями, театрами и набережной
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 lg:sticky lg:top-4">
            <Card className="overflow-hidden">
              <img 
                src="https://00.img.avito.st/image/1/1.3750z7a5c1dCePFaRrCJiWJtcVHKbvFBQmNxVcZ6d1U.snTM3FgxfzQjAxuj4zL1A_sz5h0FUlP0pkW1G2V2gSk" 
                alt="Гостевой дом" 
                className="w-full h-auto"
              />
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/c7638944-0617-4b37-b3d1-8afcf4214338.jpg" 
                alt="Озеро" 
                className="w-full h-auto"
              />
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/0cc32477-021d-4944-8e18-528ad79c06f7.jpg" 
                alt="Зима" 
                className="w-full h-auto"
              />
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-2xl font-bold">Готовы к отдыху?</h3>
                <p className="opacity-90">
                  Забронируйте дом прямо сейчас и насладитесь карельской природой
                </p>
                <Link to="/booking">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full"
                  >
                    Забронировать
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
