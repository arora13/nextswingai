const TestimonialsSection = () => {
  const testimonials = [];
  const appTestimonials = [];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Business Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Coming Soon
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We're working hard to bring you the best golf swing analysis experience. 
            Stay tuned for updates and early access opportunities.
          </p>
        </div>

        <div className="glass rounded-2xl p-12 text-center">
          <div className="text-6xl mb-6">🏌️</div>
          <h3 className="text-2xl font-bold mb-4 text-white">Launching Soon</h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            NextSwing AI is currently in development. Be the first to know when we launch 
            and get early access to our revolutionary golf swing analysis technology.
          </p>
          <div className="text-green-400 font-medium">Coming Soon</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;