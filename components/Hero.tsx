"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-around overflow-hidden pb-20 pt-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1],
          x: [-200, 0],
          transition: { ease: "easeInOut", duration: 1 },
        }}
      >
        <p className="leading-10 tracking-wide">
          Hi 👋 <br />I am <span className="">Hassan Ali</span> <br />
          Full stack Next JS Developer
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1],
          x: [200, 0],
          transition: { ease: "easeInOut", duration: 1, delayChildren: 1.5 },
        }}
      >
        <Image
          src={"/images/hero.png"}
          alt="hero-image"
          width={500}
          height={500}
          priority
          className="h-[400px] w-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
