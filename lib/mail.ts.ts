import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
const domain = "http://localhost:3000";
export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Link to confirm your email from OpConnect",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev", //bharathaaleti018@gmail.com
    to: email,
    subject: "Link to reset password from OpConnect",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  });
};
