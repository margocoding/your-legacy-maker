import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Услуги", href: "/#услуги" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/contacts" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                M
              </span>
            </div>
            <div>
              <span className="text-foreground font-bold text-lg tracking-tight">
                MajoraSerm
              </span>
              <span className="hidden md:block text-muted-foreground text-xs">
                Управление репутацией
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+79998499937"
              className="flex items-center gap-2 text-foreground font-semibold text-sm"
            >
              <Phone size={16} className="text-primary" />
              +7 (999) 849-99-37
            </a>
            <a
              href="mailto:majoraserm@gmail.com"
              className="flex items-center gap-2 text-muted-foreground text-sm"
            >
              <Mail size={16} className="text-primary" />
              majoraserm@gmail.com
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
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-muted-foreground hover:text-foreground text-sm font-medium py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+79998499937"
            className="block text-foreground font-semibold text-sm py-2"
          >
            +7 (999) 849-99-37
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
