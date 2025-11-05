const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Deptico</h3>
            <p className="text-sm opacity-80">
              The ultimate tailor-made eLearning platform for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#features" className="hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="/courses" className="hover:opacity-100 transition-opacity">Courses</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-60">
          © 2025 Deptico. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
