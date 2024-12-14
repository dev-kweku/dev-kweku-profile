import { Hero } from "./components/Hero";
import { SectionTwo } from "./components/SectionTwo";
import { Footer } from "./components/Footer";
import { AboutSection } from "./components/AboutSection";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <Hero/>
      <SectionTwo/>
      <AboutSection/>
      <Footer/>

    </div>
  );
}
