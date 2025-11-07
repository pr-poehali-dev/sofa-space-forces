import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'monitoring', label: 'Мониторинг', icon: 'Activity' },
    { id: 'about', label: 'О проекте', icon: 'Info' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const servers = [
    { name: 'Server #1 - PvP Arena', players: '24/50', tps: 60, uptime: '99.9%', status: 'online', ip: '192.168.1.1:27015' },
    { name: 'Server #2 - Creative Build', players: '18/40', tps: 60, uptime: '99.7%', status: 'online', ip: '192.168.1.2:27015' },
    { name: 'Server #3 - Survival', players: '35/60', tps: 58, uptime: '98.5%', status: 'online', ip: '192.168.1.3:27015' },
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/f05b8789-770f-4b4c-9c1b-1234d1ef233c/files/ec6d2f45-a257-4ac8-9684-45eafef4eea7.jpg',
    'https://cdn.poehali.dev/projects/f05b8789-770f-4b4c-9c1b-1234d1ef233c/files/c8edc414-b9f6-47be-a448-5c21b39d712f.jpg',
    'https://cdn.poehali.dev/projects/f05b8789-770f-4b4c-9c1b-1234d1ef233c/files/ba24eb17-9605-4b89-935a-f76793ba2415.jpg',
    'https://cdn.poehali.dev/projects/f05b8789-770f-4b4c-9c1b-1234d1ef233c/files/ec6d2f45-a257-4ac8-9684-45eafef4eea7.jpg',
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://cdn.poehali.dev/projects/f05b8789-770f-4b4c-9c1b-1234d1ef233c/files/f87b9704-a767-4a55-8abf-db927e133209.jpg)',
        }}
      />
      <div className="fixed inset-0 bg-background/70 backdrop-blur-sm" />
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <nav className="fixed top-0 w-full z-50 glass-card border-b border-primary/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary/20 border border-primary rounded-lg flex items-center justify-center animate-pulse-glow">
                <Icon name="Rocket" className="text-primary" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-primary text-glow">SOFA SPACE FORCES</h1>
            </div>
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all ${activeSection === item.id ? 'bg-primary text-primary-foreground border-glow' : 'text-muted-foreground hover:text-primary'}`}
                >
                  <Icon name={item.icon as any} size={16} className="mr-2" />
                  {item.label}
                </Button>
              ))}
              <Button
                variant="ghost"
                onClick={() => navigate('/rules')}
                className="text-muted-foreground hover:text-primary"
              >
                <Icon name="BookOpen" size={16} className="mr-2" />
                Правила
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative pt-24">
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="container mx-auto text-center animate-fade-in">
            <div className="mb-8 inline-block">
              <Badge className="bg-secondary/20 text-secondary border border-secondary/50 px-6 py-2 text-sm animate-pulse-glow">
                Space Engineers Community
              </Badge>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold mb-6 text-glow animate-float">
              SOFA SPACE<br />FORCES
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Присоединяйся к элитному космическому флоту в Space Engineers. Исследуй галактику, строй корабли, сражайся за территорию!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground border-glow hover:scale-105 transition-transform">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10" onClick={() => scrollToSection('about')}>
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

        <section id="monitoring" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow">Мониторинг серверов</h2>
            <div className="space-y-6">
              {servers.map((server, idx) => (
                <Card key={idx} className="glass-card p-6 border-primary/30 hover:border-primary/60 transition-all">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/20 border border-primary rounded-lg flex items-center justify-center">
                        <Icon name="Server" className="text-primary" size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{server.name}</h3>
                        <p className="text-sm text-muted-foreground font-mono">{server.ip}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="text-center">
                        <Badge className={server.status === 'online' ? 'bg-green-500/20 text-green-400 border-green-500/50 mb-2' : 'bg-red-500/20 text-red-400 border-red-500/50 mb-2'}>
                          {server.status === 'online' ? 'Online' : 'Offline'}
                        </Badge>
                        <p className="text-xs text-muted-foreground">Статус</p>
                      </div>
                      
                      <div className="text-center px-4 border-l border-primary/20">
                        <p className="text-2xl font-bold text-secondary">{server.players}</p>
                        <p className="text-xs text-muted-foreground">Игроки</p>
                      </div>
                      
                      <div className="text-center px-4 border-l border-primary/20">
                        <p className="text-2xl font-bold text-accent">{server.tps}</p>
                        <p className="text-xs text-muted-foreground">TPS</p>
                      </div>
                      
                      <div className="text-center px-4 border-l border-primary/20">
                        <p className="text-2xl font-bold text-primary">{server.uptime}</p>
                        <p className="text-xs text-muted-foreground">Uptime</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow">О проекте</h2>
            <Card className="glass-card p-8 border-primary/30">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-primary">Sofa Space Forces</strong> — это динамичное сообщество игроков Space Engineers, объединённых страстью к космическим приключениям. Мы создали уникальный сервер с кастомными модификациями, сбалансированным PvP и дружелюбной атмосферой.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-3">
                    <Icon name="Rocket" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Космические битвы</h4>
                      <p className="text-muted-foreground">Эпические сражения между флотами в открытом космосе</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Wrench" className="text-secondary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Инженерия</h4>
                      <p className="text-muted-foreground">Проектируй и строй уникальные космические корабли</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Globe" className="text-accent mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Исследования</h4>
                      <p className="text-muted-foreground">Открывай новые планеты и астероиды</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Shield" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Фракции</h4>
                      <p className="text-muted-foreground">Создавай альянсы и защищай территорию</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="gallery" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow">Галерея</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <Card key={index} className="glass-card border-accent/30 overflow-hidden group cursor-pointer hover:border-accent transition-all">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={img} 
                      alt={`Gallery ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-sm font-semibold">Скриншот #{index + 1}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow">Контакты</h2>
            <Card className="glass-card p-8 border-primary/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">Присоединяйся к нашему сообществу!</h3>
                <p className="text-muted-foreground">Выбери удобный способ связи</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Button size="lg" className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white border-[#0088cc] h-16">
                  <Icon name="Send" size={24} className="mr-3" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Telegram</div>
                    <div className="font-semibold">Telegram группа</div>
                  </div>
                </Button>
                
                <Button size="lg" className="bg-[#0077ff] hover:bg-[#0077ff]/90 text-white border-[#0077ff] h-16">
                  <Icon name="MessageCircle" size={24} className="mr-3" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">VK</div>
                    <div className="font-semibold">Группа ВКонтакте</div>
                  </div>
                </Button>

                <Button size="lg" className="bg-[#5865F2] hover:bg-[#5865F2]/90 text-white border-[#5865F2] h-16">
                  <Icon name="MessageSquare" size={24} className="mr-3" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Discord</div>
                    <div className="font-semibold">Discord сервер</div>
                  </div>
                </Button>
              </div>

              <div className="border-t border-primary/20 pt-8">
                <h4 className="text-xl font-semibold mb-6 text-center">Актуальные события</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="glass-card p-6 border-secondary/30 hover:border-secondary transition-all">
                    <div className="text-center">
                      <Icon name="Megaphone" className="text-secondary mx-auto mb-4" size={48} />
                      <h5 className="text-lg font-semibold mb-2">Набор новобранцев!</h5>
                      <p className="text-sm text-muted-foreground">Присоединяйся к нашему флоту. Бонусы для новичков!</p>
                    </div>
                  </Card>

                  <Card className="glass-card p-6 border-accent/30 hover:border-accent transition-all">
                    <div className="text-center">
                      <Icon name="Trophy" className="text-accent mx-auto mb-4" size={48} />
                      <h5 className="text-lg font-semibold mb-2">Турнир флотов</h5>
                      <p className="text-sm text-muted-foreground">Еженедельные PvP турниры с призами!</p>
                    </div>
                  </Card>

                  <Card className="glass-card p-6 border-primary/30 hover:border-primary transition-all">
                    <div className="text-center">
                      <Icon name="Sparkles" className="text-primary mx-auto mb-4" size={48} />
                      <h5 className="text-lg font-semibold mb-2">Новые моды</h5>
                      <p className="text-sm text-muted-foreground">Уникальные корабли и оружие уже доступны!</p>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="glass-card border-t border-primary/30 py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Sofa Space Forces. Все права защищены. Space Engineers™ является торговой маркой Keen Software House.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;