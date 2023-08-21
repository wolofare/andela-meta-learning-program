"use client";
import React, { useState } from "react";

interface Contact {
  name: string;
  email: string;
  reason: string;
  notes: string;
}
export default function ContactForm() {
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    reason: "",
    notes: "",
  });

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted successfully", contact);
  };
  const fieldStyle = `flex flex-col mb-2`;
  return (
    <section className="flex flex-col py-10 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">
        Enter the details we will get back to you
      </h2>
      <p className="mb-3 text-gray-600">
        If you enter your details we will get back to you as soon as we can
      </p>

      <form onSubmit={formSubmitHandler}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select
            name="reason"
            id="reason"
            value={contact.reason}
            onChange={(e) => setContact({ ...contact, reason: e.target.value })}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            name="notes"
            id="notes"
            value={contact.notes}
            onChange={(e) => setContact({ ...contact, notes: e.target.value })}
          />
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
