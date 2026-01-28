import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/contexts/AuthContext';
import { getNews, addNews, updateNews, deleteNews, NewsItem } from '@/lib/storage';
import NewsEditor from '@/components/NewsEditor';
import { useToast } from '@/hooks/use-toast';

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { isAdmin } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    setNews(getNews());
  }, []);

  const handleAdd = () => {
    setEditingNews(null);
    setEditorOpen(true);
  };

  const handleEdit = (newsItem: NewsItem) => {
    setEditingNews(newsItem);
    setEditorOpen(true);
  };

  const handleSave = (newsData: Omit<NewsItem, 'id'>) => {
    if (editingNews) {
      updateNews(editingNews.id, newsData);
      toast({
        title: 'Новость обновлена',
        description: 'Изменения успешно сохранены',
      });
    } else {
      addNews(newsData);
      toast({
        title: 'Новость добавлена',
        description: 'Новая новость успешно опубликована',
      });
    }
    setNews(getNews());
  };

  const handleDelete = (id: string) => {
    deleteNews(id);
    setNews(getNews());
    setDeleteId(null);
    toast({
      title: 'Новость удалена',
      description: 'Новость успешно удалена',
    });
  };

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold">Новости</h1>
            <p className="text-muted-foreground mt-2">
              Последние обновления и события
            </p>
          </div>
          {isAdmin && (
            <Button onClick={handleAdd}>
              <Icon name="Plus" className="mr-2" size={18} />
              Добавить новость
            </Button>
          )}
        </div>

        {news.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Пока нет новостей</p>
            {isAdmin && (
              <Button onClick={handleAdd} className="mt-4">
                Добавить первую новость
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden hover-scale group">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover"
                  />
                  {isAdmin && (
                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="secondary"
                        onClick={() => handleEdit(item)}
                      >
                        <Icon name="Pencil" size={16} />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => setDeleteId(item.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                </CardHeader>
                <CardContent>
                  <div 
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <NewsEditor
        open={editorOpen}
        onOpenChange={setEditorOpen}
        newsItem={editingNews}
        onSave={handleSave}
      />

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Удалить новость?</AlertDialogTitle>
            <AlertDialogDescription>
              Это действие нельзя отменить. Новость будет удалена.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteId && handleDelete(deleteId)}>
              Удалить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
