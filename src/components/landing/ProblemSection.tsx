import { AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      title: "Excesso de informações genéricas",
      description: "Cursos e conteúdos que não se aplicam à sua realidade específica"
    },
    {
      title: "Falta de estratégia personalizada",
      description: "Soluções padronizadas que ignoram seu contexto e objetivos"
    },
    {
      title: "Erros em produto, precificação e logística",
      description: "Decisões tomadas no escuro que drenam margem e tempo"
    },
    {
      title: "Falta de direcionamento claro",
      description: "Não saber por onde começar ou qual o próximo passo"
    },
    {
      title: "Perda de tempo e dinheiro",
      description: "Tentativas frustradas sem mentoria prática e focada"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              O Problema
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Por Que Tantos <span className="text-destructive">Falham</span> nos Marketplaces?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A maioria dos vendedores enfrenta os mesmos obstáculos que impedem o crescimento sustentável.
            </p>
          </div>

          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-destructive/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
