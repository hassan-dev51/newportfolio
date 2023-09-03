import Image from "next/image";
import bg from "@/public/images/bg.png";
import { About, Hero, Navbar } from "@/components";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
export default function Home() {
  return (
    <>
      <div className="bg h-screen">
        <Navbar />
        <Hero />
      </div>
      <div className="h-screen bg-[#101012]">
        <About />
      </div>
      <div className="h-screen bg-[#828299]">
        <Projects />
      </div>
      <div className="h-screen">
        <Tech />
      </div>
    </>
  );
}
