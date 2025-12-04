import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'NEON NIGHTS',
    date: '15 декабря',
    time: '22:00',
    location: 'Клуб AURORA',
    price: 1500,
    category: 'Электронная музыка',
    image: '/placeholder.svg',
    description: 'Самая яркая вечеринка зимы с лучшими диджеями города'
  },
  {
    id: 2,
    title: 'URBAN VIBES',
    date: '22 декабря',
    time: '21:00',
    location: 'Лофт SPACE',
    price: 2000,
    category: 'Хип-хоп',
    image: '/placeholder.svg',
    description: 'Выступление топовых артистов и битовые батлы'
  },
  {
    id: 3,
    title: 'RETRO WAVE',
    date: '29 декабря',
    time: '20:00',
    location: 'Bar 80s',
    price: 1200,
    category: 'Ретро',
    image: '/placeholder.svg',
    description: 'Погружение в атмосферу 80-х с живыми выступлениями'
  }
];

export default function Index() {
  const [email, setEmail] = useState('');
  const [activeSection, setActiveSection] = useState('events');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Отлично! Теперь вы будете получать уведомления о новых событиях 🎉');
      setEmail('');
    }
  };

  const handleBuyTicket = (eventTitle: string) => {
    toast.success(`Билет на "${eventTitle}" добавлен в корзину! 🎫`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <h1 className="text-2xl font-black text-glow text-primary">PARTY TIME</h1>
          </div>
          
          <div className="hidden md:flex gap-6">
            <button 
              onClick={() => setActiveSection('events')}
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Мероприятия
            </button>
            <button 
              onClick={() => setActiveSection('about')}
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              О нас
            </button>
            <button 
              onClick={() => setActiveSection('contacts')}
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Контакты
            </button>
          </div>

          <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 font-bold">
            <Icon name="Send" size={16} className="mr-2" />
            Наш канал
          </Button>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-glow">
                ТВОЯ ВЕЧЕРИНКА
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  НАЧИНАЕТСЯ ЗДЕСЬ
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Самые яркие события города. Купи билет в один клик
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 font-bold text-lg px-8"
                  onClick={() => setActiveSection('events')}
                >
                  <Icon name="Ticket" size={20} className="mr-2" />
                  Купить билеты
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 font-bold text-lg px-8"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Афиша
                </Button>
              </div>
            </div>
          </div>
        </section>

        {activeSection === 'events' && (
          <section className="py-16 container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                БЛИЖАЙШИЕ СОБЫТИЯ
              </h2>
              <p className="text-muted-foreground text-lg">
                Выбирай и покупай билеты прямо сейчас
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {events.map((event) => (
                <Card 
                  key={event.id} 
                  className="overflow-hidden border-2 hover:card-glow transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/40 to-secondary/40 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Music" size={64} className="text-white/30" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-accent font-bold">
                      {event.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl font-black">{event.title}</CardTitle>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-foreground">
                      <Icon name="Calendar" size={18} className="text-primary" />
                      <span className="font-semibold">{event.date}</span>
                      <span className="text-muted-foreground">•</span>
                      <Icon name="Clock" size={18} className="text-primary" />
                      <span className="font-semibold">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Icon name="MapPin" size={18} className="text-secondary" />
                      <span className="font-semibold">{event.location}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-3xl font-black text-primary">
                        {event.price}₽
                      </div>
                      <Badge variant="outline" className="text-muted-foreground">
                        <Icon name="Users" size={14} className="mr-1" />
                        Осталось мало
                      </Badge>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 font-bold text-lg"
                      onClick={() => handleBuyTicket(event.title)}
                    >
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить билет
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="py-16 container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
                О НАС
              </h2>
              <Card className="border-2">
                <CardContent className="pt-6 space-y-6 text-lg">
                  <p>
                    <span className="text-primary font-bold text-2xl">PARTY TIME</span> — это твой путеводитель 
                    в мире лучших вечеринок города. Мы собираем самые яркие события, чтобы твоя жизнь была 
                    наполнена музыкой, танцами и незабываемыми эмоциями.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 py-8">
                    <div className="text-center space-y-2">
                      <div className="text-5xl font-black text-primary">100+</div>
                      <div className="text-muted-foreground">Событий в год</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-5xl font-black text-secondary">10K+</div>
                      <div className="text-muted-foreground">Счастливых гостей</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-5xl font-black text-accent">50+</div>
                      <div className="text-muted-foreground">Площадок</div>
                    </div>
                  </div>
                  <p>
                    Наша миссия — сделать покупку билетов простой и удобной. Никаких очередей, 
                    никаких сложностей. Просто выбирай событие и наслаждайся вечеринкой!
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="py-16 container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-black">
                СВЯЖИСЬ С НАМИ
              </h2>
              
              <Card className="border-2">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <Icon name="Send" size={32} className="text-primary" />
                    <div className="text-left">
                      <div className="font-bold text-lg">Telegram канал</div>
                      <div className="text-muted-foreground">Новости и эксклюзивные предложения</div>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 font-bold text-lg"
                  >
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Перейти в канал
                  </Button>

                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3 p-3 bg-card rounded-lg border">
                      <Icon name="Mail" size={24} className="text-secondary" />
                      <div className="text-left text-sm">
                        <div className="font-semibold">Email</div>
                        <div className="text-muted-foreground">info@partytime.ru</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-card rounded-lg border">
                      <Icon name="Phone" size={24} className="text-accent" />
                      <div className="text-left text-sm">
                        <div className="font-semibold">Телефон</div>
                        <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto border-2 gradient-border">
              <div>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon name="Bell" size={48} className="text-primary" />
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-black">
                    ПОДПИШИСЬ НА УВЕДОМЛЕНИЯ
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Узнавай первым о новых событиях и получай эксклюзивные предложения
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubscribe} className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="Твой email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-lg h-12 border-2"
                      required
                    />
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 font-bold px-8"
                    >
                      <Icon name="Check" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <span className="text-2xl font-black text-primary">PARTY TIME</span>
            </div>
            
            <div className="flex gap-6">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={24} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={24} />
              </Button>
            </div>
            
            <div className="text-muted-foreground text-center">
              © 2024 PARTY TIME. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
