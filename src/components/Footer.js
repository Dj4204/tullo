import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: "#222", color: "#fff", textAlign: "center", padding: "20px" }}>
      <p>© {new Date().getFullYear()} Skill & Sports Guide. All Rights Reserved.</p>
    </footer>
  );
}
