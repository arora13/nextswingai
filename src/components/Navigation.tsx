import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass backdrop-blur-xl" : ""
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            NextSwing AI
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("support")}
              className="text-white hover:text-green-400 transition-colors"
            >
              Support
            </button>
            <button 
              onClick={() => scrollToSection("features")}
              className="text-white hover:text-green-400 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("privacy")}
              className="text-white hover:text-green-400 transition-colors"
            >
              Privacy
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-green-400 transition-colors"
            >
              Contact
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;