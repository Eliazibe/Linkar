const LogoCloud = () => {
  const partners = [
    "Empresa A",
    "Empresa B", 
    "Empresa C",
    "Empresa D",
    "Empresa E",
    "Empresa F",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="linkar-container">
        <p className="text-center text-muted-foreground text-sm mb-8">
          Empresas que já automatizam com a Linkar
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 px-6 rounded-lg bg-muted/50"
              >
                <span className="text-muted-foreground font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
