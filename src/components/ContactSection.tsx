import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const ContactSection = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(true);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 0) {
      if (value.startsWith("7")) {
        value =
          "+7 (" +
          value.slice(1, 4) +
          ") " +
          value.slice(4, 7) +
          "-" +
          value.slice(7, 9) +
          "-" +
          value.slice(9);
      } else {
        value = "+" + value;
      }
    }
    setPhoneValue(value);
  };
  return (
    <section id="контакты" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Связаться
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
            Контакты
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Проведём бесплатную аудит-консультацию и дадим точный ответ по
              вашей ситуации за 15 минут. Все обращения строго конфиденциальны.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: "+7 (999) 849-99-37",
                  sub: "Ежедневно 9:00–20:00",
                },
                {
                  icon: Mail,
                  label: "majoraserm@gmail.com",
                  sub: "Ответим в течение часа",
                },
                {
                  icon: MessageCircle,
                  label: "@majoraserm",
                  sub: "Ответим в Telegram",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">{c.label}</h3>
                    <p className="text-muted-foreground text-sm">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="text-foreground font-bold text-xl mb-6">
              Оставьте заявку
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={phoneValue}
                onChange={handlePhoneChange}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
              <textarea
                placeholder="Опишите вашу ситуацию"
                rows={4}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />

              <div className="flex items-start gap-3 py-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) =>
                    setAgreedToTerms(checked === true)
                  }
                  defaultChecked={true}
                  className="mt-1"
                />
                <label
                  htmlFor="terms"
                  className="text-muted-foreground text-xs leading-relaxed cursor-pointer"
                >
                  Согласен на обработку персональных данных в соответствии с{" "}
                  <a href="#" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </label>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                disabled={!agreedToTerms}
              >
                <Send size={16} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
