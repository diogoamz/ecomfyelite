import { Check } from "lucide-react";

const IncludedSection = () => {
  const items = [
    "Diagnóstico completo do cenário atual",
    "Planejamento estratégico personalizado",
    "Definição de produtos e fornecedores",
    "Estrutura de precificação e margem",
    "Otimização de anúncios e contas",
    "Estratégia de tráfego orgânico e pago",
    "Planejamento de escala sustentável",
    "Suporte direto via WhatsApp",
    "Calls estratégicas recorrentes",
  ];

  return (
    <section className="py-20 relative bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              O Que Está <span className="gradient-text">Incluso</span>
            </h2>
            <p className="text-muted-foreground">
              Tudo que você precisa para estruturar e escalar seu negócio
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
