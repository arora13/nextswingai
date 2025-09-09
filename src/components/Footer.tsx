const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "AI Features", href: "#features" },
      { name: "Swing Analysis", href: "#features" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#" },
      { name: "Contact Us", href: "#contact" }
    ]
  };

  const scrollToSection = (id: string) => {
    if (id.startsWith("#")) {
      const element = document.getElementById(id.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-surface/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              NextSwing AI
            </div>
            <p className="text-white/80 mb-6 max-w-sm leading-relaxed">
              Revolutionary golf technology powered by artificial intelligence. 
              Upload your swing video and get instant AI analysis of your strengths, weaknesses, and what to work on.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-green-400 mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-white/80 hover:text-green-400 transition-colors text-sm"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-green-400 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="glass rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest AI features, golf tips, and swing analysis updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-surface border border-border rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-green-400"
              />
              <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="text-white/80 text-sm mb-4 md:mb-0">
            © {currentYear} NextSwing AI. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <button
              onClick={() => scrollToSection("#privacy")}
              className="text-white/80 hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </button>
            <a href="#" className="text-white/80 hover:text-green-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/80 hover:text-green-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2 text-white/70">
              <span className="text-green-400">🔒</span>
              <span className="text-sm">Data Not Linked to You</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <span className="text-green-400">📊</span>
              <span className="text-sm">Analytics Only</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <span className="text-green-400">🛡️</span>
              <span className="text-sm">Privacy First</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <span className="text-green-400">⚡</span>
              <span className="text-sm">Performance Data</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;