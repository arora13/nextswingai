const FeaturesSection = () => {
  const features = [
    {
      title: "Upload Your Swing",
      description: "Simply record and upload your golf swing video for instant AI analysis",
      version: "v3.2.0",
      date: "December 2024",
      status: "Latest"
    },
    {
      title: "Strengths & Weaknesses",
      description: "Get detailed breakdown of what you're doing well and what needs improvement",
      version: "v3.1.5",
      date: "November 2024", 
      status: "AI Enhancement"
    },
    {
      title: "What to Work On",
      description: "Receive specific, actionable recommendations to improve your game",
      version: "v3.0.0",
      date: "October 2024",
      status: "Major Release"
    },
    {
      title: "Swing Comparison",
      description: "Compare your swing to professional golfers and track your progress",
      version: "v2.9.8",
      date: "September 2024",
      status: "Analytics Update"
    },
    {
      title: "Personalized Tips",
      description: "Get customized coaching tips tailored to your specific swing issues",
      version: "v2.9.0",
      date: "August 2024",
      status: "Content Update"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed performance metrics",
      version: "v2.8.5",
      date: "July 2024",
      status: "GPS Enhancement"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Latest": return "text-white bg-white/20";
      case "AI Enhancement": return "text-green-400 bg-green-400/20";
      case "Major Release": return "text-blue-400 bg-blue-400/20";
      default: return "text-white/70 bg-white/10";
    }
  };

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            NextSwing AI Features
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Upload your swing, get AI analysis, and discover your strengths and what to work on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(feature.status)}`}>
                  {feature.status}
                </span>
                <span className="text-sm text-white/60">{feature.version}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-white/80 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="text-sm text-white/60">
                Released: {feature.date}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">What's Coming Next?</h3>
            <p className="text-white/80 mb-4">
              We're working on swing detection and better mechanic and technical feedback for our users.
            </p>
            <div className="text-green-400 font-medium">Coming Soon</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;