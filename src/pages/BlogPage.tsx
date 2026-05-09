import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { posts } from "@/utils/data/posts";

const BlogPage = () => {
  const navigate = useNavigate();

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
            <span className="text-foreground font-semibold">Блог</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Блог
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Полезные статьи и руководства по управлению репутацией в интернете
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors group cursor-pointer"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Автор: {post.author}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-primary group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Подпишитесь на новости
          </h2>
          <p className="text-muted-foreground mb-8">
            Получайте свежие статьи и рекомендации по управлению репутацией
            прямо в почту
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              required
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              Подписаться
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
