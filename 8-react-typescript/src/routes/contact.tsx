import React from "react";

export default function Contact() {
  const contact = {
    first: "Ken",
    last: "Mwangi",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };
  return (
    <div>
      <img
        src={contact.avatar}
        alt="Pic"
        className="w-[100px] h-[100px] rounded-full object-cover"
      />
      <h1>
        {contact.first} {contact.last}
      </h1>
    </div>
  );
}
