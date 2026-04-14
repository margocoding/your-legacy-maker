import { Trash2, TrendingUp, ShieldCheck, Search } from "lucide-react";

const services = [
  {
    icon: Trash2,
    title: "Удаление негатива",
    desc: "Изымаем любые нежелательные материалы из интернета — статьи, отзывы, фото, видео, личные данные.",
    details: "Работаем со всеми площадками: поисковые системы, соцсети, форумы, новостные порталы. Удаление или деиндексация контента с юридическими гарантиями.",
  },
  {
    icon: TrendingUp,
    title: "Формирование имиджа",
    desc: "Создаём положительный информационный фон и надёжную репутацию в интернете.",
    details: "Публикации в авторитетных СМИ, создание и продвижение позитивного контента, управление поисковой выдачей (SERM).",
  },
  {
    icon: ShieldCheck,
    title: "Защита репутации",
    desc: "Мониторинг и превентивная защита от информационных атак и негативных публикаций.",
    details: "Круглосуточный мониторинг упоминаний, раннее выявление угроз, оперативное реагирование на кризисные ситуации.",
  },
  {
    icon: Search,
    title: "Аудит репутации",
    desc: "Полный анализ текущего состояния вашей репутации в интернете.",
    details: "Детальный отчёт с рекомендациями, анализ поисковой выдачи, оценка рисков и стратегия улучшения.",
  },
];

const ServicesSection = () => {
  return (
    <section id="услуги" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Наши услуги</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Что мы делаем</h2>
        </div>

        {/* Short cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex gap-5 p-6 rounded-xl bg-secondary/30 border border-border/50">
              <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-gradient)" }}>
                <s.icon size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-foreground font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
