import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <span className="text-xs font-mono text-primary-foreground">П</span>
          </div>
          <span className="font-serif text-lg tracking-tight">Позитрон</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Преимущества
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Дорожная карта
          </a>
          <a href="#model" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Модель ЦОД
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            О компании
          </a>
        </nav>

        <a
          href="#request"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Оставить заявку
        </a>
      </div>
    </header>
  );
};

export default Header;
