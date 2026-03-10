import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Consultoria gratuita",
    description:
      "Fale com um especialista da Linkar e discuta os requisitos e objetivos do seu projeto. Ouviremos atentamente para entender sua visão e necessidades.",
  },
  {
    number: 2,
    title: "Escopo e Proposta",
    description:
      "Com base na sua consulta, forneceremos um escopo detalhado, incluindo etapas, cronograma, orçamento e soluções personalizadas para seu negócio.",
  },
  {
    number: 3,
    title: "Início do projeto",
    description:
      "Com a proposta acertada, agendaremos uma reunião inicial para apresentar nossa equipe e começarmos a transformar seu negócio.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-linkar-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-linkar-blue font-medium text-sm uppercase tracking-wide">
            Etapas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Como funciona
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Automação, integrações e consultoria podem parecer complexos – mas implementá-los não precisa ser.
            Simplificamos o processo para você em 3 etapas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Dashed line connecting steps - hidden on mobile */}
          <div className="hidden md:block absolute top-6 left-[calc(16.67%+48px)] right-[calc(16.67%+48px)] h-0 border-t-2 border-dashed border-linkar-blue/40" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold transition-all ${
                    index < 2
                      ? "bg-linkar-blue text-linkar-dark"
                      : "bg-linkar-dark-secondary border-2 border-gray-700 text-white"
                  }`}
                >
                  {step.number}
                </div>
                {/* Dashed line after number on mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex-1 h-0 border-t-2 border-dashed border-linkar-blue/40" />
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {step.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-linkar-blue font-medium hover:underline group"
              >
                Entrar em contato
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
