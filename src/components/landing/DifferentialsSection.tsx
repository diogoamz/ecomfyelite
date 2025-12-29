import { Award, Brain, Cpu, Shield, TrendingUp } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Award,
      title: "Feita por Quem Vive Marketplaces",
      description: "Experiência real de quem opera diariamente no mercado",
    },
    {
      icon: TrendingUp,
      title: "Metodologia Validada",
      description: "Processos testados e aprovados na prática com resultados comprovados",
    },
    {
      icon: Cpu,
      title: "Tecnologia e IA",
      description: "Uso de ferramentas modernas e inteligência artificial para otimização",
    },
    {
      icon: Shield,
      title: "Atendimento Limitado",
      description: "Número restrito de mentorados para garantir qualidade máxima",
    },
    {
      icon: Brain,
      title: "Foco em Lucro Real",
      description: "Não é sobre faturamento vazio, mas sim margem e sustentabilidade",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Por Que Essa <span className="gradient-text">Mentoria</span> é Diferente
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença nos seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border border-border bg-card hover:glow-effect transition-all duration-500 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
