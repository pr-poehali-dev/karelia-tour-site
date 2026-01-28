import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/photos', label: 'Фото' },
  { path: '/news', label: 'Новости' },
  { path: '/booking', label: 'Забронировать' },
  { path: '/map', label: 'Мы на карте' },
  { path: '/about', label: 'О нас' },
  { path: '/faq', label: 'Вопросы и ответы' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/fe29d37d-bcec-410a-92d6-a28e7d6aa1a5.jpg" 
              alt="Логотип" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Дом в Кончезеро</h1>
              <p className="text-xs md:text-sm opacity-90">Отдых в Карелии</p>
            </div>
          </Link>
          
          <nav className="hidden lg:flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-primary/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-sidebar text-sidebar-foreground">
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                        : 'hover:bg-sidebar-accent/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a 
                href="https://vk.ru/club228342349" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="ВКонтакте"
              >
                <Icon name="Share2" size={24} />
              </a>
              <a 
                href="https://t.me/DomVKonchezero" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={24} />
              </a>
            </div>
            
            <div className="text-sm text-center">
              <p>&copy; 2025 Дом в Кончезеро. Все права защищены.</p>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-secondary-foreground hover:text-accent"
            >
              Вход
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
