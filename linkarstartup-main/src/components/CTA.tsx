import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="linkar-section bg-white">
      <div className="linkar-container">
        <div className="relative rounded-3xl bg-gradient-to-br from-linkar-dark to-linkar-dark-secondary p-8 md:p-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-linkar-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-linkar-blue/5 rounded-full blur-2xl" />

          <div className="relative max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-linkar-blue" />
              <span className="text-white/80 text-sm">Comece hoje mesmo</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comece a revolucionar o{" "}
              <span className="text-gradient">atendimento da sua empresa.</span>
            </h2>

            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Agende uma demonstração gratuita e descubra como a Linkar pode 
              transformar a comunicação do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/558132999711" target="_blank" rel="noopener noreferrer">
                  Agendar Demonstração
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://wa.me/558132999711" target="_blank" rel="noopener noreferrer">
                  Falar com Consultor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
