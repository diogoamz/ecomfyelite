import { Button } from "@/components/ui/button";
import { ArrowRight, X, Check } from "lucide-react";
const InvestmentSection = () => {
  const notIncluded = ["Não é curso", "Não é grupo"];
  const included = ["Mentoria individual", "Alto nível de acompanhamento", "Estratégia personalizada", "Acesso direto ao mentor"];
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-20 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Investimento
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Valor do <span className="gradient-text">Investimento</span>
          </h2>

          <div className="p-8 md:p-12 rounded-3xl card-gradient border border-border relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">O que não é:</p>
                  <ul className="space-y-2">
                    {notIncluded.map((item, index) => <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <X className="w-4 h-4 text-destructive" />
                        {item}
                      </li>)}
                  </ul>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">O que é:</p>
                  <ul className="space-y-2">
                    {included.map((item, index) => <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        {item}
                      </li>)}
                  </ul>
                </div>
              </div>

              <div className="py-8 border-t border-b border-border mb-8">
                <p className="text-muted-foreground mb-2">Investimento único de</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-medium">R$</span>
                  <span className="text-6xl md:text-7xl font-display font-bold gradient-text">9.997</span>
                </div>
              </div>

              <Button variant="hero" size="xl" onClick={scrollToForm} className="w-full md:w-auto">
                Aplicar para a Mentoria
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default InvestmentSection;