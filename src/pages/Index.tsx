import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import OnlineLearning from "@/components/OnlineLearning";
import BestFeatures from "@/components/BestFeatures";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScheduleDemo from "@/components/ScheduleDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TrustedBy />
        <OnlineLearning />
        <BestFeatures />
        <ScheduleDemo/>
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
