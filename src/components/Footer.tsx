import { Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0A0D2B] to-[#1A1F4B] text-white pt-20 pb-10 px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,#FFF94C,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top CTA Banner */}
        <div className="bg-[#FFF94C] text-gray-900 rounded-3xl px-8 py-10 lg:py-12 flex flex-col lg:flex-row items-center justify-between shadow-xl mb-20">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              Ready to revolutionize your learning?
            </h2>
            <p className="text-gray-700">
              Join thousands of professionals building skills with Deptico.
            </p>
          </div>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all">
            Get Started
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">INGOUDE</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Empowering learners and organizations with personalized,
              interactive eLearning experiences built for the modern world.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="/courses" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-4">
              Get the latest learning insights and product updates straight to your inbox.
            </p>
            <form className="flex items-center bg-white/10 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-3 text-sm text-gray-100 w-full outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#FFF94C] text-gray-900 px-4 py-3 font-semibold hover:bg-yellow-300 transition-all flex items-center gap-2"
              >
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Ingoude. All rights reserved.</p>
          <div className="space-x-6 mt-3 lg:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
