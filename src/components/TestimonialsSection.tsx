import Icon from "@/components/ui/icon";

const techSpecs = [
  {
    icon: "Droplets",
    title: "Жидкостное охлаждение (LCS)",
    description:
      "Прямой контакт с отводом тепла до 100 кВт на стойку. Поддержание температуры теплоносителя 7…35 °C. Совместимо с GPU-кластерами любого производителя.",
  },
  {
    icon: "ShieldCheck",
    title: "Класс надёжности Tier III",
    description:
      "Одновременное обслуживание любого элемента без остановки IT-нагрузки. Доступность 99,982% — годовой простой всего около 1,5 часа.",
  },
  {
    icon: "Fuel",
    title: "Собственная энергетика",
    description:
      "Электроснабжение от газогенераторных установок (ГПУ). Готовая энергетическая инфраструктура на площадке, независимость от внешних сетей.",
  },
  {
    icon: "LayoutGrid",
    title: "Модульная архитектура",
    description:
      "Базовый модуль 2 МВт, объединение в блоки по 4 МВт. Поэтапное масштабирование до 30 МВт и 3600 стоек.",
  },
];

const numbers = [
  { value: "30 МВт", label: "мощность кластера" },
  { value: "3600", label: "серверных стоек" },
  { value: "4 Га", label: "площадь участка" },
  { value: "100 кВт", label: "отвод тепла / стойку" },
];

const TestimonialsSection = () => {
  return (
    <section id="model" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-primary tracking-wider">МОДЕЛЬ ЦОД</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-md leading-tight">
              Архитектура и технологические решения
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            На участке размещены энергетическая инфраструктура, модули дата-центра, административные здания и парковка для персонала.
          </p>
        </div>

        {/* Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {numbers.map((n) => (
            <div key={n.label} className="bg-secondary/40 border border-border rounded-2xl p-6 text-center">
              <p className="font-serif text-3xl text-primary">{n.value}</p>
              <p className="text-xs text-muted-foreground mt-2">{n.label}</p>
            </div>
          ))}
        </div>

        {/* Photo + specs grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-2xl overflow-hidden border border-border relative h-64 md:h-auto">
            <img
              src="https://cdn.poehali.dev/projects/68d82088-8b02-49c3-a021-a205ff7b1889/files/92cceac8-0b6b-41a5-9a46-9929f99a5fc7.jpg"
              alt="Газогенераторные установки ЦОД Позитрон"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs font-mono px-3 py-1.5 rounded-lg">
              СОБСТВЕННАЯ ГЕНЕРАЦИЯ · ГПУ
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6">
            {techSpecs.slice(0, 2).map((spec) => (
              <div key={spec.title} className="bg-card border border-border rounded-2xl p-6 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={spec.icon} className="text-primary" size={22} fallback="Cpu" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{spec.title}</h3>
                  <p className="text-sm text-muted-foreground">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech specs */}
        <div className="grid md:grid-cols-2 gap-6">
          {techSpecs.slice(2).map((spec) => (
            <div key={spec.title} className="bg-card border border-border rounded-2xl p-6 flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name={spec.icon} className="text-primary" size={22} fallback="Cpu" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{spec.title}</h3>
                <p className="text-sm text-muted-foreground">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;