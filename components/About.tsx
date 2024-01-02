import TypingText from "./TypingText";

const About = (): React.JSX.Element => {
  return (
    <section id="about" className="pt-12">
      <TypingText />

      <div className="flex px-4 py-8">
        <p className="p-8 text-start text-xl text-[#68696e] md:text-justify">
          <span className="font-bold text-[#2493d4]">
            Web Application Developer
          </span>{" "}
          having a special interest in Frontend technologies and experience of
          building Web applications with JavaScript{" "}
          <strong>Next JS React JS</strong> and some other cool libraries and
          frameworks.
        </p>
      </div>
    </section>
  );
};

export default About;
