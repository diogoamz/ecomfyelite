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
    <section id="problem" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Os problemas</span> que você enfrenta
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Você não está sozinho. Esses são os desafios mais comuns de quem quer crescer em marketplaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;