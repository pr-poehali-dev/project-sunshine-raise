import Icon from "@/components/ui/icon";

const points = [
  {
    icon: "Building2",
    title: "Инфраструктурный оператор",
    text: "«Позитрон» развивает модульные центры обработки данных для ИТ-компаний, облачных провайдеров и AI-проектов.",
  },
  {
    icon: "Target",
    title: "Наша миссия",
    text: "Дать бизнесу надёжную базу для роста без капитальных затрат на строительство дата-центра с нуля.",
  },
  {
    icon: "Leaf",
    title: "Принципы проекта",
    text: "Высокая доступность, энергоэффективность и поэтапное масштабирование под задачи любого объёма.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono text-primary tracking-wider">О КОМПАНИИ</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">Позитрон</h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Проект ориентирован на ИТ-компании, облачных провайдеров, разработчиков искусственного интеллекта и инвесторов, которые ищут надёжную базу для роста. Площадка в Ленинградской области сочетает благоприятный климат, развитую энергетику и доступ к магистральным каналам связи.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon name={p.icon} className="text-primary" size={22} fallback="Building" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
