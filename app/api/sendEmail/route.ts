import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {

    let requestData;
    try {
      requestData = await req.json();
    } catch (err) {
      return NextResponse.json({ error: "Invalid JSON format",err }, { status: 400 });
    }

    const { to, subject, html } = requestData;


    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    };


    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
