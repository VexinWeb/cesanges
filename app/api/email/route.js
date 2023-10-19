import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstname, lastname, email, phone, subject, message } =
    await request.json();
  const mailAuth = process.env.EMAIL_USER;
  const passwordAuth = process.env.EMAIL_PASSWORD;

  let transporter = nodemailer.createTransport({
    host: "mail.vexinweb.fr",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: mailAuth,
      pass: passwordAuth,
    },
  });

  const messageContent =
    "Nouvelle soumission de formulaire de contact depuis le site aimecesanges.fr :\n\n" +
    "Détails du contact :\n\n" +
    "Nom : " +
    firstname +
    " " +
    lastname +
    "\n" +
    "Numéro de téléphone : " +
    phone +
    "\n" +
    "Adresse mail : " +
    email +
    "\n\n" +
    "Message :\n" +
    message +
    "\n\n";

  const mailOptions = {
    from: "aimecesanges@gmail.com",
    to: "aimecesanges@gmail.com",
    cc: "contact@vexinweb.fr",
    subject: `Message depuis le site aimecesanges.fr de ${firstname} ${lastname} (${email})`,
    text: messageContent,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
