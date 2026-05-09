import { MapPin, Phone, Mail, Clock, Users, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const ContactsPage = () => {
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

  const managers = [
    {
      name: "Александр Петров",
      role: "Менеджер по работе с клиентами",
      phone: "+7 (999) 123-45-67",
      email: "alex@majoraserm.ru",
    },
    {
      name: "Виктория Сидорова",
      role: "Менеджер по VIP клиентам",
      phone: "+7 (999) 234-56-78",
      email: "victoria@majoraserm.ru",
    },
    {
      name: "Игорь Морозов",
      role: "Технический консультант",
      phone: "+7 (999) 345-67-89",
      email: "igor@majoraserm.ru",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="bg-card/50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <a href="/" className="text-primary hover:underline">
              Главная
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-semibold">Контакты</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Контакты
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Свяжитесь с нами удобным для вас способом. Мы всегда готовы помочь и
            ответить на ваши вопросы.
          </p>
        </div>
      </section>

      {/* Main Contacts Info */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Phone */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone size={24} className="text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">
                  Телефон
                </h2>
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+79998499937"
                    className="text-primary font-semibold hover:underline text-lg"
                  >
                    +7 (999) 849-99-37
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Основной номер
                  </p>
                </li>
                <li>
                  <p className="text-muted-foreground text-sm">
                    Ежедневно 9:00–20:00
                  </p>
                </li>
              </ul>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail size={24} className="text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">Email</h2>
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:majoraserm@gmail.com"
                    className="text-primary font-semibold hover:underline"
                  >
                    majoraserm@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Ответим в течение часа
                  </p>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={24} className="text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">Адрес</h2>
              </div>
              <p className="text-muted-foreground">
                Москва, ул. Пушкина, дом 5, офис 123
              </p>
            </div>

            {/* Schedule */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock size={24} className="text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">
                  График работы
                </h2>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Пн–Пт: 9:00–20:00</li>
                <li>Сб: 10:00–18:00</li>
                <li>Вс: Выходной</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Реквизиты компании
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Основные реквизиты
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <p className="text-sm font-semibold text-foreground">
                    Компания
                  </p>
                  <p>MajoraSerm LLC</p>
                </li>
                <li>
                  <p className="text-sm font-semibold text-foreground">
                    ОГРНИП
                  </p>
                  <p>326700000024895</p>
                </li>
                <li>
                  <p className="text-sm font-semibold text-foreground">ИНН</p>
                  <p>770123456789</p>
                </li>
                <li>
                  <p className="text-sm font-semibold text-foreground">КПП</p>
                  <p>770101001</p>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Банковские реквизиты
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <p className="text-sm font-semibold text-foreground">Счёт</p>
                  <p>40802810123450001234</p>
                </li>
                <li>
                  <p className="text-sm font-semibold text-foreground">БИК</p>
                  <p>044525225</p>
                </li>
                <li>
                  <p className="text-sm font-semibold text-foreground">
                    Корреспондентский счёт
                  </p>
                  <p>30101810500000000225</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Managers */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Контакты менеджеров
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managers.map((manager) => (
              <div
                key={manager.email}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users size={20} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {manager.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {manager.role}
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href={`tel:${manager.phone}`}
                      className="text-primary hover:underline text-sm"
                    >
                      {manager.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${manager.email}`}
                      className="text-primary hover:underline text-sm"
                    >
                      {manager.email}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Отправить сообщение
          </h2>
          <div className="bg-card border border-border rounded-xl p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ваше имя*
                </label>
                <input
                  type="text"
                  placeholder="Введите ваше имя"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Телефон*
                </label>
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={phoneValue}
                  onChange={handlePhoneChange}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Тема обращения*
                </label>
                <select className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                  <option value="">Выберите тему</option>
                  <option value="removal">Удаление негатива</option>
                  <option value="reputation">Формирование имиджа</option>
                  <option value="protection">Защита репутации</option>
                  <option value="audit">Аудит репутации</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Сообщение*
                </label>
                <textarea
                  placeholder="Опишите вашу ситуацию"
                  rows={5}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex items-start gap-3 py-2">
                <Checkbox
                  id="privacy-terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) =>
                    setAgreedToTerms(checked === true)
                  }
                  defaultChecked={true}
                  className="mt-1"
                />
                <label
                  htmlFor="privacy-terms"
                  className="text-muted-foreground text-xs leading-relaxed cursor-pointer"
                >
                  Согласен на обработку персональных данных в соответствии с{" "}
                  <a href="#" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                  *
                </label>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                disabled={!agreedToTerms}
              >
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;
