import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { posts } from "@/utils/data/posts";

const BlogPostPage = () => {
  const { postSlug } = useParams<{ postSlug: string }>();
  const navigate = useNavigate();

  const post = posts.find((p) => p.slug === postSlug);

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Статья не найдена
          </h1>
          <Button
            onClick={() => navigate("/blog")}
            className="bg-primary hover:bg-primary/90"
          >
            <ArrowLeft size={16} className="mr-2" />
            Вернуться в блог
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
            <a href="/blog" className="text-primary hover:underline">
              Блог
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-semibold">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft size={20} />
            Вернуться в блог
          </button>

          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                {post.author}
              </div>
            </div>
          </header>

          <div className="mb-12 space-y-10">
            {post.paragraphs.map((paragraph) => (
              <section key={paragraph.heading}>
                <h2 className="text-2xl font-bold text-foreground mt-6 mb-3">
                  {paragraph.heading}
                </h2>
                {paragraph.image && (
                  <img
                    src={paragraph.image}
                    alt={paragraph.heading}
                    className="w-full rounded-xl object-cover mb-6"
                  />
                )}
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {paragraph.text}
                </p>
              </section>
            ))}
          </div>

          {/* Related Posts */}
          <section className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Похожие статьи
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                    className="bg-card border border-border rounded-xl p-6 cursor-pointer hover:border-primary/40 transition-colors group"
                  >
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {relatedPost.date}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

export default BlogPostPage;
