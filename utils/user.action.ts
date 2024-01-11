"use server";

import { connectDB } from "./connection";
import schema from "./models/formSchema";
import { sendEmail } from "./nodemailer";

export const handleSubmit = async (formData: FormData) => {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };
  await connectDB();

  try {
    const { email, message, name, subject } = rawData;
    await schema.create({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
    await sendEmail({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
    return {
      message: "Message Send Succussfully",
    };
  } catch (error) {
    return {
      error: "Internal Server Error! Message Sending Failed",
    };
  }
};
