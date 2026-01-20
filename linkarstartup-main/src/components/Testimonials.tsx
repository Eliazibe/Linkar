import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Donald Sutton",
      role: "CEO, E-commerce Fashion",
      content: "A Inteligência Artificial reduziu significativamente meus custos e melhorou o atendimento ao cliente. Hoje, consigo atender muito mais pessoas e administrar meu tempo com muito mais eficiência.",
      rating: 5,
    },
    {
      name: "João Silva",
      role: "Diretor, Clínica Odontológica",
      content: "Ganhamos mais autonomia e praticidade no atendimento. Antes, o serviço era limitado nas mensagens, agora temos controle total.",
      rating: 5,
    },
    {
      name: "Ana Oliveira",
      role: "Gerente, Restaurante Delivery",
      content: "Os pedidos pelo WhatsApp aumentaram 150% depois que implementamos o agente de IA. É incrível a diferença!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="linkar-section bg-linkar-dark">
      <div className="linkar-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
            <Star className="w-4 h-4 text-linkar-blue" />
            <span className="text-white/80 text-sm">Depoimentos</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-white/60 text-lg">
            Empresas reais, resultados reais.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <Quote className="w-10 h-10 text-linkar-blue/30 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-linkar-blue text-linkar-blue" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linkar-blue/20 flex items-center justify-center">
                  <span className="text-linkar-blue font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-white/50 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
          {[
            { value: "+2 mil", label: "Mensagens/dia" },
            { value: "+240", label: "Integrações" },
            { value: "98%", label: "Satisfação" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-linkar-blue">{stat.value}</p>
              <p className="text-white/50 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
