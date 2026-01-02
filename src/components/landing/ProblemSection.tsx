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
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Os <span className="gradient-text">Problemas</span> Que Você Enfrenta
            </h2>
            <p className="text-muted-foreground">
              Desafios comuns que impedem seu crescimento no e-commerce
            </p>
          </div>

          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-destructive/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
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