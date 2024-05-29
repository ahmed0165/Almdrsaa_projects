// Contact.jsx
import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto my-8 max-w-screen-lg px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <ContactInfo />
        </div>
        <div className="md:w-2/3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
