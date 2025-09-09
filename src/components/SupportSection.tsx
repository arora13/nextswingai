const SupportSection = () => {
  return (
    <section id="support" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Support
          </h2>
        </div>

        <div className="prose prose-lg max-w-none text-white">
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Need help with NextSwing AI? We're here to assist you with any questions or issues you may have. Our support team is committed to providing you with the best possible experience.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
          <p className="text-white/80 mb-6 leading-relaxed">
            For technical support, feature requests, or general inquiries, please contact us at <a href="mailto:nextswingai@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">nextswingai@gmail.com</a>. Our support team is available Monday through Friday, 9:00 AM to 6:00 PM EST. We typically respond to all inquiries within 24 hours.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Getting Started</h3>
          <p className="text-white/80 mb-4 leading-relaxed">
            To get started with NextSwing AI, simply download the app from the App Store, open it, and tap the "Upload Swing" button. You can either record a new video of your golf swing or select an existing video from your device. Our AI will automatically analyze your swing and provide detailed feedback on your strengths and areas for improvement.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">System Requirements</h3>
          <p className="text-white/80 mb-4 leading-relaxed">
            NextSwing AI is compatible with iOS devices running iOS 14.0 or later and Android devices running Android 8.0 or later. For the best swing analysis results, we recommend using devices with good camera quality and ensuring adequate lighting when recording your swing.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Troubleshooting</h3>
          <p className="text-white/80 mb-4 leading-relaxed">
            If you're experiencing issues with the app, try restarting your device and ensuring you have the latest version installed. For poor analysis quality, make sure you have good lighting, a stable camera position, and that your entire swing is visible in the frame. If you're having trouble uploading videos, check your internet connection and ensure the video file is not corrupted.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Privacy and Data</h3>
          <p className="text-white/80 mb-4 leading-relaxed">
            Your privacy is important to us. All swing videos and analysis data are processed securely and are not shared with third parties. You can request deletion of your data at any time by contacting our support team. For more detailed information about our data practices, please review our Privacy Policy.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Feature Requests</h3>
          <p className="text-white/80 mb-4 leading-relaxed">
            We're constantly working to improve NextSwing AI with new features and enhancements. If you have suggestions for new features or improvements, please don't hesitate to reach out to us. We value your feedback and use it to guide our development priorities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;