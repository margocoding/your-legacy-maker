import { Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  { title: "Как удалить негатив из поисковиков", date: "15 янв 2026", read: "5 мин", excerpt: "Пошаговая инструкция по удалению компрометирующей информации..." },
  { title: "SERM vs ORM: в чём разница?", date: "10 янв 2026", read: "4 мин", excerpt: "Разбираем ключевые отличия систем управления репутацией..." },
  { title: "Защита от чёрного пиара", date: "5 янв 2026", read: "6 мин", excerpt: "Методы предотвращения и борьбы с информационными атаками..." },
];

const BlogSection = () => (
  <section id="блог" className="py-20 md:py-32 bg-card/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Блог</span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Статьи и новости</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {blogPosts.map((post, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
              <span className="flex items-center gap-1"><Clock size={12} />{post.read}</span>
            </div>
            <h3 className="text-foreground font-bold text-lg mb-3">{post.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
            <a href="#" className="text-primary text-sm font-semibold hover:underline">Читать далее →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
