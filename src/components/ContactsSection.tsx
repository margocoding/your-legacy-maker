import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const contacts = [
  { icon: Phone, label: "+7 (999) 849-99-37", sub: "Ежедневно 9:00–20:00" },
  { icon: Mail, label: "majoraserm@gmail.com", sub: "Ответим в течение часа" },
  { icon: MessageCircle, label: "@majoraserm", sub: "Telegram" },
  { icon: MapPin, label: "Работаем онлайн", sub: "По всему миру" },
];

const ContactsSection = () => (
  <section id="контакты-страница" className="py-20 md:py-32 bg-card/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Связь</span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Контакты</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {contacts.map((c) => (
          <div key={c.label} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <c.icon size={20} className="text-primary" />
            </div>
            <p className="text-foreground font-semibold">{c.label}</p>
            <p className="text-muted-foreground text-sm mt-1">{c.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactsSection;
