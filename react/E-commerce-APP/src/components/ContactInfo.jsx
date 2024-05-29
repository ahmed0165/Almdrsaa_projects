// ContactInfo.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="p-4 border rounded-md">
      <div className="mb-4">
        <FaPhoneAlt className="inline mr-2 text-red-500" />
        <span className="font-bold">Call To Us</span>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801112222</p>
      </div>
      <div>
        <FaEnvelope className="inline mr-2 text-red-500" />
        <span className="font-bold">Write to Us</span>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Email: customer@exclusive.com</p>
        <p>Email: support@exclusive.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
