import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <p>© {new Date().getFullYear()} Skill & Sports Guide. All Rights Reserves to Tullo.com.</p>
      <p> Founder :- Nitish Kumar Jha </p>
      

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <a
          href="https://www.instagram.com/nitish_jha2610/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            fontSize: "28px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#E1306C"; // Instagram pink
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61580045322831"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            fontSize: "28px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#1877F2"; // Facebook blue
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.linkedin.com/in/nitish-jha-b22410293/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            fontSize: "28px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#0A66C2"; // LinkedIn blue
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://wa.me/918051297154?text=Hello%20Can%20I%20Get%20Info%20About%20Tullo.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            fontSize: "28px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#25D366"; // WhatsApp green
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}
