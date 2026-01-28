import { Card, CardContent } from '@/components/ui/card';

const photos = [
  { id: 1, url: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/0cc32477-021d-4944-8e18-528ad79c06f7.jpg', title: 'Гостевой дом зимой', description: 'Уютный дом в снежном лесу' },
  { id: 2, url: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/c7638944-0617-4b37-b3d1-8afcf4214338.jpg', title: 'Озеро Кончезеро', description: 'Живописный вид на озеро' },
  { id: 3, url: 'https://00.img.avito.st/image/1/1.3750z7a5c1dCePFaRrCJiWJtcVHKbvFBQmNxVcZ6d1U.snTM3FgxfzQjAxuj4zL1A_sz5h0FUlP0pkW1G2V2gSk', title: 'Фасад дома', description: 'Вид на дом с улицы' },
  { id: 4, url: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/c7638944-0617-4b37-b3d1-8afcf4214338.jpg', title: 'Природа Карелии', description: 'Красота северного края' },
  { id: 5, url: 'https://cdn.poehali.dev/projects/e6fc9b3e-e112-486b-b53f-04c5e20b89fa/files/0cc32477-021d-4944-8e18-528ad79c06f7.jpg', title: 'Зимний вечер', description: 'Дом в вечернем освещении' },
  { id: 6, url: 'https://00.img.avito.st/image/1/1.3750z7a5c1dCePFaRrCJiWJtcVHKbvFBQmNxVcZ6d1U.snTM3FgxfzQjAxuj4zL1A_sz5h0FUlP0pkW1G2V2gSk', title: 'Терраса', description: 'Место для отдыха на свежем воздухе' },
];

export default function Photos() {
  return (
    <div className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Фотогалерея</h1>
        <p className="text-center text-muted-foreground mb-12">
          Наш гостевой дом и окрестности
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden hover-scale group">
              <div className="relative overflow-hidden">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                <p className="text-sm text-muted-foreground">{photo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
