import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, School, MessageSquare, BookOpen, PenTool } from "lucide-react";
import heroImage from "@/assets/hero-instructor.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#efefef] via-[#ced9f9] to-[#efefef] pt-28 pb-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SECTION */}
        <div className="space-y-10">
          {/* Top Categories */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9E6FF] hover:bg-[#E0DCFF] transition-colors cursor-pointer">
              <GraduationCap className="w-4 h-4 text-[#5E4EE3]" />
              <span className="text-sm font-medium text-[#4C3DBA]">Kids</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3F3FF] hover:bg-[#DAEEFF] transition-colors cursor-pointer">
              <Briefcase className="w-4 h-4 text-[#0077C8]" />
              <span className="text-sm font-medium text-[#005FA8]">Professionals</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF9D9] hover:bg-[#FFF2B8] transition-colors cursor-pointer">
              <School className="w-4 h-4 text-[#E0B600]" />
              <span className="text-sm font-medium text-[#B59100]">
                Schools & Universities
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-5">
            <p className="text-lg text-gray-500 font-serif">
              Learning Beyond Boundaries
            </p>
            <h1 className="text-[3rem] lg:text-[4rem] font-serif leading-tight tracking-tight text-[#1f243a]">
              The Ultimate <br />
              Tailor-Made <br />
              eLearning Platform
            </h1>
          </div>

          <button
              className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
            >
              <span
                className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
              >
                <span
                  className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                ></span>
              </span>
              <span
                className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
              >
                <span
                  className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                ></span>
              </span>
              <span
                className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
              ></span>
              <span
                className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                >book a Demo</span>
            </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative">
          {/* Instructor Video Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={heroImage}
              alt="Instructor teaching online"
              className="w-full h-auto object-cover"
            />

            {/* Floating Host Card */}
            <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-2xl rounded-xl px-4 py-3 shadow-md border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-600">MM</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Host</p>
                  <p className="text-sm font-semibold text-gray-800">
                    Melissa Molsony
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Speak / Read / Write Cards */}
          <div className="grid grid-cols-3 gap-5 mt-10">
            {[
              {
                title: "Speak",
                desc: "Explore conversation courses.",
                icon: <MessageSquare className="w-5 h-5 text-[#ffffff]" />,
              },
              {
                title: "Read",
                desc: "Explore reading courses.",
                icon: <BookOpen className="w-5 h-5 text-[#ffffff]" />,
              },
              {
                title: "Write",
                desc: "Explore writing courses.",
                icon: <PenTool className="w-5 h-5 text-[#ffffff]" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#F3F6FF] border border-[#E1E7FF] rounded-xl p-6 hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#a5e1f6] flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-[#0E1635]">{item.title}</h3>
                  <p className="text-sm font-serif text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
