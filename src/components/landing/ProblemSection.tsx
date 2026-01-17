import { AlertTriangle } from "lucide-react";
const ProblemSection = () => {
  const problems = [{
    title: "Excesso de informações genéricas",
    description: "Cursos e conteúdos que não se aplicam à sua realidade específica"
  }, {
    title: "Falta de estratégia personalizada",
    description: "Soluções padronizadas que ignoram seu contexto e objetivos"
  }, {
    title: "Erros em produto, precificação e logística",
    description: "Decisões tomadas no escuro que drenam margem e tempo"
  }, {
    title: "Falta de direcionamento claro",
    description: "Não saber por onde começar ou qual o próximo passo"
  }, {
    title: "Perda de tempo e dinheiro",
    description: "Tentativas frustradas sem mentoria prática e focada"
  }];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Os problemas que você enfrenta
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Se você se identifica com algum desses desafios, a mentoria foi feita para você
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-destructive/10 p-2 rounded-lg shrink-0">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
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