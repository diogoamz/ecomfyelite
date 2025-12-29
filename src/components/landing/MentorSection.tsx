import { ShoppingBag, TrendingUp, Cpu, Target } from "lucide-react";

const MentorSection = () => {
  const highlights = [
    {
      icon: ShoppingBag,
      text: "Especialista em marketplaces",
    },
    {
      icon: TrendingUp,
      text: "Experiência com Shopee, Mercado Livre e TikTok Shop",
    },
    {
      icon: Target,
      text: "Atuação direta com estruturação e escala",
    },
    {
      icon: Cpu,
      text: "Estratégias usando ferramentas modernas e IA",
    },
  ];

  return (
    <section className="py-20 relative bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="relative z-10 text-center p-6">
                  <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold gradient-text">M</span>
                  </div>
                  <p className="text-lg font-semibold">Seu Mentor</p>
                  <p className="text-sm text-muted-foreground">Especialista em Marketplaces</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Sobre o Mentor
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Quem Vai Te <span className="gradient-text">Acompanhar</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Profissional com experiência prática em marketplaces, focado em resultados reais e estratégias que funcionam. Linguagem profissional, clara e objetiva, sempre direcionada para o que realmente importa: seu lucro.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
