import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const news = [
  {
    id: 1,
    title: 'Открытие сезона 2025',
    date: '15 января 2025',
    category: 'Новости',
    image: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/0cc32477-021d-4944-8e18-528ad79c06f7.jpg',
    content: 'Мы рады объявить об открытии нового сезона! Наш гостевой дом готов принять гостей. Забронируйте отдых заранее и получите специальные условия.',
  },
  {
    id: 2,
    title: 'Новые удобства в доме',
    date: '10 января 2025',
    category: 'Обновления',
    image: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/c7638944-0617-4b37-b3d1-8afcf4214338.jpg',
    content: 'В доме появились новые удобства: обновлённая кухня с современной техникой, уютная терраса с видом на озеро и зона барбекю.',
  },
];

export default function News() {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Новости</h1>
        <p className="text-center text-muted-foreground mb-12">
          Последние обновления и события
        </p>

        {news.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Пока нет новостей</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden hover-scale">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover"
                />
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
