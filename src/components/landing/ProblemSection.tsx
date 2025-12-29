import { AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      title: "Excesso de informações genéricas",
      description: "Cursos e conteúdos que não se aplicam à sua realidade específica",
    },
    {
      title: "Falta de estratégia personalizada",
      description: "Soluções padronizadas que ignoram seu contexto e objetivos",
    },
    {
      title: "Erros em produto, precificação e logística",
      description: "Decisões tomadas no escuro que drenam margem e tempo",
    },
    {
      title: "Falta de direcionamento claro",
      description: "Não saber por onde começar ou qual o próximo passo",
    },
    {
      title: "Perda de tempo e dinheiro",
      description: "Tentativas frustradas sem mentoria prática e focada",
    },
  ];

  return (
    <section className="py-20 relative bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            O Problema do <span className="gradient-text">Mercado</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Por que a maioria dos vendedores em marketplaces não consegue escalar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
