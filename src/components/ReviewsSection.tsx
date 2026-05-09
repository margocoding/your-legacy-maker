import { Star } from "lucide-react";

// Updated: Test change for commit tracking
const reviews = [
  { name: "Александр К.", role: "Гендиректор IT-компании", text: "Удалили компромат за 5 дней. Работают профессионально, конфиденциально. Рекомендую!", rating: 5 },
  { name: "Елена В.", role: "Предприниматель", text: "Спасли мою репутацию после чёрного пиара. Теперь в топе только положительные отзывы.", rating: 5 },
  { name: "Дмитрий П.", role: "Политический деятель", text: "Работаю с MajoraSerm уже год. Надёжная защита и постоянный мониторинг.", rating: 5 },
];

const ReviewsSection = () => (
  <section id="отзывы" className="py-20 md:py-32 bg-card/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Отзывы</span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Что говорят клиенты</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6">
            <div className="flex gap-1 mb-4">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{r.text}"</p>
            <div>
              <p className="text-foreground font-semibold text-sm">{r.name}</p>
              <p className="text-muted-foreground text-xs">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
