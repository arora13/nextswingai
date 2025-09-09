const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions about NextSwing AI? We'd love to hear from you.
          </p>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
          <div className="space-y-4">
            <p className="text-white/80">
              <strong className="text-white">Email:</strong>{" "}
              <a 
                href="mailto:nextswingai@gmail.com" 
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                nextswingai@gmail.com
              </a>
            </p>
            <p className="text-white/80">
              <strong className="text-white">Response Time:</strong> Within 24 hours
            </p>
            <p className="text-white/80">
              <strong className="text-white">Support Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-white/5 rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-white">What can we help you with?</h4>
            <ul className="text-white/80 space-y-2 text-left max-w-md mx-auto">
              <li>• Technical support and troubleshooting</li>
              <li>• Feature requests and feedback</li>
              <li>• Account and billing questions</li>
              <li>• General inquiries about NextSwing AI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;