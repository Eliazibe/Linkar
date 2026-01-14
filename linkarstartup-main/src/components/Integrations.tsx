import { MessageCircle, Instagram, Send, Facebook, Mail, Globe } from "lucide-react";

const Integrations = () => {
  const integrations = [
    { icon: MessageCircle, name: "WhatsApp", color: "bg-green-500", connected: true },
    { icon: Instagram, name: "Instagram", color: "bg-gradient-to-br from-purple-500 to-pink-500", connected: true },
    { icon: Send, name: "Telegram", color: "bg-blue-500", connected: true },
    { icon: Facebook, name: "Messenger", color: "bg-blue-600", connected: false },
    { icon: Mail, name: "Email", color: "bg-red-500", connected: false },
    { icon: Globe, name: "Website Chat", color: "bg-linkar-blue", connected: true },
  ];

  return (
    <section id="integrations" className="linkar-section bg-white">
      <div className="linkar-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <span className="linkar-badge mb-4">Integrações</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Integrado com as principais{" "}
              <span className="text-linkar-blue">plataformas de comunicação.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Conecte-se com seus clientes onde eles estão. Nossa plataforma 
              integra com WhatsApp, Instagram, Telegram e muito mais.
            </p>

            {/* Integration Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/50">
                <p className="text-2xl font-bold text-foreground">6+</p>
                <p className="text-sm text-muted-foreground">Plataformas</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50">
                <p className="text-2xl font-bold text-foreground">1 clique</p>
                <p className="text-sm text-muted-foreground">Para conectar</p>
              </div>
            </div>
          </div>

          {/* Integrations Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="linkar-card flex flex-col items-center text-center p-6 group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${integration.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <integration.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-medium text-foreground text-sm">{integration.name}</p>
                  {integration.connected && (
                    <span className="mt-2 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      Disponível
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-linkar-blue/5 rounded-3xl -z-10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
