import Icon from "@/components/ui/icon";

interface Opportunity {
  icon: string;
  audience: string;
  title: string;
  points: string[];
}

const opportunities: Opportunity[] = [
  {
    icon: "Users",
    audience: "КЛИЕНТАМ",
    title: "Размещение мощностей",
    points: [
      "Аренда стоек и модулей под задачи любого масштаба",
      "Готовая инфраструктура без капитальных вложений",
      "Быстрый ввод в эксплуатацию",
    ],
  },
  {
    icon: "Handshake",
    audience: "ПАРТНЁРАМ",
    title: "Совместное развитие",
    points: [
      "Интеграция оборудования и сервисов на площадке",
      "Долгосрочные контракты на размещение",
      "Гибкие модели сотрудничества",
    ],
  },
  {
    icon: "TrendingUp",
    audience: "ИНВЕСТОРАМ",
    title: "Вход в проект",
    points: [
      "Растущий рынок дата-центров и AI-инфраструктуры",
      "Поэтапная реализация и понятная экономика",
      "Собственная генерация как ключевой актив",
    ],
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-primary tracking-wider">ВОЗМОЖНОСTИ</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-md leading-tight">
              Ценность для каждой стороны
            </h2>
          </div>
          <div className="mt-6 md:mt-2 md:text-right">
            <span className="inline-flex items-center gap-2 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              СТАТУС ПРОЕКТА · В РЕАЛИЗАЦИИ
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {opportunities.map((item) => (
            <div key={item.audience} className="bg-card border border-border rounded-2xl p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon name={item.icon} className="text-primary" size={22} fallback="Users" />
              </div>
              <span className="text-[10px] font-mono text-accent">{item.audience}</span>
              <h3 className="font-semibold text-xl mb-4 mt-1">{item.title}</h3>
              <ul className="space-y-3">
                {item.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
