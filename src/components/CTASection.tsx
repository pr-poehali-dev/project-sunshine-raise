import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
    <section id="request" className="py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left text */}
            <div>
              <span className="text-xs font-mono text-primary tracking-wider">ОСТАВИТЬ ЗАЯВКУ</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-4 leading-tight">
                Обсудим размещение ваших мощностей
              </h2>
              <p className="text-muted-foreground mb-6">
                Оставьте контакты и кратко опишите задачу — специалисты «Позитрон» свяжутся с вами и подготовят условия под ваш проект.
              </p>
              <ul className="space-y-3">
                {["Аренда и покупка модулей", "Партнёрство и инвестиции", "Индивидуальные условия"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground">ИМЯ</label>
                <input
                  type="text"
                  placeholder="Как к вам обращаться"
                  className="w-full mt-1 bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground">EMAIL ИЛИ ТЕЛЕФОН</label>
                <input
                  type="text"
                  placeholder="Контакт для связи"
                  className="w-full mt-1 bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground">ОПИСАНИЕ ЗАДАЧИ</label>
                <textarea
                  rows={3}
                  placeholder="Кратко опишите вашу задачу или требуемые мощности"
                  className="w-full mt-1 bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                />
              </div>
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Отправить заявку
                <Icon name="ArrowRight" size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
