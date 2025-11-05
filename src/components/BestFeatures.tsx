import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import platformScreenshot from "@/assets/platform-screenshot.jpg";

const BestFeatures = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Best in Class Features</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative bg-primary rounded-3xl p-8 shadow-elevated transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="bg-muted/10 rounded-2xl overflow-hidden">
              <img
                src={platformScreenshot}
                alt="Personalized learning platform interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-3xl lg:text-4xl font-bold">Personalized Learning Paths</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Describe the service and how customers or clients can benefit from it. This is the
              place to add a short description with relevant details, like pricing, duration and
              how to book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestFeatures;
