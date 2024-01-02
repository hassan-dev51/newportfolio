import { ComponentType } from "react";
import { MotionSection } from "@/components/MotionSection";

const StarWrapper = (Component: ComponentType) => {
  return function HOC() {
    return (
      <MotionSection
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
        viewport={{ once: true, amount: 0.25 }}
      >
        <Component />
      </MotionSection>
    );
  };
};

export default StarWrapper;
