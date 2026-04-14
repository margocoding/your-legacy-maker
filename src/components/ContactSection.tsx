import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="контакты" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Связаться</span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Контакты</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <p className="text-muted-foreground leading-relaxed">
            Проведём бесплатную аудит-консультацию и дадим точный ответ по вашей ситуации за 15 минут. Все обращения строго конфиденциальны.
          </p>

          <div className="space-y-5">
            {[
              { icon: Phone, label: "+7 (999) 123-45-67", sub: "Ежедневно 9:00–20:00" },
              { icon: Mail, label: "info@reputguard.ru", sub: "Ответим в течение часа" },
              { icon: MapPin, label: "Москва, Россия", sub: "Работаем по всему миру" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">{c.label}</p>
                  <p className="text-muted-foreground text-sm">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-foreground font-bold text-xl mb-6">Оставьте заявку</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Ваше имя" className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
            <input type="tel" placeholder="Телефон" className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
            <input type="email" placeholder="Email" className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
            <textarea placeholder="Опишите вашу ситуацию" rows={4} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6">
              <Send size={16} className="mr-2" />
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
