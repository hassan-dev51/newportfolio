import {
  About,
  Hero,
  Navbar,
  Project,
  Tech,
  StarCanvas,
  Contact,
  SocialLinks,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SocialLinks />
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
