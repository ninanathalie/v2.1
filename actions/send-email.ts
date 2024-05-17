"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Receives the form data from the contact form and sends an email using Resend API
 *
 * @param formData - The form data containing the sender's email and message.
 * @returns A promise that resolves to an object containing either an error message or the email data.
 * @throws An error if there's an issue with the API request.
 */
export const sendEmail = async (formData: FormData) => {
  const senderMessage = formData.get("senderMessage");
  const senderEmail = formData.get("senderEmail");
  const receiverEmail = process.env.RECIPIENT_EMAIL;

  // simple server-side validation
  if (!validateString(senderEmail, 200)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(senderMessage, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const response = await resend.emails.send({
      from: `${senderEmail} <onboarding@resend.dev>`,
      to: receiverEmail as string,
      reply_to: senderEmail as string,
      subject: "Message from your Portfolio Site! 👋🏼",
      react: React.createElement(ContactFormEmail, {
        senderMessage: senderMessage as string,
        senderEmail: senderEmail as string,
      }),
    });

    if (response.error) {
      return {
        error: getErrorMessage(response.error),
      };
    } else {
      return {
        data: response.data,
      };
    }
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};
