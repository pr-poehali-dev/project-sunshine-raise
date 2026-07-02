import { ArrowRight } from "lucide-react";

const stats = [
  { value: "30 МВт", label: "СУММАРНАЯ МОЩНОСТЬ" },
  { value: "3600", label: "СЕРВЕРНЫХ СТОЕК" },
  { value: "4 Га", label: "ПЛОЩАДЬ КЛАСТЕРА" },
  { value: "99,982%", label: "ДОСТУПНОСТЬ" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary border border-primary/30 rounded-full px-3 py-1">
              <span>МОДУЛЬНЫЙ ЦОД · ЛЕНИНГРАДСКАЯ ОБЛАСТЬ</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
              Готовая площадка для ваших серверов и AI-кластеров
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
              Модульный ЦОД «Позитрон» — инженерная инфраструктура мощностью 30 МВт с собственной генерацией и жидкостным охлаждением. Размещайте вычислительные мощности любого масштаба без капитального строительства.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#request"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Оставить заявку
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#model"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
              >
                Модель ЦОД
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl text-primary">{s.value}</p>
                  <p className="text-[10px] font-mono text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-xl">
              <img
                src="https://cdn.poehali.dev/projects/68d82088-8b02-49c3-a021-a205ff7b1889/files/cd977412-782d-4ffe-b26c-58665aa4e234.jpg"
                alt="Модульный центр обработки данных Позитрон"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 top-0 flex justify-between text-[10px] font-mono text-white/90 p-4 bg-gradient-to-b from-black/40 to-transparent">
                <span>ПЛОЩАДКА · ЛЕНОБЛАСТЬ</span>
                <span>СОБСТВЕННАЯ ГЕНЕРАЦИЯ ГПУ</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-lg">
                <p className="text-xs font-mono">БАЗОВЫЙ МОДУЛЬ</p>
                <p className="text-lg font-serif">2 МВт → 4 МВт</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
