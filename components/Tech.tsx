import { skillTypes, skills } from "@/constants";
import Image from "next/image";
const Tech = () => {
  return (
    <section id="tect">
      <h2 className="text-2xl font-bold text-[#68696E] md:text-4xl">
        My Skills
      </h2>
      <div className="my-16 flex flex-wrap justify-center gap-12">
        {skills.map((skill: skillTypes) => (
          <div
            key={skill.name}
            className="block-container h-20 w-20 cursor-pointer px-16"
          >
            <div className="btn-back flex items-center justify-center rounded-xl">
              <span>{skill.skill}%</span>
            </div>
            <div className="btn-front flex items-center justify-center rounded-xl">
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
