import BackgroundFX from "@/components/BackgroundFX";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import UniversityProjects from "@/components/UniversityProjects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <ScrollProgressBar />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <UniversityProjects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
