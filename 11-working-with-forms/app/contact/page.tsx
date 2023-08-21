import NewContact from "@/components/UncontrolledForm";
import ContactForm from "@/components/ControlledForm";
import Container from "@/components/Container";
import { Metadata } from "next";
import React from "react";
import ReactHookForm from "@/components/ReactHookForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div>
      <Container>
        {/* 1. Using controlled fields */}
        {/* <ContactForm /> */}

        {/* 2. Using Uncontrolled fields */}
        {/* <NewContact /> */}
        <ReactHookForm />
      </Container>
    </div>
  );
}
