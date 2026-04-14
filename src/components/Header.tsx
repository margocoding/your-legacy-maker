import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  "Услуги",
  "О нас",
  "Нам доверяют",
  "Преимущества",
  "Контакты",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                R
              </span>
            </div>
            <div>
              <span className="text-foreground font-bold text-lg tracking-tight">
                ReputGuard
              </span>
              <span className="hidden md:block text-muted-foreground text-xs">
                Управление репутацией
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+79991234567"
              className="flex items-center gap-2 text-foreground font-semibold text-sm"
            >
              <Phone size={16} className="text-primary" />
              +7 (999) 123-45-67
            </a>
            <a
              href="mailto:info@reputguard.ru"
              className="flex items-center gap-2 text-muted-foreground text-sm"
            >
              <Mail size={16} className="text-primary" />
              info@reputguard.ru
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border p-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block text-muted-foreground hover:text-foreground text-sm font-medium py-2"
            >
              {item}
            </a>
          ))}
          <a
            href="tel:+79991234567"
            className="block text-foreground font-semibold text-sm py-2"
          >
            +7 (999) 123-45-67
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
