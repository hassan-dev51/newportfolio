import Image from "next/image";
import Link from "next/link";
import StarWrapper from "@/hoc/StarWrapper";
import { MotionDiv } from "./MotionDiv";
import { images } from "@/constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse items-center justify-center overflow-hidden px-6 pb-28 pt-20 md:flex-row md:items-end md:justify-around md:px-4"
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
        <p className="flex flex-col pb-9 text-[18px] leading-10 tracking-wide md:gap-6 md:text-2xl">
          Hi 👋 I am <span className="text-[#2493d4]">Hassan Ali</span>
          Modren Web Developer
        </p>

        <div className="z-10 flex flex-col gap-4 md:flex-row">
          {images.map((currElem) => (
            <Link
              key={currElem.id}
              href={currElem.url}
              className="flex items-center gap-3 rounded-lg bg-[#68696e] px-6 py-2 text-white transition ease-in-out hover:bg-gray-900"
            >
              <Image
                src={currElem.image}
                alt={currElem.alt}
                width={30}
                height={30}
                className="w-auto"
              />
              {currElem.title}
            </Link>
          ))}
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
