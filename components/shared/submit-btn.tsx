import React from "react";
import { useFormStatus } from "react-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="nn-btn group min-w-48 min-h-16 nn-btn-primary flex items-center justify-center btn-arrow bg-slate-900 hover:bg-slate-950 text-white hover:text-white dark:text-slate-900 dark:hover:text-white dark:bg-white dark:hover:bg-slate-900 border border-slate-900 dark:border-white"
    >
      {pending ? (
        <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-slate-900 group-hover:border-white"></span>
      ) : (
        <>
          Send Message
          <span className="arrow-icon">
            <HiOutlineArrowNarrowRight />
          </span>
        </>
      )}
    </button>
  );
}
