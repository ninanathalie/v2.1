"use client";

import React from "react";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/send-email";
import SectionHeading from "@/components/shared/heading";
import SubmitButton from "@/components/shared/submit-btn";

export default function Contact() {
  return (
    <section>
      <div className="container pt-20 px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72 mb-16">
        <div className="nn-title py-10 sm:py-16">
          <div className="grid md:grid-cols-2 md:16 lg:gap-20 gap-4 grid-rows-1">
            <div>
              <h1 className="sm:text-4xl text-3xl font-medium pb-2 md:pb-5">
                <SectionHeading>Get In Touch</SectionHeading>
              </h1>
              <h2 className="font-thin text-base md:text-lg mb-2">Feel free to reach out with any project inquiries, or if you are feeling really adventurous, just drop me a line.</h2>
              <div className="grid grid-cols-2 my-6 md:my-10">
                <div className="grid grid-cols-7 gap-6 md:gap-2 grid-rows-1">
                  <div className="text-right py-1">
                    <svg className="hover:animate-wiggle" width="24" height="26" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 1H5C3.89543 1 3 1.89543 3 3V19C3 20.1046 3.89543 21 5 21H15C16.1046 21 17 20.1046 17 19V3C17 1.89543 16.1046 1 15 1Z" className="stroke-current" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 17H10.01" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="col-span-6 text-left">
                    <span className="font-thin uppercase text-xs md:text-sm">Phone</span>
                    <p>+ 971 55 508 7380</p>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-8 md:gap-2 grid-rows-1">
                  <div className="text-right py-1">
                    <svg className="hover:animate-wiggle" width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13" className="stroke-current" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" className="stroke-current" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="col-span-6 text-left">
                    <span className="font-thin uppercase text-xs md:text-sm">Email</span>
                    <p>hi@nathalie.codes</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
