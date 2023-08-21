"use client";
import { ValidationError } from "@/utils/ValidationError";
import { useRouter } from "next/navigation";

import { FieldError, useForm } from "react-hook-form";

interface Contact {
  name: string;
  email: string;
  reason: string;
  notes: string;
}
export default function ReactHooForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({ mode: "onBlur", reValidateMode: "onBlur" });

  const router = useRouter();

  function onSubmit(contact: Contact) {
    console.log("Submitted details", contact);
    router.push(`/thank-you`);
  }

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? "border-red-500" : "";
  }
  const fieldStyle = `flex flex-col mb-4`;
  return (
    <section className="flex flex-col py-10 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">
        Enter the details we will get back to you
      </h2>
      <p className="mb-3 text-gray-600">
        If you enter your details we will get back to you as soon as we can
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            className={getEditorStyle(errors.name)}
            type="text"
            id="name"
            {...register("name", { required: "You must enter your name" })}
          />
          <ValidationError fieldError={errors.name} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address</label>
          <input
            className={getEditorStyle(errors.email)}
            type="email"
            id="email"
            {...register("email", {
              required: "You must enter your email address",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          <ValidationError fieldError={errors.email} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select
            className={getEditorStyle(errors.reason)}
            id="reason"
            {...register("reason", {
              required: "You must enter the reason for contacting us",
            })}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          <ValidationError fieldError={errors.reason} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional Notes</label>
          <textarea id="notes" {...register("notes")} />
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 h-10 px-6 font-semibold bg-black text-white border hover:bg-white hover:text-black hover:border-black transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
