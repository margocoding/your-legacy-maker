import { Building2, Factory, Crown, Star } from "lucide-react";

const categories = [
  {
    icon: Building2,
    title: "Крупные компании",
    desc: "Защита корпоративной репутации, управление отзывами и публикациями о бренде.",
  },
  {
    icon: Factory,
    title: "Предприятия",
    desc: "Формирование доверия клиентов, партнёров и инвесторов к вашему бизнесу.",
  },
  {
    icon: Crown,
    title: "Политики и VIP-персоны",
    desc: "Конфиденциальное управление публичным имиджем и защита от информационных атак.",
  },
  {
    icon: Star,
    title: "Медийные личности и состоятельные люди",
    desc: "Контроль информационного поля, защита частной жизни и репутации.",
  },
];

const TrustSection = () => (
  <section id="нам доверяют" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Клиенты
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
          Нам доверяют
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <div
            key={c.title}
            className="relative bg-card border border-border rounded-xl p-8 text-center hover:border-primary/40 transition-all group overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <c.icon size={30} className="text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-3">
                {c.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
