import AwesomeService from "@/components/view/AwesomeService/AwesomeService";
import Banner from "@/components/view/Banner/Banner";
import Contact from "@/components/view/Contact/Contact";
import EducationExperience from "@/components/view/EducationExperience/EducationExperience";
import Intro from "@/components/view/Intro/Intro";
import LogoSection from "@/components/view/LogoSection/LogoSection";
import News from "@/components/view/News/News";
import Project from "@/components/view/Project/Project";
import ShowCase from "@/components/view/ShowCase/ShowCase";
import Skills from "@/components/view/Skills/Skills";
import Testimonials from "@/components/view/Testimonials/Testimonials";


export default function HomePage() {
  return (
    <div>
      <Banner />
      <ShowCase />
      <AwesomeService />
      <Project />
      <Intro />
      <LogoSection />
      <EducationExperience />
      <Skills />
      <Testimonials />
      <News />
      <Contact />
      
    </div>
  );
}
