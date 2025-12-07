import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [pollAnswers, setPollAnswers] = useState<Record<string, string>>({});
  const [showPollResults, setShowPollResults] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const movements = [
    {
      title: 'Солидарность (Польша)',
      year: '1980-1989',
      icon: 'Users',
      description: 'Профсоюзное движение под руководством Леха Валенсы, приведшее к падению коммунистического режима.',
      impact: 'Мирный переход к демократии, катализатор изменений в Восточной Европе',
      methods: ['Забастовки', 'Гражданское неповиновение', 'Международная поддержка']
    },
    {
      title: 'Бархатная революция (Чехословакия)',
      year: '1989',
      icon: 'Heart',
      description: 'Ненасильственная революция студентов и граждан, завершившая коммунистическое правление.',
      impact: 'Бескровная смена власти за 6 недель',
      methods: ['Мирные демонстрации', 'Генеральная забастовка', 'Диалог с властью']
    },
    {
      title: 'Движение за гражданские права (Северная Ирландия)',
      year: '1960-1970',
      icon: 'Flag',
      description: 'Борьба за равные права католического меньшинства против дискриминации.',
      impact: 'Реформы избирательной системы и жилищной политики',
      methods: ['Марши протеста', 'Кампании в СМИ', 'Юридические иски']
    },
    {
      title: 'Экологическое движение Германии',
      year: '1970-1990',
      icon: 'Leaf',
      description: 'Массовые протесты против ядерной энергетики и загрязнения окружающей среды.',
      impact: 'Создание партии "Зелёных" и изменение энергополитики',
      methods: ['Блокады строительства', 'Референдумы', 'Парламентское лоббирование']
    }
  ];

  const mechanisms = [
    {
      title: 'Петиции и обращения',
      icon: 'FileText',
      description: 'Сбор подписей для инициирования законодательных изменений или привлечения внимания к проблеме',
      effectiveness: 75
    },
    {
      title: 'Мирные демонстрации',
      icon: 'Users',
      description: 'Публичные шествия и митинги для визуализации общественной позиции',
      effectiveness: 85
    },
    {
      title: 'Бойкот и стачки',
      icon: 'AlertCircle',
      description: 'Экономическое давление через отказ от товаров/услуг или остановку работы',
      effectiveness: 80
    },
    {
      title: 'Медиа-кампании',
      icon: 'Megaphone',
      description: 'Информационное влияние через СМИ, социальные сети и публичные дискуссии',
      effectiveness: 70
    },
    {
      title: 'Судебные иски',
      icon: 'Scale',
      description: 'Использование правовых механизмов для защиты прав и оспаривания решений',
      effectiveness: 90
    },
    {
      title: 'Гражданское наблюдение',
      icon: 'Eye',
      description: 'Мониторинг действий власти, выборов, бюджетных трат',
      effectiveness: 65
    }
  ];

  const civicSteps = [
    {
      step: 1,
      title: 'Осознание проблемы',
      description: 'Критическое мышление и способность видеть несправедливость или системные недостатки в обществе',
      action: 'Следите за новостями, читайте различные источники, задавайте вопросы'
    },
    {
      step: 2,
      title: 'Изучение контекста',
      description: 'Понимание исторических, правовых и социальных корней проблемы',
      action: 'Изучайте законы, читайте исследования, общайтесь с экспертами'
    },
    {
      step: 3,
      title: 'Поиск единомышленников',
      description: 'Объединение с людьми, разделяющими ваши ценности и цели',
      action: 'Вступайте в НКО, создавайте группы, посещайте мероприятия'
    },
    {
      step: 4,
      title: 'Выбор метода действия',
      description: 'Определение эффективной стратегии влияния на ситуацию',
      action: 'Анализируйте успешные кейсы, консультируйтесь с активистами'
    },
    {
      step: 5,
      title: 'Активное участие',
      description: 'Реализация конкретных действий для изменения ситуации',
      action: 'Участвуйте в акциях, создавайте контент, общайтесь с властью'
    },
    {
      step: 6,
      title: 'Рефлексия и адаптация',
      description: 'Анализ результатов и корректировка стратегии',
      action: 'Оценивайте достижения, учитесь на ошибках, делитесь опытом'
    }
  ];

  const societyTypes = [
    {
      type: 'Закрытое общество',
      icon: 'Lock',
      characteristics: ['Ограничение свобод', 'Цензура', 'Авторитарная власть', 'Низкая мобильность'],
      education: 'Догматическое, направлено на воспроизводство идеологии'
    },
    {
      type: 'Открытое общество',
      icon: 'Unlock',
      characteristics: ['Свобода слова', 'Плюрализм мнений', 'Демократия', 'Социальная мобильность'],
      education: 'Критическое мышление, плюрализм знаний, доступность'
    },
    {
      type: 'Гражданское общество',
      icon: 'Users',
      characteristics: ['Активные НКО', 'Самоорганизация', 'Контроль власти', 'Диалог с государством'],
      education: 'Гражданское просвещение, правовая грамотность, активизм'
    }
  ];

  const pollQuestions = [
    {
      id: 'q1',
      question: 'Считаете ли вы, что граждане могут реально влиять на политику государства?',
      options: ['Да, определённо', 'Скорее да', 'Скорее нет', 'Нет, не могут']
    },
    {
      id: 'q2',
      question: 'Какой механизм воздействия на власть вы считаете наиболее эффективным?',
      options: ['Выборы', 'Митинги и протесты', 'Петиции', 'СМИ и соцсети', 'Судебные иски']
    },
    {
      id: 'q3',
      question: 'Участвовали ли вы когда-либо в гражданских инициативах?',
      options: ['Да, регулярно', 'Да, несколько раз', 'Один раз', 'Нет, но хотел бы', 'Нет, не планирую']
    }
  ];

  const handlePollSubmit = () => {
    if (Object.keys(pollAnswers).length === pollQuestions.length) {
      setShowPollResults(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-heading text-foreground">Гражданское общество</h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'movements', label: 'Движения' },
                { id: 'mechanisms', label: 'Механизмы' },
                { id: 'steps', label: 'Позиция' },
                { id: 'education', label: 'Образование' },
                { id: 'poll', label: 'Опрос' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-foreground">
            Сила гражданского общества
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            История показывает: организованные граждане способны менять политические системы, 
            защищать права и создавать справедливое общество. Изучите механизмы влияния и примеры успеха.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('movements')} className="gap-2">
              <Icon name="BookOpen" size={20} />
              Изучить примеры
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('poll')} className="gap-2">
              <Icon name="BarChart3" size={20} />
              Пройти опрос
            </Button>
          </div>
        </div>
      </section>

      <section id="movements" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold font-heading mb-4">Примеры успешных движений</h2>
            <p className="text-lg text-muted-foreground">
              Исторические кейсы гражданских движений, изменивших Европу
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {movements.map((movement, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={movement.icon as any} className="text-primary" size={28} />
                    </div>
                    <Badge variant="secondary">{movement.year}</Badge>
                  </div>
                  <CardTitle className="text-2xl font-heading">{movement.title}</CardTitle>
                  <CardDescription className="text-base">{movement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold mb-1 text-foreground">Результат:</p>
                      <p className="text-sm text-muted-foreground">{movement.impact}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2 text-foreground">Методы:</p>
                      <div className="flex flex-wrap gap-2">
                        {movement.methods.map((method, i) => (
                          <Badge key={i} variant="outline">{method}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="mechanisms" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold font-heading mb-4">Механизмы воздействия на власть</h2>
            <p className="text-lg text-muted-foreground">
              Инструменты влияния граждан на политические процессы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechanisms.map((mechanism, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                    <Icon name={mechanism.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl font-heading">{mechanism.title}</CardTitle>
                  <CardDescription>{mechanism.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Эффективность:</span>
                      <span className="font-semibold text-primary">{mechanism.effectiveness}%</span>
                    </div>
                    <Progress value={mechanism.effectiveness} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold font-heading mb-4">Формирование гражданской позиции</h2>
            <p className="text-lg text-muted-foreground">
              Пошаговый процесс становления активного гражданина
            </p>
          </div>
          <div className="space-y-6">
            {civicSteps.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold font-heading">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
                        <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <p className="text-sm font-medium text-foreground">{item.action}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold font-heading mb-4">Роль образования и типы обществ</h2>
            <p className="text-lg text-muted-foreground">
              Как образование формирует различные типы социальных систем
            </p>
          </div>
          <Tabs defaultValue="types" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="types" className="text-base">Типы обществ</TabsTrigger>
              <TabsTrigger value="role" className="text-base">Роль образования</TabsTrigger>
            </TabsList>
            <TabsContent value="types" className="space-y-6">
              {societyTypes.map((society, idx) => (
                <Card key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon name={society.icon as any} className="text-primary" size={28} />
                      </div>
                      <CardTitle className="text-2xl font-heading">{society.type}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold mb-3 text-foreground">Характеристики:</p>
                        <ul className="space-y-2">
                          {society.characteristics.map((char, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-muted-foreground">{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-3 text-foreground">Роль образования:</p>
                        <p className="text-muted-foreground leading-relaxed">{society.education}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="role">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Образование как катализатор перемен</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Icon name="GraduationCap" className="text-primary" size={24} />
                      Критическое мышление
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Качественное образование учит анализировать информацию, выявлять манипуляции, 
                      формировать независимые суждения. Это основа для осознанного участия в общественной жизни.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Icon name="BookOpen" className="text-primary" size={24} />
                      Правовая грамотность
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Знание прав и механизмов их защиты позволяет гражданам эффективно отстаивать интересы, 
                      использовать законные инструменты влияния на власть и защищаться от произвола.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Users" className="text-primary" size={24} />
                      Социальная солидарность
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Образование воспитывает эмпатию, понимание общественных процессов и важности коллективного действия. 
                      Это создаёт предпосылки для формирования сильного гражданского общества.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="poll" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold font-heading mb-4">Интерактивный опрос</h2>
            <p className="text-lg text-muted-foreground">
              Поделитесь своим мнением о гражданском участии
            </p>
          </div>
          <Card className="animate-fade-in-up">
            <CardContent className="p-8">
              {!showPollResults ? (
                <div className="space-y-8">
                  {pollQuestions.map((q, idx) => (
                    <div key={q.id} className="space-y-4">
                      <h4 className="font-semibold text-lg text-foreground">
                        {idx + 1}. {q.question}
                      </h4>
                      <RadioGroup
                        value={pollAnswers[q.id] || ''}
                        onValueChange={(value) => setPollAnswers({ ...pollAnswers, [q.id]: value })}
                      >
                        {q.options.map((option, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <RadioGroupItem value={option} id={`${q.id}-${i}`} />
                            <Label htmlFor={`${q.id}-${i}`} className="cursor-pointer">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                  <Button 
                    size="lg" 
                    className="w-full" 
                    onClick={handlePollSubmit}
                    disabled={Object.keys(pollAnswers).length !== pollQuestions.length}
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить ответы
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-6 animate-fade-in">
                  <div className="p-6 bg-primary/10 rounded-lg">
                    <Icon name="CheckCircle" className="text-primary mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold font-heading mb-2">Спасибо за участие!</h3>
                    <p className="text-muted-foreground">
                      Ваше мнение важно для понимания гражданской активности в обществе.
                    </p>
                  </div>
                  <div className="text-left space-y-4">
                    <h4 className="font-semibold text-lg">Ваши ответы:</h4>
                    {pollQuestions.map((q, idx) => (
                      <div key={q.id} className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">{q.question}</p>
                        <p className="font-medium text-foreground">{pollAnswers[q.id]}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" onClick={() => { setPollAnswers({}); setShowPollResults(false); }}>
                    Пройти опрос заново
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold font-heading mb-4">Контакты и обратная связь</h2>
            <p className="text-lg text-muted-foreground">
              Есть вопросы или предложения? Свяжитесь с нами
            </p>
          </div>
          <Card className="animate-fade-in-up">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.'); }}>
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Тема</Label>
                  <Input id="subject" placeholder="Вопрос о гражданских движениях" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Ваше сообщение..." rows={6} required />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex justify-center gap-6">
                  <a href="mailto:info@civic-society.org" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Mail" size={20} />
                    <span>info@civic-society.org</span>
                  </a>
                  <a href="https://t.me/civic_society" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Send" size={20} />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold font-heading mb-4">Гражданское общество</h3>
          <p className="text-background/80 mb-6">
            Просветительский проект о механизмах гражданского участия и демократических ценностях
          </p>
          <p className="text-sm text-background/60">
            © 2024 Все права защищены. Создано для образовательных целей.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
