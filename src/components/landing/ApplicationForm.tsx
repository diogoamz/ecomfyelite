import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Schema de validação
const applicationSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  currentSituation: z.string().trim().min(10, "Descreva sua situação atual").max(1000, "Texto muito longo"),
  goals: z.string().trim().min(10, "Descreva seus objetivos").max(1000, "Texto muito longo"),
});

// URL do webhook do Google Apps Script
const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwcZSqevyNNvF6Xs-UaVLfh8mXs9g8yxEbsXUz5hCjt6NoAcre1n_frMRqJN6SdRU8/exec";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
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
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validação com Zod
    const result = applicationSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Erro de validação",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Envio real para o Google Sheets
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors", // Necessário para Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          currentSituation: result.data.currentSituation,
          goals: result.data.goals,
        }),
      });

      toast({
        title: "Aplicação enviada com sucesso!",
        description: "Entraremos em contato em breve para a próxima etapa.",
      });

      // Limpa o formulário após sucesso
      setFormData({
        name: "",
        email: "",
        phone: "",
        currentSituation: "",
        goals: "",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  className={`bg-secondary border-border ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
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
                    className={`bg-secondary border-border ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
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
                    className={`bg-secondary border-border ${errors.phone ? "border-destructive" : ""}`}
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
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
                  className={`bg-secondary border-border resize-none ${errors.currentSituation ? "border-destructive" : ""}`}
                />
                {errors.currentSituation && <p className="text-xs text-destructive mt-1">{errors.currentSituation}</p>}
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
                  className={`bg-secondary border-border resize-none ${errors.goals ? "border-destructive" : ""}`}
                />
                {errors.goals && <p className="text-xs text-destructive mt-1">{errors.goals}</p>}
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
