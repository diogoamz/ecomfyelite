import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = "https://wa.me/5531911800503?text=Olá! Tenho interesse na mentoria Ecomfy Elite.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
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
            <Button 
              variant="heroOutline" 
              size="xl" 
              asChild
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#25D366] hover:border-[#20BD5A]"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
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
