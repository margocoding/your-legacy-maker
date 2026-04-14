import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen space-y-10 items-center py-20"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Shield size={16} className="text-primary" />
            <span className="text-primary text-sm font-medium">
              Профессиональное управление репутацией
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Обеспечим <span className="text-primary">безупречную</span>{" "}
            репутацию в Интернете
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Для компании, бренда, важной персоны или медийной личности.
            Легально, конфиденциально, с гарантией результата.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#контакты">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base"
              >
                Бесплатная консультация
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </a>
            <a href="#услуги">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary px-8 py-6 text-base"
              >
                Узнать подробнее
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* 4 feature cards at bottom */}
      <div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 rounded-t-xl overflow-hidden">
            {[
              {
                num: "01",
                title: "100% конфиденциальность",
                desc: "с момента обращения",
              },
              {
                num: "02",
                title: "Работа на результат",
                desc: "в 70% случаев без предоплаты",
              },
              {
                num: "03",
                title: "Пожизненная гарантия",
                desc: "на удаление контента",
              },
              {
                num: "04",
                title: "Легальные методы",
                desc: "и безопасные подходы",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-card/80 backdrop-blur-sm p-6 md:p-8"
              >
                <span className="text-primary/30 text-4xl font-bold">
                  {item.num}
                </span>
                <h3 className="text-foreground font-bold mt-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
