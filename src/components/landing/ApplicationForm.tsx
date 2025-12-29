import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentSituation: "",
    goals: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Aplicação enviada com sucesso!",
      description: "Entraremos em contato em breve para a próxima etapa.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      currentSituation: "",
      goals: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="application-form" className="py-20 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Se você busca clareza, estratégia e escala em marketplaces,{" "}
              <span className="gradient-text">essa mentoria é para você.</span>
            </h2>
            <p className="text-muted-foreground">
              Preencha o formulário abaixo para iniciar sua aplicação
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl card-gradient border border-border">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className="bg-secondary border-border"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    required
                    className="bg-secondary border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="currentSituation" className="block text-sm font-medium mb-2">
                  Situação Atual *
                </label>
                <Textarea
                  id="currentSituation"
                  name="currentSituation"
                  value={formData.currentSituation}
                  onChange={handleChange}
                  placeholder="Descreva brevemente sua situação atual em marketplaces..."
                  required
                  rows={3}
                  className="bg-secondary border-border resize-none"
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium mb-2">
                  Seus Objetivos *
                </label>
                <Textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  placeholder="O que você espera alcançar com a mentoria..."
                  required
                  rows={3}
                  className="bg-secondary border-border resize-none"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="xl" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Quero Aplicar Agora
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Ao enviar, você concorda em receber comunicações sobre a mentoria.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
