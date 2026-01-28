import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const faqs = [
  {
    question: 'Какое минимальное количество суток для бронирования?',
    answer: 'Минимальный срок аренды составляет 2 суток. Это позволяет вам полноценно отдохнуть и насладиться карельской природой.',
  },
  {
    question: 'Можно ли приезжать с детьми?',
    answer: 'Да, конечно! Наш дом отлично подходит для семейного отдыха с детьми. На территории есть безопасная зона для игр, а в доме — всё необходимое для комфортного проживания.',
  },
  {
    question: 'Разрешены ли домашние животные?',
    answer: 'Да, мы разрешаем проживание с домашними животными. Просим заранее предупредить об этом при бронировании.',
  },
  {
    question: 'Есть ли парковка?',
    answer: 'Да, на территории есть парковочное место для вашего автомобиля.',
  },
  {
    question: 'Включена ли баня в стоимость?',
    answer: 'Баня оплачивается отдельно. Стоимость и условия уточняйте при бронировании.',
  },
  {
    question: 'Как происходит заселение?',
    answer: 'Заселение с 14:00, выселение до 12:00. Мы встречаем гостей и показываем дом, рассказываем обо всех удобствах.',
  },
  {
    question: 'Есть ли интернет?',
    answer: 'Да, в доме есть Wi-Fi интернет.',
  },
  {
    question: 'Можно ли приготовить еду?',
    answer: 'Да, в доме полностью оборудованная кухня с плитой, холодильником, посудой и всем необходимым для приготовления пищи.',
  },
];

const comments = [
  {
    id: 1,
    author: 'Анна',
    date: '20 января 2025',
    text: 'Отличный дом! Были здесь на новогодние каникулы с семьёй. Очень уютно, чисто, всё работает. Спасибо хозяевам!',
    reply: 'Спасибо за тёплый отзыв, Анна! Рады, что вам понравилось. Будем рады видеть снова!',
  },
  {
    id: 2,
    author: 'Михаил',
    date: '15 января 2025',
    text: 'Прекрасное место для тихого отдыха. Природа, тишина, озеро рядом. Рекомендую!',
    reply: 'Михаил, благодарим за отзыв! Приезжайте к нам ещё!',
  },
];

export default function FAQ() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch('https://functions.poehali.dev/ae5d3dec-aa78-4163-8fb4-6ad4e945dc04', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          contact: '',
          message: `Вопрос из раздела FAQ:\n${question}` 
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Вопрос отправлен',
          description: 'Мы ответим вам в ближайшее время',
        });
        setName('');
        setQuestion('');
      } else {
        toast({
          variant: 'destructive',
          title: 'Ошибка',
          description: data.error || 'Не удалось отправить вопрос',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Ошибка',
        description: 'Не удалось отправить вопрос',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-4">Вопросы и ответы</h1>
        <p className="text-center text-muted-foreground mb-12">
          Ответы на частые вопросы о проживании
        </p>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="MessageSquare" size={24} className="text-primary" />
                Отзывы гостей
              </h2>
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-l-4 border-primary/30 pl-4 py-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{comment.author}</span>
                      <span className="text-sm text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{comment.text}</p>
                    {comment.reply && (
                      <div className="bg-accent/10 p-3 rounded-md border-l-2 border-accent">
                        <p className="text-sm">
                          <span className="font-semibold text-accent">Ответ:</span> {comment.reply}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Задать вопрос</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input 
                    placeholder="Как вас зовут?" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={sending}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ваш вопрос или комментарий
                  </label>
                  <Textarea 
                    placeholder="Напишите ваш вопрос..." 
                    rows={4}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    disabled={sending}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={sending}>
                  <Icon name="Send" className="mr-2" size={18} />
                  {sending ? 'Отправка...' : 'Отправить'}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Ваше сообщение будет отправлено администратору
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}