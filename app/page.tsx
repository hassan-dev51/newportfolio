import {
  About,
  Hero,
  Navbar,
  Project,
  Tech,
  StarCanvas,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <StarCanvas />
        <div className="px-12">
          <About />
          <Tech />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}
