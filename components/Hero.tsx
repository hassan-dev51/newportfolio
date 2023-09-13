"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = (): React.JSX.Element => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse items-center justify-center  overflow-hidden px-6 pb-28 pt-20 md:flex-row md:items-end md:justify-around md:px-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1],
          x: [-200, 0],
          transition: { ease: "easeInOut", duration: 1 },
        }}
        viewport={{ once: false }}
      >
        <p className="flex flex-col gap-6 pb-9 text-2xl leading-10 tracking-wide">
          Hi 👋 I am <span className="text-4xl text-[#2493d4]">Hassan Ali</span>
          Full stack Next JS Developer
        </p>

        <div className="flex flex-col gap-4 md:flex-row ">
          <Link
            href="https://github.com/hassan-dev51"
            className="flex items-center gap-3 rounded-lg bg-[#68696e] px-6 py-2"
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
            className="flex items-center gap-3 rounded-lg bg-[#68696e] px-6 py-2"
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1],
          x: [200, 0],
          transition: { ease: "easeInOut", duration: 1, delayChildren: 1.5 },
        }}
      >
        <div className="md:h-[400px]">
          <Image
            src={"/images/hero.png"}
            alt="hero-image"
            width={500}
            height={500}
            priority
            className="h-[400px] w-auto object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
