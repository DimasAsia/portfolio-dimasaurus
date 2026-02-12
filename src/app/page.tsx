import Hero from "./components/hero";
import Contact from "./components/contact";
import FeaturedProjects from "./components/featuredproject";
import About from "./components/about";
import Experience from "./components/experience";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Experience/>
    <FeaturedProjects/>
    <Contact/>
    </>
  );
}
