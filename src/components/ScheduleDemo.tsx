import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import demoImage from "@/assets/hero-instructor2.jpg"; // your uploaded image

const ScheduleDemo = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#FFF94C]">
      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto rounded-3xl overflow-hidden transition-all duration-1000 shadow-lg ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Background Image */}
        <img
          src={demoImage}
          alt="Schedule demo preview"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="px-10 lg:px-16 max-w-xl text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Schedule a Demo Now!
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Learn why Deptico solutions is the ultimate fit for your needs.
            </p>

            <button className="bg-[#0A0D2B] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#14194A] transition-all">
              Book a Demo <span className="ml-1">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleDemo;
