import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Resize listener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderNavItem = (section) => {
    if (section === "home") {
      return (
        <Link
          to="/"
          style={styles.navLink}
          className="nav-btn"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
      );
    } else {
      return (
        <Link
          to={`/${section}`}
          style={styles.navLink}
          className="nav-btn"
          onClick={() => setMenuOpen(false)}
        >
          {section === "about" ? "About Us" : "Contact"}
        </Link>
      );
    }
  };

  return (
    <header style={styles.header}>
      {/* Gradient Logo */}
      <Link to="/" style={styles.logo}>
        Tuloo
      </Link>

      {/* Desktop Menu */}
      {!isMobile && (
        <nav>
          <ul style={styles.navList}>
            {["home", "about", "contact"].map((section) => (
              <li key={section}>{renderNavItem(section)}</li>
            ))}
          </ul>
        </nav>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <button onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
          {menuOpen ? "✖" : "☰"}
        </button>
      )}

      {/* Mobile Dropdown */}
      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          {["home", "about", "contact"].map((section) => (
            <div key={section}>{renderNavItem(section)}</div>
          ))}
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    background: "linear-gradient(90deg, #1e3c72, #2a5298, #ff4b2b)", // Blue → Purple → Orange
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "2rem",
    fontWeight: "900",
    letterSpacing: "2px",
    cursor: "pointer",
    backgroundSize: "200% auto",
    color: "white",
    textDecoration: "none",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "2.5rem",
    margin: 0,
    padding: 0,
  },
  navLink: {
    background: "none",
    border: "none",
    color: "#f1f5f9",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    position: "relative",
    padding: "0.5rem 0.25rem",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  },
  hamburger: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "2rem",
    cursor: "pointer",
  },
  mobileMenu: {
    position: "absolute",
    top: "70px",
    right: "20px",
    background: "#1e293b",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    padding: "1rem 2rem",
    gap: "1.2rem",
    minWidth: "180px",
    animation: "fadeIn 0.3s ease-in-out",
  },
};

// Extra CSS injection
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  .nav-btn::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: #facc15; /* Yellow underline */
    transition: 0.3s ease-in-out;
  }
  .nav-btn:hover::after {
    width: 100%;
  }

  @keyframes fadeIn {
    from {opacity: 0; transform: translateY(-10px);}
    to {opacity: 1; transform: translateY(0);}
  }
`;
document.head.appendChild(styleTag);

export default Header;
