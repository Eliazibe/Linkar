import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "600",
    description: "Ideal para pequenos negócios",
    features: [
      "1 Agente de IA",
      "WhatsApp integrado",
      "Até 500 atendimentos/mês",
      "Suporte por email",
      "Relatórios básicos",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "950",
    description: "Para empresas em crescimento",
    features: [
      "3 Agentes de IA",
      "WhatsApp + Instagram",
      "Até 2.000 atendimentos/mês",
      "Suporte prioritário",
      "Relatórios avançados",
      "Integrações personalizadas",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "1300",
    description: "Solução completa para grandes operações",
    features: [
      "Agentes ilimitados",
      "Todas as plataformas",
      "Atendimentos ilimitados",
      "Suporte 24/7 dedicado",
      "Dashboard completo",
      "API personalizada",
      "Treinamento exclusivo",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-linkar-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Planos & <span className="text-linkar-blue">Investimento</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para automatizar seu atendimento e escalar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-linkar-dark-secondary border-gray-800 transition-all duration-300 hover:scale-105 hover:border-linkar-blue/50 flex flex-col ${
                plan.popular ? "border-linkar-blue ring-2 ring-linkar-blue/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-linkar-blue text-linkar-dark text-sm font-semibold px-4 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-2 pt-8">
                <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-gray-400 text-sm">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-gray-400 text-lg">R$</span>
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/mês</span>
                </div>
              </CardHeader>

              <CardContent className="pt-6 flex flex-col flex-grow">
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-linkar-blue flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "heroOutline"}
                  className="w-full mt-auto"
                  size="lg"
                  asChild
                >
                  <a href="https://wa.me/558132999711" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Falar com Consultor
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12 text-sm">
          * Valores podem variar de acordo com necessidades específicas. Entre em contato para um orçamento personalizado.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
