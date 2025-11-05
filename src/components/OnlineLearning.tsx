import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import learningHero from "@/assets/learning-hero.jpg";

const OnlineLearning = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#b8c6ff]/40">
      <div className="max-w-7xl mx-auto">
        {/* Text Section */}
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left side: intro + title */}
          <div className="space-y-6">
            <p className="text-sm font-serif text-muted-foreground tracking-wide">
              Effortlessly connect with educators and access online courses
            </p>

            <h1 className="text-5xl lg:text-6xl font-serif leading-tight text-gray-900">
              Seamless Online <br /> Learning for All
            </h1>
          </div>

          {/* Right side: paragraph + button */}
          <div className="space-y-6 flex flex-col mt-52 justify-center">
            <p className="text-lg text-muted-foreground leading-relaxed font-serif">
              This is the space to introduce visitors to the business or brand. Briefly explain
              who's behind it, what it does and what makes it unique. Share its core values
              and what this site has to offer.
            </p>

            <Button variant="cta" size="lg" className="w-fit">
              Online Courses
            </Button>
          </div>
        </div>

        {/* Full-width image below */}
        <div
          className={`mt-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
    </section>
  );
};

export default OnlineLearning;
