import { Bot, MessageSquare, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="linkar-section bg-white">
      <div className="linkar-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-linkar-blue/20 to-linkar-blue/5 p-8">
              <div className="aspect-square rounded-2xl bg-linkar-dark/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-2xl bg-linkar-blue/20 flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-12 h-12 text-linkar-blue" />
                  </div>
                  <p className="text-linkar-dark font-medium">Agente IA Linkar</p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -right-4 top-1/4 bg-white rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">WhatsApp</p>
                    <p className="text-xs text-muted-foreground">Conectado</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-1/4 bg-white rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">+150 msgs</p>
                    <p className="text-xs text-muted-foreground">Hoje</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="linkar-badge mb-4">Sobre a Linkar</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              I.A. para tornar a comunicação{" "}
              <span className="text-linkar-blue">mais simples e eficiente.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A Linkar utiliza agentes de inteligência artificial para automatizar 
              o atendimento da sua empresa. Conectamos seu negócio às principais 
              plataformas de mensagens para que você nunca perca uma oportunidade.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Atendimento 24/7",
                  description: "Seu agente de IA nunca dorme e responde instantaneamente.",
                },
                {
                  title: "Integração Simples",
                  description: "Conecte WhatsApp, Instagram e mais em poucos cliques.",
                },
                {
                  title: "Personalização Total",
                  description: "Configure o tom e estilo de comunicação da sua marca.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-linkar-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-linkar-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
