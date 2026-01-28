import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Photo } from '@/lib/storage';

interface PhotoEditorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  photo?: Photo | null;
  onSave: (photo: Omit<Photo, 'id'>) => void;
}

export default function PhotoEditor({ open, onOpenChange, photo, onSave }: PhotoEditorProps) {
  const [url, setUrl] = useState(photo?.url || '');
  const [title, setTitle] = useState(photo?.title || '');
  const [description, setDescription] = useState(photo?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ url, title, description });
    handleClose();
  };

  const handleClose = () => {
    setUrl('');
    setTitle('');
    setDescription('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{photo ? 'Редактировать фото' : 'Добавить фото'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url">URL изображения</Label>
            <Input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
          {url && (
            <div className="border rounded-lg p-2">
              <img src={url} alt="Предпросмотр" className="w-full h-48 object-cover rounded" />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="title">Название</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Название фото"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Описание фото"
              rows={3}
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Отмена
            </Button>
            <Button type="submit">
              {photo ? 'Сохранить' : 'Добавить'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
