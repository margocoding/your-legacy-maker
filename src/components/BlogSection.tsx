import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { posts as blogPosts } from "@/utils/data/posts";

const BlogSection = () => (
  <section id="блог" className="py-20 md:py-32 bg-card/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Блог
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
          Статьи и новости
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {blogPosts.map((post, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>
            <h3 className="text-foreground font-bold text-lg mb-3">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-primary text-sm font-semibold hover:underline"
            >
              Читать далее →
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
