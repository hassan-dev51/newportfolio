import nodemailer from "nodemailer";

const mail = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: mail,
    pass: password,
  },
});

export async function sendEmail({ name, email, subject, message }: any) {
  await transporter.sendMail({
    from: email,
    to: mail,
    subject: subject,
    text: `${name}`,
    html: `<h1>${name}\n<h1> <a>${email}</a> <p>${message}<p>`,
  });
}
