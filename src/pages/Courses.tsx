import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const courses = [
    {
      title: "Vocabulary",
      duration: "22 Days",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&q=80",
    },
    {
      title: "Conversation Skills",
      duration: "210 Days",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    },
    {
      title: "English for Business",
      duration: "210 Days",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl text-gray-600 font-serif mb-4">Online Courses</h1>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl text-gray-600 font-serif ">Programs</h2>
          </div>

          <div ref={ref} className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`bg-background overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-serif">{course.title}</h3>
                  <p className="text-muted-foreground text-sm">{course.duration}</p>
                  <div className="h-px bg-border my-4" />
                  <p className="font-serif">{course.price}</p>

                  <Button
                    variant="default"
                    size="lg"
                    className="w-full"
                    onClick={() =>
                      navigate(`/course/${course.title.toLowerCase().replace(/\s+/g, "-")}`, {
                        state: course,
                      })
                    }
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
