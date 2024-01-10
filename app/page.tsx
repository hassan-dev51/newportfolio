import {
  About,
  Hero,
  Navbar,
  Project,
  Tech,
  StarCanvas,
  Contact,
  SocialLinks,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SocialLinks />
        <StarCanvas />
        <div className="px-16">
          <About />
          <Tech />
          <Project />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
