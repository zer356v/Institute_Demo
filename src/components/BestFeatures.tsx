import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import platformScreenshot from "@/assets/platform-screenshot.jpg";
import platform from "@/assets/personalized.avif"

const BestFeatures = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Centered Title */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-800">
            Best in Class Features
          </h2>
        </div>

        {/* Dark Blue Card Section */}
        <div
          className={`relative bg-gray-800 rounded-3xl p-10 lg:p-16 transition-all duration-1000 delay-200 shadow-lg grid lg:grid-cols-2 gap-12 items-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: Image */}
          <div className="bg-[#ffffff14] rounded-2xl overflow-hidden shadow-inner">
            <img
              src={platformScreenshot}
              alt="Learning platform interface"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Right: Text */}
          <div className="text-white space-y-6">
            <h3 className="text-3xl lg:text-4xl font-serif">
              Personalized Learning Paths
            </h3>
            <p className="text-lg text-[#D1D5DB] leading-relaxed font-serif">
              Describe the service and how customers or clients can benefit from it.
              This is the place to add a short description with relevant details,
              like pricing, duration and how to book.
            </p>
          </div>
        </div>


        {/* Dark Blue Card Section */}
        <div
          className={`relative bg-gray-800 rounded-3xl mt-36 p-10 lg:p-16 transition-all duration-1000 delay-200 shadow-lg grid lg:grid-cols-2 gap-12 items-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: Image */}
          <div className="bg-[#ffffff14] rounded-2xl overflow-hidden shadow-inner">
            <img
              src={platform}
              alt="Learning platform interface"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Right: Text */}
          <div className="text-white space-y-6">
            <h3 className="text-3xl lg:text-4xl font-serif">
              Advanced Analytics & Reporting
            </h3>
            <p className="text-lg text-[#D1D5DB] leading-relaxed font-serif">
              Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestFeatures;
