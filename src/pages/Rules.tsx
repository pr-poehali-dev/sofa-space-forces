import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Rules = () => {
  const navigate = useNavigate();

  const ruleCategories = [
    {
      title: 'Общие правила',
      icon: 'BookOpen',
      color: 'primary',
      rules: [
        'Уважительное отношение ко всем игрокам сервера обязательно',
        'Запрещены оскорбления, угрозы и токсичное поведение',
        'Мат и нецензурная лексика допустимы в разумных пределах',
        'Реклама других серверов и проектов строго запрещена',
        'Попрошайничество ресурсов и привилегий не приветствуется'
      ]
    },
    {
      title: 'Игровой процесс',
      icon: 'Gamepad2',
      color: 'secondary',
      rules: [
        'Использование читов, багов и эксплойтов карается баном',
        'Гриферство вне PvP зон строго запрещено',
        'Уничтожение чужих построек без объявления войны запрещено',
        'Кража ресурсов из чужих баз вне рейдов запрещена',
        'Максимум 5 гридов на одного игрока',
        'Лимит PCU на игрока: 100,000',
        'Использование лагающих конструкций приведет к удалению'
      ]
    },
    {
      title: 'PvP правила',
      icon: 'Swords',
      color: 'accent',
      rules: [
        'PvP разрешен только в специально отведенных зонах',
        'Объявление войны фракции через Discord обязательно (за 24ч)',
        'Нападение на новичков (игроки < 10ч) строго запрещено',
        'Запрещено spawn kill - дайте противнику возможность отступить',
        'После рейда оставьте базовые ресурсы для восстановления',
        'Использование торпед класса "Судный день" запрещено'
      ]
    },
    {
      title: 'Строительство и техника',
      icon: 'Wrench',
      color: 'primary',
      rules: [
        'Постройки должны быть оптимизированы для производительности',
        'Запрещены лаг-машины и лагающие конструкции',
        'Расстояние между базами разных фракций минимум 50км',
        'Блокировка астероидов огромными гридами запрещена',
        'Автоматические фермы должны иметь выключатель',
        'Дроны и автоматика не должны создавать лаги',
        'Максимальная скорость кораблей: 110 м/с'
      ]
    },
    {
      title: 'Фракции и альянсы',
      icon: 'Shield',
      color: 'secondary',
      rules: [
        'Одна основная фракция на игрока',
        'Создание фракций-пустышек для обхода лимитов запрещено',
        'Альянсы между фракциями приветствуются',
        'Предательство внутри фракции - на ваше усмотрение',
        'Война между альянсами согласовывается в Discord'
      ]
    },
    {
      title: 'Экономика и торговля',
      icon: 'Coins',
      color: 'accent',
      rules: [
        'Торговля между игроками разрешена и приветствуется',
        'Мошенничество при торговле карается баном',
        'Взлом чужих контрактов запрещен',
        'Монополизация торговых станций запрещена',
        'Цены на товары устанавливаете сами'
      ]
    },
    {
      title: 'Коммуникация',
      icon: 'MessageSquare',
      color: 'primary',
      rules: [
        'Используйте Discord для координации и связи',
        'Внутриигровой чат только для игровых моментов',
        'Спам в чате карается муте',
        'Голосовая связь в Discord обязательна для PvP операций',
        'Претензии и жалобы подавать только через тикеты'
      ]
    },
    {
      title: 'Администрация',
      icon: 'Users',
      color: 'secondary',
      rules: [
        'Решение администрации - окончательное',
        'Споры с админами в публичных каналах запрещены',
        'При бане возможна апелляция через Discord тикет',
        'Попытки подкупа администрации приведут к бану',
        'Баги и эксплойты сообщайте администрации',
        'За помощь в поиске багов - награда'
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case 'primary': return 'border-primary/50 hover:border-primary';
      case 'secondary': return 'border-secondary/50 hover:border-secondary';
      case 'accent': return 'border-accent/50 hover:border-accent';
      default: return 'border-primary/50';
    }
  };

  const getIconColor = (color: string) => {
    switch(color) {
      case 'primary': return 'text-primary';
      case 'secondary': return 'text-secondary';
      case 'accent': return 'text-accent';
      default: return 'text-primary';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <nav className="sticky top-0 w-full z-50 glass-card border-b border-primary/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary/20 border border-primary rounded-lg flex items-center justify-center animate-pulse-glow">
                <Icon name="Rocket" className="text-primary" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-primary text-glow">SOFA SPACE FORCES</h1>
            </div>
            <Button onClick={() => navigate('/')} variant="outline" className="border-primary text-primary">
              <Icon name="Home" size={16} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary border border-primary/50 px-6 py-2 text-sm animate-pulse-glow mb-6">
              Правила сервера
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
              Правила Sofa Space Forces
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Соблюдение правил обязательно для всех игроков. Незнание правил не освобождает от ответственности.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {ruleCategories.map((category, index) => (
              <Card key={index} className={`glass-card p-8 ${getColorClass(category.color)} transition-all animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-14 h-14 rounded-lg bg-${category.color}/20 border border-${category.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={category.icon as any} className={getIconColor(category.color)} size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{category.title}</h2>
                    <Badge variant="outline" className="text-xs">
                      {category.rules.length} {category.rules.length === 1 ? 'правило' : 'правил'}
                    </Badge>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full bg-${category.color}/20 border border-${category.color}/50 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <span className={`text-xs font-bold ${getIconColor(category.color)}`}>{ruleIndex + 1}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{rule}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="glass-card p-8 border-destructive/50 mt-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <Icon name="AlertTriangle" className="text-destructive" size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-destructive">Наказания за нарушения</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <Icon name="AlertCircle" className="text-yellow-500 mr-2" size={20} />
                  Предупреждение
                </h4>
                <p className="text-sm text-muted-foreground">Мелкие нарушения, споры, первое нарушение правил</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <Icon name="Clock" className="text-orange-500 mr-2" size={20} />
                  Временный бан
                </h4>
                <p className="text-sm text-muted-foreground">Повторные нарушения, гриферство, токсичное поведение</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <Icon name="Ban" className="text-destructive mr-2" size={20} />
                  Перманентный бан
                </h4>
                <p className="text-sm text-muted-foreground">Читы, серьезное гриферство, повторные баны</p>
              </div>
            </div>
          </Card>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Если у вас есть вопросы по правилам, обратитесь к администрации в Discord
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground border-glow" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Вернуться на главную
            </Button>
          </div>
        </div>
      </main>

      <footer className="glass-card border-t border-primary/30 py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Sofa Space Forces. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Rules;
