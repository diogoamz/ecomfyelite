import { Target, Users, TrendingUp, BarChart3, Zap } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Users,
      title: "100% Individual",
      description: "Sem grupos, sem distrações. Foco total em você e seu negócio.",
    },
    {
      icon: Target,
      title: "Estratégia Sob Medida",
      description: "Planejamento construído especificamente para sua realidade.",
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento Direto",
      description: "Acesso direto ao mentor para dúvidas e decisões estratégicas.",
    },
    {
      icon: Zap,
      title: "Foco em Execução",
      description: "Menos teoria, mais prática. Resultados tangíveis desde o início.",
    },
    {
      icon: BarChart3,
      title: "Decisões Baseadas em Dados",
      description: "Análise real do mercado e métricas para tomada de decisão.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            A Solução
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Mentoria <span className="gradient-text">Personalizada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um método validado para estruturar e escalar vendas em marketplaces
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-card to-card/50 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
