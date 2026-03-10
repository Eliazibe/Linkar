import { ArrowRight, Building2, Store, Briefcase } from "lucide-react";

const cases = [
  {
    icon: Building2,
    name: "Empresa de Logística",
    description:
      "Implementamos automações que reduziram em 60% o tempo de resposta ao cliente, integrando WhatsApp com o sistema de rastreamento de pedidos.",
  },
  {
    icon: Store,
    name: "E-commerce Regional",
    description:
      "Configuramos um agente de IA que atende dúvidas sobre produtos, estoque e prazos de entrega 24/7, aumentando as vendas em 35%.",
  },
  {
    icon: Briefcase,
    name: "Consultoria Empresarial",
    description:
      "Integramos CRM, agenda e automações de follow-up, permitindo que a equipe focasse em reuniões estratégicas.",
  },
];

const CasesDeSuccesso = () => {
  return (
    <section id="cases" className="py-24 bg-linkar-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
            fill="currentColor"
            className="text-linkar-blue"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-linkar-blue font-medium text-sm uppercase tracking-wide">
            Cases de Sucesso
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Resultados Reais
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Veja como empresas transformaram seus processos com nossas soluções de automação e integração.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-linkar-dark-secondary rounded-2xl p-8 border border-gray-800 hover:border-linkar-blue/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-linkar-blue/10 flex items-center justify-center mb-6 group-hover:bg-linkar-blue/20 transition-colors">
                <caseItem.icon className="w-8 h-8 text-linkar-blue" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {caseItem.name}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {caseItem.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-linkar-blue font-medium hover:underline group/link"
              >
                Saiba Mais
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesDeSuccesso;
