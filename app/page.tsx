import { About, Hero, Navbar, Project, Tech, StarCanvas } from "@/components";

export default function Home() {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <StarCanvas />
      </div>
      <About />
      <Project />
      <Tech />
    </>
  );
}
