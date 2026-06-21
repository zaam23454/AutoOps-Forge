import net from "node:net";
import tls from "node:tls";
import type { ValidContactSubmission } from "./contactSchema";

type SmtpSocket = net.Socket | tls.TLSSocket;

function read(socket: SmtpSocket) {
  return new Promise<string>((resolve, reject) => {
    const onData = (chunk: Buffer) => {
      cleanup();
      resolve(chunk.toString("utf8"));
    };
    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };
    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
    };
    socket.once("data", onData);
    socket.once("error", onError);
  });
}

async function write(socket: SmtpSocket, command: string) {
  socket.write(command);
  return read(socket);
}

function encodeBase64(value: string) {
  return Buffer.from(value, "utf8").toString("base64");
}

function emailBody(submission: ValidContactSubmission) {
  return [
    "New AutoOps Forge Contact Submission",
    "",
    `Submitted At: ${submission.submittedAt}`,
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `WhatsApp: ${submission.whatsapp}`,
    `Project Type: ${submission.projectType}`,
    `Budget Range: ${submission.budgetRange}`,
    `Timeline: ${submission.timeline}`,
    `Source Page: ${submission.sourcePage}`,
    "",
    "Message:",
    submission.message
  ].join("\n");
}

export async function sendEmailAlert(submission: ValidContactSubmission) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!host || !user || !pass || !from || !to) {
    console.warn("SMTP contact email config is incomplete. Skipping email alert.");
    return { ok: false, skipped: true, target: "email" as const };
  }

  const secure = port === 465;
  const socket: SmtpSocket = secure
    ? tls.connect({ host, port, servername: host })
    : net.connect({ host, port });

  await read(socket);
  await write(socket, `EHLO autoopsforge.com\r\n`);

  let activeSocket = socket;
  if (!secure) {
    await write(activeSocket, "STARTTLS\r\n");
    activeSocket = tls.connect({ socket: activeSocket, servername: host });
    await write(activeSocket, `EHLO autoopsforge.com\r\n`);
  }

  await write(activeSocket, "AUTH LOGIN\r\n");
  await write(activeSocket, `${encodeBase64(user)}\r\n`);
  await write(activeSocket, `${encodeBase64(pass)}\r\n`);
  await write(activeSocket, `MAIL FROM:<${from}>\r\n`);
  await write(activeSocket, `RCPT TO:<${to}>\r\n`);
  await write(activeSocket, "DATA\r\n");

  const message = [
    `From: ${from}`,
    `To: ${to}`,
    "Subject: New AutoOps Forge Contact Submission",
    "Content-Type: text/plain; charset=utf-8",
    "",
    emailBody(submission),
    "."
  ].join("\r\n");

  await write(activeSocket, `${message}\r\n`);
  await write(activeSocket, "QUIT\r\n");
  activeSocket.end();

  return { ok: true, skipped: false, target: "email" as const };
}
