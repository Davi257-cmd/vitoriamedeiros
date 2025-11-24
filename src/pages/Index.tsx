import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Specialties from "@/components/Specialties";
import BeforeAfter from "@/components/BeforeAfter";
import Sobre from "@/components/Sobre";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <ProblemSolution />
      <Specialties />
      <BeforeAfter />
      <Sobre />
      <Statistics />
      <Testimonials />
      <InstagramFeed />
      <CTASection />
      <FAQ />
      <Contact />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Index;
