"use client";

import { handleSubmit } from "@/utils/user.action";
import { useRef } from "react";
import { toast } from "sonner";
import Button from "./Button";

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div>
      <form
        ref={ref}
        action={async (formData) => {
          const result = await handleSubmit(formData);
          if (result?.error) {
            toast.error(result.error);
          } else if (result?.message) {
            ref.current?.reset();
            toast.success(result.message);
          } else {
            toast.info("Unable to send message..");
          }
        }}
        className="m-auto flex max-w-3xl flex-col gap-6 p-5"
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Your Good Name!"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Your Email!"
            autoComplete="off"
            required
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            autoComplete="off"
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
            placeholder="Write your Message.."
            required
          ></textarea>
        </label>
        <Button />
      </form>
    </div>
  );
};

export default Form;
