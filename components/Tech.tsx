import { skills } from "@/constants";
import Image from "next/image";
import React from "react";

type Props = {};

const Tech = () => {
  return (
    <section id="tect">
      <h2 className="text-4xl font-bold text-[#68696E]">My Skills</h2>
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div>
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                width={80}
                height={80}
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
