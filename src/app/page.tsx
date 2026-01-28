import Image from "next/image";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Projects from "./components/project";

export default function Home() {
  return (
    <>
    <Hero/>
    <Projects/>
    <Contact/>
    </>
  );
}
