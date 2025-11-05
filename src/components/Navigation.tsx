import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight">Deptico</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium hover:text-accent transition-colors">
              Home
            </a>
            <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">
              Features
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-accent transition-colors">
              FAQ
            </a>
            <a href="/courses" className="text-sm font-medium hover:text-accent transition-colors">
              Courses
            </a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Log In
            </Button>
            <Button variant="cta" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
