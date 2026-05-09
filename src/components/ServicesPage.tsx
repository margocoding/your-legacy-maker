import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Удаление негатива",
    image: "/images/hero_image.png",
    desc: "Изымаем любые нежелательные материалы из интернета",
  },
  {
    title: "Формирование имиджа",
    image: "/images/hero_image.png",
    desc: "Создаём положительный информационный фон",
  },
  {
    title: "Защита репутации",
    image: "/images/hero_image.png",
    desc: "Мониторинг и превентивная защита от атак",
  },
  {
    title: "Аудит репутации",
    image: "/images/hero_image.png",
    desc: "Полный анализ текущего состояния репутации",
  },
];

const ServicesPage = () => (
  <section id="услуги-страница" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Услуги</span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Наши услуги</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/40 transition-colors">
            <div className="aspect-video bg-secondary/50 overflow-hidden">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <h3 className="text-foreground font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <a href="#контакты">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Заказать
                  <ArrowRight size={14} className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPage;
