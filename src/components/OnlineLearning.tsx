import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import learningHero from "@/assets/learning-hero.jpg";

const OnlineLearning = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[hsl(217_91%_60%_/_0.15)] to-[hsl(250_95%_75%_/_0.15)]">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Effortlessly connect with educators and access online courses
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Seamless Online <br />
              Learning for All
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is the space to introduce visitors to the business or brand. Briefly explain
              who's behind it, what it does and what makes it unique. Share its core values
              and what this site has to offer.
            </p>
            <Button variant="cta" size="lg">
              Online Courses
            </Button>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={learningHero}
                alt="Student learning online"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineLearning;
