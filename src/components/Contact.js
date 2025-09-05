import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; // सही import
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_byz0ssa", "template_fymlnft", form.current, "xJd8By_v13gu0jU6P")
      .then(
             () => {
             alert("✅ हमने आपकी जानकारी प्राप्त कर ली है। जल्द ही आपसे संपर्क किया जाएगा।");
             form.current.reset(); // भेजने के बाद form साफ कर देगा
  },
      (error) => {
      console.log("FAILED...", error.text);
      alert("❌ संदेश भेजने में समस्या हुई, कृपया दुबारा प्रयास करें।");
  }
);

  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Contact Us</h2>

        <label>Full Name</label>
        <input type="text" name="name" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your email" required />

        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="Enter your phone number" required />

        <label>Age</label>
        <input type="number" name="age" placeholder="Enter your age" />

        <label>Gender</label>
        <select name="gender">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Message</label>
        <textarea name="message" rows="4" placeholder="Enter your message"></textarea>

        <button type="submit">🚀 Send Message</button>
      </form>
    </div>
  );
}
