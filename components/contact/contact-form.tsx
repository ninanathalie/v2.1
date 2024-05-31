"use client";

import React from "react";
import SubmitButton from "@/components/shared/submit-btn";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/send-email";

export default function ContactForm() {
  return (
    <form
      className="space-y-6"
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!");
      }}
    >
      <div>
        <input
          className="form-control w-full h-13 md:h-14 py-4 px-6 leading-tight bg-white placeholder-gray-300 border border-slate-900 dark:border-white dark:text-gray-200 dark:bg-slate-900/20 outline-none rounded-none shadow-none"
          type="email"
          name="senderEmail"
          autoComplete="email"
          placeholder="Your Email"
          required
        />
      </div>
      <div>
        <textarea
          name="senderMessage"
          placeholder="Your message"
          maxLength={5000}
          required
          rows={4}
          className="form-control w-full py-4 px-6 leading-tight bg-white placeholder-gray-300 border border-slate-900 dark:border-white dark:text-gray-200 dark:bg-slate-900/20 outline-none rounded-none shadow-none"
        ></textarea>
      </div>
      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}
