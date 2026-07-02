import Icon from "@/components/ui/icon";

interface RoadmapPhase {
  phase: string;
  title: string;
  power: string;
  status: "done" | "active" | "planned";
  items: string[];
}

const phases: RoadmapPhase[] = [
  {
    phase: "ОЧЕРЕДЬ I",
    title: "Подготовка площадки",
    power: "2 МВт",
    status: "active",
    items: [
      "Инженерная подготовка участка 4 Га",
      "Монтаж энергетической инфраструктуры",
      "Запуск первого модуля дата-центра",
    ],
  },
  {
    phase: "ОЧЕРЕДЬ II",
    title: "Масштабирование",
    power: "до 12 МВт",
    status: "planned",
    items: [
      "Ввод дополнительных модулей 2–4 МВт",
      "Расширение генерации на ГПУ",
      "Подключение первых клиентов и партнёров",
    ],
  },
  {
    phase: "ОЧЕРЕДЬ III",
    title: "Полная мощность",
    power: "30 МВт",
    status: "planned",
    items: [
      "Вывод кластера на 3600 стоек",
      "Административные и офисные здания",
      "Готовность к крупным AI-кластерам",
    ],
  },
];

const statusLabel: Record<RoadmapPhase["status"], string> = {
  done: "ЗАВЕРШЕНО",
  active: "В РАБОТЕ",
  planned: "ПЛАН",
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-wider">ДОРОЖНАЯ КАРТА</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
            План реализации
            <br />
            и очереди ввода
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Поэтапное масштабирование от первого модуля до кластера полной мощности 30 МВт.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {phases.map((phase) => (
            <div
              key={phase.phase}
              className={`bg-card border rounded-2xl p-6 relative flex flex-col ${
                phase.status === "active" ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              {phase.status === "active" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-mono px-3 py-1 rounded-full">
                  ТЕКУЩИЙ ЭТАП
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground">{phase.phase}</span>
                  <span className="text-[10px] font-mono text-primary">{statusLabel[phase.status]}</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-serif text-primary">{phase.power}</span>
                </div>
                <p className="text-sm font-medium mt-2">{phase.title}</p>
              </div>

              <div className="space-y-3 flex-1">
                {phase.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Icon name="Check" className="text-primary" size={11} />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
