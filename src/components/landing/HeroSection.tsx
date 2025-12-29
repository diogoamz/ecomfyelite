import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground mb-6">
              Vagas limitadas | Mentoria individual | Alto nível
            </span>
          </div>
          
          <h1 className="animate-fade-in-up font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ animationDelay: '0.2s' }}>
            Mentoria Personalizada para{' '}
            <span className="gradient-text">Escalar Vendas em Marketplaces</span>{' '}
            com Estratégia e Lucro
          </h1>
          
          <p className="animate-fade-in-up text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Acompanhamento individual para quem quer parar de errar, estruturar processos e construir um negócio sólido nos marketplaces.
          </p>
          
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" onClick={scrollToForm}>
              Aplicar para a Mentoria
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToForm}>
              Saiba Mais
            </Button>
          </div>
          
          <div className="animate-fade-in-up mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              100% Individual
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Foco em Resultados
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              Estratégia Sob Medida
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
