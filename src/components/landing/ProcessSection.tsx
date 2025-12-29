import { FileText, Search, Phone } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Preencha o Formulário",
      description: "Complete a aplicação com suas informações e objetivos",
    },
    {
      icon: Search,
      number: "02",
      title: "Análise do Perfil",
      description: "Avaliamos se seu perfil está alinhado com a mentoria",
    },
    {
      icon: Phone,
      number: "03",
      title: "Call Estratégica",
      description: "Conversa para alinhamento e início da jornada",
    },
  ];

  return (
    <section className="py-20 relative bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Processo de <span className="gradient-text">Aplicação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para começar sua transformação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <div className="relative z-10 text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
