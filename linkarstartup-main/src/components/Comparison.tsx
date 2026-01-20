import { Check, X } from "lucide-react";

const comparisonData = [
  {
    category: "Tempo para Implementar",
    linkar: { value: "Poucas Semanas", highlight: true },
    freelancers: "1-3 Meses",
    inHouse: "6+ Meses",
    agencies: "2-4 Meses",
  },
  {
    category: "Nível de Experiência",
    linkar: { value: "Especialistas", highlight: true },
    freelancers: "Variável",
    inHouse: "Precisa Treinar",
    agencies: "Depende",
  },
  {
    category: "Comunicação",
    linkar: { value: "Diária", highlight: true },
    freelancers: "Incerta",
    inHouse: "Boa",
    agencies: "Burocrática",
  },
  {
    category: "Suporte Contínuo",
    linkar: { value: "Incluído", highlight: true },
    freelancers: "Extra",
    inHouse: "Interno",
    agencies: "Contrato à parte",
  },
  {
    category: "Custo-Benefício",
    linkar: { value: "Otimizado", highlight: true },
    freelancers: "Baixo inicial",
    inHouse: "Alto",
    agencies: "Alto",
  },
];

const Comparison = () => {
  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="inline-block bg-linkar-blue/10 text-linkar-dark font-medium text-sm uppercase tracking-wide px-4 py-2 rounded-full mb-4">
            Comparação
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-linkar-dark">
            Compare as suas Opções:
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="text-left py-6 px-4"></th>
                <th className="py-6 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-bold text-linkar-dark text-lg">Linkar</span>
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                </th>
                <th className="py-6 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-500">Freelancers</span>
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                </th>
                <th className="py-6 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-500">In-House</span>
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                </th>
                <th className="py-6 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-500">Outras Agências</span>
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-6 px-4 font-medium text-linkar-dark">
                    {row.category}
                  </td>
                  <td className="py-6 px-4 text-center">
                    <span className="inline-block bg-linkar-blue text-linkar-dark font-semibold px-4 py-2 rounded-lg">
                      {row.linkar.value}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-center text-gray-500">
                    {row.freelancers}
                  </td>
                  <td className="py-6 px-4 text-center text-gray-500">
                    {row.inHouse}
                  </td>
                  <td className="py-6 px-4 text-center text-gray-500">
                    {row.agencies}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((row, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-linkar-dark mb-4">{row.category}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Linkar</span>
                  <span className="bg-linkar-blue text-linkar-dark font-semibold px-3 py-1 rounded-lg text-sm">
                    {row.linkar.value}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Freelancers</span>
                  <span className="text-gray-500 text-sm">{row.freelancers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">In-House</span>
                  <span className="text-gray-500 text-sm">{row.inHouse}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Outras Agências</span>
                  <span className="text-gray-500 text-sm">{row.agencies}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
