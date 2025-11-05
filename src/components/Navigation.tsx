import { useState } from "react";
import { Button } from "@/components/ui/button";
import Ingoude_logo from "@/assets/Ingoude_logo.png";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img
            onClick={() => navigate("/")}
            src={Ingoude_logo}
            alt="Ingoude Logo"
            className="w-auto h-12 cursor-pointer"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-roboto hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">Log In</Button>
            <Button variant="cta" size="lg">Book a Demo</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* ✨ Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-border shadow-lg rounded-b-3xl"
          >
            <div className="flex flex-col items-center py-6 space-y-6 relative overflow-hidden">
              {/* Glowing Background Animation */}
              <motion.div
                className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 blur-3xl rounded-full"
                animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
              />

              {/* Menu Items */}
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative text-lg font-medium tracking-wide text-foreground hover:text-accent transition-all group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-[2px] bg-accent transition-all"></span>
                </motion.a>
              ))}

              {/* Divider Line */}
              <div className="w-16 h-[1px] bg-border my-3" />

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-4"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="w-40 border border-border hover:border-accent"
                >
                  Log In
                </Button>
                <Button
                  variant="cta"
                  size="lg"
                  className="w-40 flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-4 h-4" />
                  Book a Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
