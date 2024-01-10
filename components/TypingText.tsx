"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
};
const Text = ({ title }: Props) => (
  <motion.div>
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              ease: "easeIn",
            },
          },
        }}
        key={index}
        className="head-text"
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.div>
);
const TypingText = () => {
  return (
    <div>
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.09,
              delayChildren: 1,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex justify-center"
      >
        <Text title="About My Self " />
      </motion.div>
    </div>
  );
};

export default TypingText;
