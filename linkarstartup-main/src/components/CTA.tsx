import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CTA = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    whatsapp: "",
    nomeEmpresa: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nomeCompleto || !formData.email || !formData.whatsapp || !formData.nomeEmpresa) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await fetch("https://webhooks.linkartec.com.br/data/formlinkar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nomeCompleto: formData.nomeCompleto,
          email: formData.email,
          whatsapp: formData.whatsapp,
          nomeEmpresa: formData.nomeEmpresa,
        }),
      });
      toast({ title: "Enviado com sucesso!", description: "Entraremos em contato em breve." });
      setFormData({ nomeCompleto: "", email: "", whatsapp: "", nomeEmpresa: "" });
    } catch {
      toast({ title: "Erro ao enviar", description: "Tente novamente mais tarde.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="linkar-section bg-white">
      <div className="linkar-container">
        <div className="relative rounded-3xl bg-gradient-to-br from-linkar-dark to-linkar-dark-secondary p-8 md:p-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-linkar-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-linkar-blue/5 rounded-full blur-2xl" />

          <div className="relative max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Sparkles className="w-4 h-4 text-linkar-blue" />
                <span className="text-white/80 text-sm">Comece hoje mesmo</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Comece a revolucionar o{" "}
                <span className="text-gradient">atendimento da sua empresa.</span>
              </h2>

              <p className="text-white/60 text-lg max-w-xl mx-auto">
                Preencha o formulário e nossa equipe entrará em contato para agendar uma demonstração gratuita.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nomeCompleto"
                  placeholder="Nome Completo"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-linkar-blue/50 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-linkar-blue/50 transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="Número do WhatsApp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-linkar-blue/50 transition-all"
                />
                <input
                  type="text"
                  name="nomeEmpresa"
                  placeholder="Nome da Empresa"
                  value={formData.nomeEmpresa}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-linkar-blue/50 transition-all"
                />
              </div>

              <div className="flex items-center justify-center pt-4">
                <Button variant="hero" size="xl" type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Agendar Demonstração
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
