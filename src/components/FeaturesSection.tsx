import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Zap",
    tag: "МОЩНОСТЬ",
    title: "30 МВт суммарной мощности",
    description:
      "Базовый модуль 2 МВт с возможностью объединения в блок 4 МВт. Готовая энергетическая инфраструктура прямо на площадке.",
  },
  {
    icon: "Fuel",
    tag: "ЭНЕРГИЯ",
    title: "Собственная генерация",
    description:
      "Электроснабжение за счёт собственной выработки на газогенераторных установках (ГПУ). Независимость от внешних сетей.",
  },
  {
    icon: "Server",
    tag: "ЁМКОСТЬ",
    title: "3600 серверных стоек",
    description:
      "Единая площадка для размещения вычислительных мощностей любого масштаба — от корпоративных серверов до крупных AI-кластеров.",
  },
  {
    icon: "MapPin",
    tag: "ЛОКАЦИЯ",
    title: "4 Га в Ленинградской области",
    description:
      "Благоприятный климат, развитая энергетическая и транспортная инфраструктура, доступ к магистральным каналам связи.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-primary tracking-wider">КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-lg leading-tight">
              Готовая инженерная площадка под ключ
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Всё необходимое для запуска вычислительных мощностей уже на месте.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-2xl p-6 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon name={item.icon} className="text-primary" size={22} fallback="Zap" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground mb-2">{item.tag}</span>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
