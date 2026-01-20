import { Bot, Workflow, Database, Headphones } from "lucide-react";

const floatingIcons = [
  { icon: Bot, color: "bg-orange-500", delay: "0s" },
  { icon: Workflow, color: "bg-purple-500", delay: "0.5s" },
  { icon: Database, color: "bg-blue-500", delay: "1s" },
  { icon: Headphones, color: "bg-green-500", delay: "1.5s" },
];

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-block bg-linkar-blue/20 text-linkar-dark font-medium text-sm uppercase tracking-wide px-4 py-2 rounded-full mb-6">
              A Empresa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-linkar-dark mb-6 leading-tight">
              Estúdio de Tecnologia{" "}
              <span className="text-linkar-blue">Desenvolvendo Soluções que Escalam Negócios</span>
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-linkar-blue text-xl">✓</span>
                <p className="text-gray-600">
                  Agentes de IA Personalizados Para{" "}
                  <span className="text-linkar-dark font-semibold">Automatizar Atendimento</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-linkar-blue text-xl">✓</span>
                <p className="text-gray-600">
                  Automações Inteligentes Para{" "}
                  <span className="text-linkar-dark font-semibold">Eliminar Processos Manuais</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-linkar-blue text-xl">✓</span>
                <p className="text-gray-600">
                  Integração Completa Para{" "}
                  <span className="text-linkar-dark font-semibold">Unificar Operações</span>
                </p>
              </div>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed">
              A Linkar é um estúdio especializado em tecnologia empresarial. 
              Desenvolvemos agentes inteligentes, automações personalizadas e 
              integrações estratégicas que eliminam processos manuais e escalam operações. 
              Nosso foco é criar soluções sob medida que reduzem custos operacionais, 
              aumentam conversões e permitem crescimento acelerado sem expandir equipes.
            </p>
          </div>

          {/* Icons Side */}
          <div className="relative">
            <div className="relative h-[400px] flex items-center justify-center">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-linkar-blue/10 to-transparent rounded-3xl" />
              
              {/* Floating icons */}
              <div className="relative w-full h-full">
                {floatingIcons.map((item, index) => {
                  const positions = [
                    "top-0 right-1/4",
                    "top-1/4 right-0",
                    "bottom-1/4 right-1/4",
                    "bottom-0 right-1/2",
                  ];
                  return (
                    <div
                      key={index}
                      className={`absolute ${positions[index]} animate-float`}
                      style={{ animationDelay: item.delay }}
                    >
                      <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  );
                })}

                {/* Central card */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 bg-white border border-gray-200 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-linkar-blue/20 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-linkar-blue" />
                    </div>
                    <div>
                      <p className="text-linkar-dark font-semibold">Linkar</p>
                      <p className="text-gray-500 text-sm">Tecnologia & Automação</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-linkar-blue/20 text-linkar-dark text-xs px-2 py-1 rounded">IA</span>
                    <span className="bg-linkar-blue/20 text-linkar-dark text-xs px-2 py-1 rounded">CRM</span>
                    <span className="bg-linkar-blue/20 text-linkar-dark text-xs px-2 py-1 rounded">Integrações</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
