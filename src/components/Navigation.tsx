import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className={`transition-colors ${
            isScrolled ? "text-slate-800" : "text-white"
          }`}
        >
          <span className="text-xl">SAJINA C V</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition-colors hover:text-blue-600 ${
                isScrolled ? "text-slate-600" : "text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            variant={isScrolled ? "default" : "secondary"}
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-slate-800" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-4 py-4">
          <div className="flex flex-col gap-4 px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-blue-600 text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
