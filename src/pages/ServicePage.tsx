import { ArrowLeft, CheckCircle } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const services = [
  {
    id: "removal",
    title: "Удаление негатива",
    slug: "removal",
    shortDesc: "Изымаем любые нежелательные материалы из интернета",
    fullDesc:
      "Наша компания предоставляет профессиональные услуги по удалению негативной информации из интернета. Мы работаем со всеми платформами и гарантируем полное удаление компрометирующего контента.",
    image: "/images/services-removal.jpg",
    benefits: [
      "Удаление статей и публикаций",
      "Удаление фото и видео",
      "Удаление личных данных",
      "Работа со всеми поисковыми системами",
      "Пожизненная гарантия на удаление",
      "Полная конфиденциальность",
    ],
    price: "от 50 000 ₽",
    process: [
      {
        step: 1,
        title: "Анализ",
        desc: "Проводим полный аудит интернета на предмет негативной информации",
      },
      {
        step: 2,
        title: "Стратегия",
        desc: "Разрабатываем индивидуальную стратегию удаления контента",
      },
      {
        step: 3,
        title: "Реализация",
        desc: "Удаляем контент через юридические механизмы площадок",
      },
      {
        step: 4,
        title: "Контроль",
        desc: "Постоянно мониторим результаты и гарантируем качество",
      },
    ],
  },
  {
    id: "branding",
    title: "Формирование имиджа",
    slug: "branding",
    shortDesc: "Создаём положительный информационный фон",
    fullDesc:
      "Формируем устойчивую положительную репутацию вашей компании или личности в интернете через размещение авторитетного контента.",
    image: "/images/services-branding.jpg",
    benefits: [
      "Размещение в авторитетных СМИ",
      "Создание позитивного контента",
      "SERM - управление поисковой выдачей",
      "Повышение видимости в интернете",
      "Привлечение доверия аудитории",
      "Увеличение конверсии",
    ],
    price: "от 80 000 ₽",
    process: [
      {
        step: 1,
        title: "Диагностика",
        desc: "Анализируем текущее состояние вашего онлайн-имиджа",
      },
      {
        step: 2,
        title: "Планирование",
        desc: "Создаём план размещения позитивного контента",
      },
      {
        step: 3,
        title: "Реализация",
        desc: "Размещаем контент в топовых изданиях и платформах",
      },
      {
        step: 4,
        title: "Оптимизация",
        desc: "Оптимизируем SERM для максимальной видимости",
      },
    ],
  },
  {
    id: "protection",
    title: "Защита репутации",
    slug: "protection",
    shortDesc: "Мониторинг и превентивная защита от атак",
    fullDesc:
      "Круглосуточный мониторинг упоминаний вашего имени, компании или бренда в интернете с автоматическим реагированием на угрозы.",
    image: "/images/services-protection.jpg",
    benefits: [
      "Круглосуточный мониторинг",
      "Раннее выявление угроз",
      "Быстрое реагирование на кризисы",
      "Защита от информационных атак",
      "Предотвращение репутационного ущерба",
      "Юридическая поддержка",
    ],
    price: "от 30 000 ₽/месяц",
    process: [
      {
        step: 1,
        title: "Подготовка",
        desc: "Настраиваем системы мониторинга и оповещений",
      },
      {
        step: 2,
        title: "Мониторинг",
        desc: "Ведём постоянный контроль упоминаний в интернете",
      },
      {
        step: 3,
        title: "Реагирование",
        desc: "Оперативно реагируем на любые угрозы репутации",
      },
      {
        step: 4,
        title: "Анализ",
        desc: "Предоставляем еженедельные отчёты и рекомендации",
      },
    ],
  },
  {
    id: "audit",
    title: "Аудит репутации",
    slug: "audit",
    shortDesc: "Полный анализ состояния репутации в интернете",
    fullDesc:
      "Комплексный анализ текущего состояния вашей репутации с детальным отчётом, рекомендациями и стратегией улучшения.",
    image: "/images/services-audit.jpg",
    benefits: [
      "Анализ поисковой выдачи",
      "Оценка репутационных рисков",
      "Проверка в социальных сетях",
      "Анализ упоминаний на форумах",
      "Детальный отчёт с рекомендациями",
      "Стратегия улучшения репутации",
    ],
    price: "от 20 000 ₽",
    process: [
      {
        step: 1,
        title: "Сбор информации",
        desc: "Собираем всю информацию о вас в интернете",
      },
      {
        step: 2,
        title: "Анализ",
        desc: "Анализируем полученные данные и выявляем риски",
      },
      {
        step: 3,
        title: "Оценка",
        desc: "Оцениваем влияние информации на репутацию",
      },
      {
        step: 4,
        title: "Отчёт",
        desc: "Предоставляем подробный отчёт с рекомендациями",
      },
    ],
  },
];

const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [phoneValue, setPhoneValue] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(true);

  const service = services.find((s) => s.slug === serviceId);

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

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Услуга не найдена
          </h1>
          <Button
            onClick={() => navigate("/")}
            className="bg-primary hover:bg-primary/90"
          >
            <ArrowLeft size={16} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </main>
    );
  }

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
            <a href="/#услуги" className="text-primary hover:underline">
              Услуги
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-semibold">
              {service.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft size={20} />
            Вернуться назад
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            {service.fullDesc}
          </p>
          <div className="text-2xl font-bold text-primary">{service.price}</div>
        </div>
      </section>

      {/* Image */}
      {/* {service.image && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <img
              src={service.image}
              alt={service.title}
              className="w-full rounded-xl object-cover max-h-96"
            />
          </div>
        </section>
      )} */}

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Что вы получаете
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary shrink-0 mt-1" />
                <p className="text-foreground text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Как мы работаем
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-primary">
                    {p.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Заказать услугу
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
                  Сообщение*
                </label>
                <textarea
                  placeholder="Опишите вашу ситуацию"
                  rows={5}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex items-center gap-3 py-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) =>
                    setAgreedToTerms(checked === true)
                  }
                  defaultChecked={true}
                />
                <label
                  htmlFor="terms"
                  className="text-muted-foreground text-xs leading-relaxed cursor-pointer"
                >
                  Согласен на обработку персональных данных*
                </label>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                disabled={!agreedToTerms}
              >
                Заказать консультацию
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
