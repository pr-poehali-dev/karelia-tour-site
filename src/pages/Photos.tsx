import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/contexts/AuthContext';
import { getPhotos, addPhoto, updatePhoto, deletePhoto, Photo } from '@/lib/storage';
import PhotoEditor from '@/components/PhotoEditor';
import { useToast } from '@/hooks/use-toast';

export default function Photos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState<Photo | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { isAdmin } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    setPhotos(getPhotos());
  }, []);

  const handleAdd = () => {
    setEditingPhoto(null);
    setEditorOpen(true);
  };

  const handleEdit = (photo: Photo) => {
    setEditingPhoto(photo);
    setEditorOpen(true);
  };

  const handleSave = (photoData: Omit<Photo, 'id'>) => {
    if (editingPhoto) {
      updatePhoto(editingPhoto.id, photoData);
      toast({
        title: 'Фото обновлено',
        description: 'Изменения успешно сохранены',
      });
    } else {
      addPhoto(photoData);
      toast({
        title: 'Фото добавлено',
        description: 'Новое фото успешно добавлено в галерею',
      });
    }
    setPhotos(getPhotos());
  };

  const handleDelete = (id: string) => {
    deletePhoto(id);
    setPhotos(getPhotos());
    setDeleteId(null);
    toast({
      title: 'Фото удалено',
      description: 'Фото успешно удалено из галереи',
    });
  };

  return (
    <div className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold">Фотогалерея</h1>
            <p className="text-muted-foreground mt-2">
              Наш гостевой дом и окрестности
            </p>
          </div>
          {isAdmin && (
            <Button onClick={handleAdd}>
              <Icon name="Plus" className="mr-2" size={18} />
              Добавить фото
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden hover-scale group">
              <div className="relative overflow-hidden">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {isAdmin && (
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={() => handleEdit(photo)}
                    >
                      <Icon name="Pencil" size={16} />
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => setDeleteId(photo.id)}
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                <p className="text-sm text-muted-foreground">{photo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {photos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Пока нет фотографий</p>
            {isAdmin && (
              <Button onClick={handleAdd} className="mt-4">
                Добавить первое фото
              </Button>
            )}
          </div>
        )}
      </div>

      <PhotoEditor
        open={editorOpen}
        onOpenChange={setEditorOpen}
        photo={editingPhoto}
        onSave={handleSave}
      />

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Удалить фото?</AlertDialogTitle>
            <AlertDialogDescription>
              Это действие нельзя отменить. Фото будет удалено из галереи.
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
