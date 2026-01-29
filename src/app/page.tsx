import Image from "next/image";
import Hero from "./components/hero";
import Contact from "./components/contact";
import FeaturedProjects from "./components/featuredproject";

export default function Home() {
  return (
    <>
    <Hero/>
    <FeaturedProjects/>
    <Contact/>
    </>
  );
}
