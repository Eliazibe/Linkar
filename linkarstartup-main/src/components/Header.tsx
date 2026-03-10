import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    name: "Funcionalidades",
    href: "#features"
  }, {
    name: "Integrações",
    href: "#integrations"
  }, {
    name: "Depoimentos",
    href: "#testimonials"
  }, {
    name: "Contato",
    href: "#contact"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-linkar-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="linkar-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            
            <span className="text-white text-xl font-bold">Linkar</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                {link.name}
              </a>)}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="heroOutline" size="default" asChild>
              <a href="#contact">Agendar Demo</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-white/70 hover:text-white transition-colors text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>)}
              <Button variant="hero" size="default" className="mt-4">
                Agendar Demo
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;