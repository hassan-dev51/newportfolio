import Form from "./Form";
import { MotionSection } from "./MotionSection";

const Contact = () => {
  return (
    <MotionSection
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, ease: "backInOut", duration: 0.6 }}
      id="contact"
      className="my-12"
    >
      <h2 className="text-center font-bold text-[2xl] md:text-4xl">
        Innovation Starts with a Conversation Reach Out!
      </h2>
      <div>
        <Form />
      </div>
    </MotionSection>
  );
};

export default Contact;
