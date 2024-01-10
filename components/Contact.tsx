import Form from "./Form";
import { MotionSection } from "./MotionSection";

const Contact = () => {
  return (
    <MotionSection
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, ease: "backInOut", duration: 1 }}
      viewport={{ once: false }}
      id="contact"
      className="my-12"
    >
      <h2 className="head-text text-center">
        Innovation Starts with a Conversation Reach Out!
      </h2>
      <div>
        <Form />
      </div>
    </MotionSection>
  );
};

export default Contact;
