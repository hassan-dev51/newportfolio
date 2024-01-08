"use client";

import { ChangeEvent, FormEvent, useState } from "react";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const hanldeChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div>
      {" "}
      <form
        action=""
        className="m-auto flex max-w-3xl flex-col gap-6 p-5"
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={hanldeChange}
            autoComplete="on"
            placeholder="Your Good Name!"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={hanldeChange}
            placeholder="Your Email!"
            autoComplete="on"
            required
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formValues.subject}
            onChange={hanldeChange}
            autoComplete="on"
            placeholder="Subject..."
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            cols={10}
            rows={10}
            value={formValues.message}
            onChange={hanldeChange}
            placeholder="Write your Message.."
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="rounded-md bg-[#2493d4] p-3 text-[#68696e] hover:border hover:border-[#2493d4] hover:bg-transparent"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
