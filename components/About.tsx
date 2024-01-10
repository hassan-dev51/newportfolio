import TypingText from "./TypingText";

const About = (): React.JSX.Element => {
  return (
    <section id="about" className="pt-12">
      <TypingText />

      <div className="flex py-8">
        <p className="paragraph-text">
          I am{" "}
          <span className="font-bold text-[#2493d4]">Web Apps Developer</span>{" "}
          having a special interest in Frontend technologies, and expertise in
          JavaScript TypeScript with frameworks like{" "}
          <strong>React, Next.js and Flask</strong>. I'm a quick learner and
          collaborate closely with clients to create efficient, scalable, and
          user-friendly solutions that solve real-world problems. Let's work
          together to bring your ideas to life!
        </p>
      </div>
    </section>
  );
};

export default About;
