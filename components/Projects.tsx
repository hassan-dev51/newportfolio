import { MotionSection } from "./MotionSection";
import PaginationCard from "./PaginationCard";

const Projects = () => {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      id="project"
      className="mt-16 text-[#68696e]"
    >
      <h2 className="head-text">My Work Experience</h2>
      <p className="paragraph-text">
        Demonstrating my expertise and proficiency, the showcased projects
        provide tangible illustrations of my skills and experience. Each project
        is succinctly outlined, featuring links to repositories containing the
        code and live demonstrations. This portfolio reflects my adeptness in
        addressing intricate challenges, collaborating with diverse
        technologies, and efficiently overseeing project management.
      </p>
      <PaginationCard />
    </MotionSection>
  );
};

export default Projects;
