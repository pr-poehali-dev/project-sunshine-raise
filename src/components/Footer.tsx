import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                <span className="text-[10px] font-mono text-primary-foreground">П</span>
              </div>
              <span className="font-serif text-lg">Позитрон</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Модульный центр обработки данных мощностью 30 МВт в Ленинградской области. Готовая площадка для серверов и AI-кластеров.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-4">НАВИГАЦИЯ</h4>
            <ul className="space-y-2">
              {[
                { label: "Преимущества", href: "#features" },
                { label: "Возможности", href: "#pricing" },
                { label: "Модель ЦОД", href: "#model" },
                { label: "О компании", href: "#about" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-4">ДОКУМЕНТЫ</h4>
            <ul className="space-y-2">
              {["Политика конфиденциальности", "Условия использования", "Реквизиты"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-4">КОНТАКТЫ</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Ленинградская область</li>
              <li>
                <a href="mailto:info@positron.ru" className="hover:text-primary transition-colors">
                  info@positron.ru
                </a>
              </li>
              <li>
                <a href="tel:+78120000000" className="hover:text-primary transition-colors">
                  +7 (812) 000-00-00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">© 2026 Позитрон · Модульный ЦОД</p>
          <p className="text-xs text-muted-foreground">Ленинградская область</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
