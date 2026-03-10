import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-linkar-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-linkar-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-linkar-blue/5 rounded-full blur-2xl" />
      </div>

      <div className="relative linkar-container pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-linkar-blue" />
            <span className="text-white/80 text-sm">
              Automação Inteligente para seu Negócio
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Conecte seu negócio com{" "}
            <span className="text-gradient">atendimento inteligente.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Automatize seu atendimento no WhatsApp, Instagram e outras plataformas 
            com agentes de IA que trabalham 24/7 para você.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#contact">
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "+2mil", label: "Mensagens/dia" },
              { value: "24/7", label: "Atendimento" },
              { value: "98%", label: "Satisfação" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-linkar-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/3 left-10 hidden lg:block animate-float">
          <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-green-400" />
          </div>
        </div>
        <div className="absolute top-1/2 right-10 hidden lg:block animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-12 h-12 rounded-xl bg-linkar-blue/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-linkar-blue" />
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
