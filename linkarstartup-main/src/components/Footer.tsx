import { MessageCircle, Instagram, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  const links = {
    produto: [{
      name: "Funcionalidades",
      href: "#features"
    }, {
      name: "Integrações",
      href: "#integrations"
    }, {
      name: "Preços",
      href: "#"
    }, {
      name: "Documentação",
      href: "#"
    }],
    empresa: [{
      name: "Sobre",
      href: "#"
    }, {
      name: "Blog",
      href: "#"
    }, {
      name: "Carreiras",
      href: "#"
    }, {
      name: "Contato",
      href: "#contact"
    }],
    legal: [{
      name: "Privacidade",
      href: "#"
    }, {
      name: "Termos de Uso",
      href: "#"
    }, {
      name: "Cookies",
      href: "#"
    }]
  };
  const socials = [{
    icon: MessageCircle,
    href: "#",
    label: "WhatsApp"
  }, {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }, {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: Mail,
    href: "#",
    label: "Email"
  }];
  return <footer className="bg-linkar-dark border-t border-white/10">
      <div className="linkar-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              
              <span className="text-white text-xl font-bold">Linkar</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Automatize seu atendimento com agentes de IA e transforme a 
              comunicação do seu negócio.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-linkar-blue hover:text-linkar-dark transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="space-y-3">
              {links.produto.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.empresa.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Linkar. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-sm">
            Feito com ❤️ no Brasil
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;