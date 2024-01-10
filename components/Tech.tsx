import { skillTypes, skills } from "@/constants";
import Image from "next/image";
const Tech = () => {
  return (
    <section id="tect">
      <h2 className="head-text">My Skills</h2>
      <div className="my-16 flex flex-wrap justify-center gap-12">
        {skills.map((skill: skillTypes) => (
          <div
            key={skill.name}
            className="block-container h-20 w-20 cursor-pointer px-16"
          >
            <div className="btn-back flex-rounded">
              <span>{skill.skill}%</span>
            </div>
            <div className="btn-front flex-rounded">
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                width={100}
                height={100}
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
