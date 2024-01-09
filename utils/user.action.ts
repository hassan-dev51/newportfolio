"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "./connection";
import schema from "./models/formSchema";

export const handleSubmit = async (formData: FormData) => {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };
  await connectDB();
  try {
    await schema.create({
      name: rawData.name,
      email: rawData.email,
      subject: rawData.subject,
      message: rawData.message,
    });
  } catch (error) {
    return {
      error: "Internal Server Error! Message Sending Failed",
    };
  }
  revalidatePath("/");
};
