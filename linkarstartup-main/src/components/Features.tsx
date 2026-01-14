import { Bot, MessageCircle, BarChart3, Clock, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Agentes de IA Inteligentes",
      description: "Nossos agentes entendem contexto e respondem de forma natural às perguntas dos seus clientes.",
    },
    {
      icon: MessageCircle,
      title: "Multi-plataforma",
      description: "WhatsApp, Instagram Direct, Telegram e mais. Gerencie tudo em um só lugar.",
    },
    {
      icon: BarChart3,
      title: "Analytics Detalhado",
      description: "Acompanhe métricas de atendimento, satisfação e conversões em tempo real.",
    },
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Seus clientes são atendidos a qualquer hora, sem pausas ou esperas.",
    },
    {
      icon: Shield,
      title: "Dados Seguros",
      description: "Proteção completa das conversas e informações dos seus clientes.",
    },
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      description: "Tempo de resposta de milissegundos para uma experiência fluida.",
    },
  ];

  return (
    <section id="features" className="linkar-section bg-secondary/30">
      <div className="linkar-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="linkar-badge mb-4">Funcionalidades</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Funcionalidades Principais
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo que você precisa para automatizar e escalar seu atendimento.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="linkar-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-linkar-blue/10 flex items-center justify-center mb-4 group-hover:bg-linkar-blue/20 transition-colors">
                <feature.icon className="w-6 h-6 text-linkar-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
