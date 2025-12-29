import { CheckCircle, XCircle } from "lucide-react";

const TargetAudienceSection = () => {
  const forYou = [
    "Empreendedores que já vendem ou querem vender em marketplaces",
    "Pessoas cansadas de tentar sozinhas sem direção",
    "Quem busca previsibilidade, margem e escala real",
    "Quem quer acompanhamento direto e personalizado",
  ];

  const notForYou = [
    "Não indicada para curiosos ou iniciantes sem comprometimento",
  ];

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Para Quem É Essa <span className="gradient-text">Mentoria</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma mentoria exclusiva para quem está pronto para dar o próximo passo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card-gradient rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              É para você se...
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-gradient rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-destructive" />
              Não é para você se...
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground/70 italic">
              Buscamos trabalhar apenas com pessoas comprometidas com resultados reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
