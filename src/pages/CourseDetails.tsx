import { useLocation, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, LinkIcon, X } from "lucide-react";

const CourseDetails = () => {
  const { state } = useLocation();
  const { title } = useParams();

  const course =
    state || {
      title: title?.replace(/-/g, " "),
      duration: "210 Days",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&q=80",
    };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <main className="flex-1 pt-28 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-stretch overflow-hidden shadow-md border border-gray-100">
            {/* Left: Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover md:h-[550px]"
              />
            </div>

            {/* Right: Info Card */}
            <div className="md:w-1/2 w-full bg-gray-200 flex flex-col justify-center p-10">
              <h1 className="text-3xl font-serif mb-6 text-center">
                {course.title}
              </h1>

              <div className="flex justify-around items-center mb-8">
                <div className="text-center">
                  <p className="text-2xl font-serif text-gray-800">
                    {course.duration.split(" ")[0]}
                  </p>
                  <p className="text-sm font-serif text-gray-500 mt-1">Days</p>
                </div>
                <div className="w-px bg-gray-700 h-10" />
                <div className="text-center">
                  <p className="text-2xl font-serif text-gray-800">2</p>
                  <p className="text-sm text-gray-500 mt-1">Steps</p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button className="w-1/2 text-md py-5 font-serif rounded-xl">
                  Join Now
                </Button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <section className="text-center space-y-3">
            <h2 className="text-2xl font-serif text-gray-700">About</h2>
            <p className="text-gray-500 leading-relaxed font-serif max-w-3xl mx-auto">
              You can also join this program via the mobile app.{" "}
              <a
                href="#"
                className="text-indigo-600 underline hover:text-indigo-700"
              >
                Go to the app
              </a>
            </p>
             <div className="flex justify-center">
              <hr className="w-1/2 border-t-2 border-gray-400" />
            </div>
          </section>

          {/* Price Section */}
          <section className="text-center text-gray-700 space-y-3">
            <h2 className="text-2xl font-serif">Price</h2>
            <p className="text-lg font-serif ">{course.price}</p>
            <div className="flex justify-center">
              <hr className="w-1/2 border-t-2 border-gray-400 " />
            </div>
          </section>

          {/* Share Section */}
          <section className="text-center text-gray-700 space-y-6">
            <h2 className="text-2xl font-serif ">Share</h2>
            <div className="flex justify-center gap-6">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-indigo-600 transition" />
              <X className="w-6 h-6 cursor-pointer hover:text-indigo-600 transition" />
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-indigo-600 transition" />
              <LinkIcon className="w-6 h-6 cursor-pointer hover:text-indigo-600 transition" />
            </div>
            <div className="flex justify-center">
              <hr className="w-1/2 border-t-2 border-gray-400 " />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetails;
