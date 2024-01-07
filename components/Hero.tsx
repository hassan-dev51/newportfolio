import Image from "next/image";
import Link from "next/link";
import StarWrapper from "@/hoc/StarWrapper";
import { MotionDiv } from "./MotionDiv";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse items-center justify-center  overflow-hidden px-6 pb-28 pt-20 md:flex-row md:items-end md:justify-around md:px-4"
    >
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1],
          x: [-200, 0],
          transition: { ease: "easeInOut", duration: 0.5 },
        }}
        viewport={{ once: false }}
      >
        <p className="flex flex-col gap-6 pb-9 text-2xl leading-10 tracking-wide">
          Hi 👋 I am <span className="text-4xl text-[#2493d4]">Hassan Ali</span>
          Modren Web Developer
        </p>

        <div className="z-10 flex flex-col gap-4 md:flex-row">
          <Link
            href="https://github.com/hassan-dev51"
            className="flex items-center gap-3 rounded-lg bg-[#68696e] px-6 py-2 text-white transition ease-in-out hover:bg-gray-900"
          >
            <Image
              src="/images/github-icon.png"
              alt="github"
              width={30}
              height={30}
              className="w-auto"
            />
            Git Hub
          </Link>

          <Link
            href="https://www.linkedin.com/in/hassan-ali-464666255/"
            className="flex items-center gap-3 rounded-lg bg-[#68696e] px-6 py-2 text-white transition ease-in-out hover:bg-gray-600"
          >
            <Image
              src="/images/linkedin.png"
              alt="github"
              width={30}
              height={30}
              className="w-auto"
            />
            LinkedIn
          </Link>
        </div>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1],
          x: [200, 0],
          transition: { ease: "easeInOut", duration: 0.5, delayChildren: 1 },
        }}
      >
        <div className="mix-blend-overlay md:h-[400px] md:translate-y-6 md:scale-110">
          <Image
            src={"/images/hero.png"}
            alt="hero-image"
            width={500}
            height={500}
            priority
            className="-z-10 h-[400px] w-auto  object-contain "
          />
        </div>
      </MotionDiv>
    </section>
  );
};

export default StarWrapper(Hero);
