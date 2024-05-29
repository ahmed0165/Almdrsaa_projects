// ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded-md"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone *"
          value={formData.phone}
          onChange={handleChange}
          className="p-2 border rounded-md"
          required
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border rounded-md mb-4"
        required
      />
      <button type="submit" className="bg-red-500 text-white p-2 rounded-md">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
