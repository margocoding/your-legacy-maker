import { Clock, Scale, Eye, HeartHandshake, Award, Zap } from "lucide-react";

const advantages = [
  { icon: Clock, title: "Оперативность", desc: "Начинаем работу в день обращения" },
  { icon: Scale, title: "Легальность", desc: "Только законные и безопасные методы" },
  { icon: Eye, title: "Конфиденциальность", desc: "Полная анонимность клиента" },
  { icon: HeartHandshake, title: "Без предоплаты", desc: "В 70% случаев оплата по результату" },
  { icon: Award, title: "Гарантия", desc: "Пожизненная гарантия на удаление" },
  { icon: Zap, title: "Опыт", desc: "Более 1 350 успешных кейсов" },
];

const AdvantagesSection = () => (
  <section id="преимущества" className="py-20 md:py-32 bg-card/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Почему мы</span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Преимущества</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((a) => (
          <div key={a.title} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <a.icon size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="text-foreground font-bold mb-1">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
