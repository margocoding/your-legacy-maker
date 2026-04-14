import {
  FileX,
  ImageOff,
  Video,
  UserX,
  MessageSquareX,
  Database,
} from "lucide-react";

const items = [
  { icon: FileX, label: "Статьи и публикации" },
  { icon: ImageOff, label: "Фото и изображения" },
  { icon: Video, label: "Видеоматериалы" },
  { icon: UserX, label: "Фейковые аккаунты" },
  { icon: MessageSquareX, label: "Негативные отзывы" },
  { icon: Database, label: "Личные данные" },
];

const RemovalSection = () => (
  <section id="о нас" className="py-20 md:py-32 bg-card/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Удаление контента
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
          Что мы удаляем
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Изымаем любые нежелательные материалы из интернета легальными методами
          с пожизненной гарантией
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <item.icon size={28} className="text-accent" />
            </div>
            <span className="text-foreground text-sm font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RemovalSection;
