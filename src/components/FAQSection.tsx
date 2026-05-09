import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Как быстро вы удаляете негатив?", a: "В большинстве случаев первые результаты видны уже через 24-48 часов. Полное удаление занимает от 3 до 14 дней в зависимости от сложности." },
  { q: "Гарантируете ли вы результат?", a: "Да, мы работаем с пожизненной гарантией на удаление. В 70% случаев оплата производится только после достижения результата." },
  { q: "Это законно?", a: "Абсолютно. Мы используем только легальные методы: работа через правовые механизмы площадок, GDPR, законы о персональных данных." },
  { q: "Будет ли конфиденциально?", a: "Полная анонимность гарантирована. Мы не разглашаем информацию о клиентах и заключаем NDA по запросу." },
  { q: "Работаете ли вы с физлицами?", a: "Да, мы помогаем как компаниям, так и частным лицам — политикам, VIP-персонам, медийным личностям." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Вопросы</span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Вопрос-Ответ</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:no-underline py-4">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
