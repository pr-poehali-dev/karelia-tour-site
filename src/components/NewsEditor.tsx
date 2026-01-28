import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { NewsItem } from '@/lib/storage';

interface NewsEditorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  newsItem?: NewsItem | null;
  onSave: (newsItem: Omit<NewsItem, 'id'>) => void;
}

export default function NewsEditor({ open, onOpenChange, newsItem, onSave }: NewsEditorProps) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (newsItem) {
      setTitle(newsItem.title);
      setDate(newsItem.date);
      setCategory(newsItem.category);
      setImage(newsItem.image);
      setContent(newsItem.content);
    } else {
      const today = new Date().toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      setDate(today);
    }
  }, [newsItem, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, date, category, image, content });
    handleClose();
  };

  const handleClose = () => {
    setTitle('');
    setDate('');
    setCategory('');
    setImage('');
    setContent('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{newsItem ? 'Редактировать новость' : 'Добавить новость'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Заголовок</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Заголовок новости"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Дата</Label>
              <Input
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="15 января 2025"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Категория</Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Новости"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">URL изображения</Label>
            <Input
              id="image"
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
          {image && (
            <div className="border rounded-lg p-2">
              <img src={image} alt="Предпросмотр" className="w-full h-48 object-cover rounded" />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="content">Содержание</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Текст новости (поддерживает HTML: <b>жирный</b>, <i>курсив</i>, <u>подчёркнутый</u>)"
              rows={6}
              required
            />
            <p className="text-xs text-muted-foreground">
              Поддерживается HTML-разметка для форматирования текста
            </p>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Отмена
            </Button>
            <Button type="submit">
              {newsItem ? 'Сохранить' : 'Добавить'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
