import React from "react";

function CardSection() {
  const cards = [
    {
      id: 1,
      title: "Find Your Best Sports Coach",
      subtitle:
        "With Tullo, you can discover top sports coaches near you or let us suggest the best fit for your journey.",
      image: "/tullo.jpg",
      button: "Explore Sports",
    },
    {
      id: 2,
      title: "Discover Tech Mentors",
      subtitle:
        "Get connected with expert tech mentors and learn new skills faster with Tullo’s recommendations.",
      image: "/tullo2.jpg",
      button: "Explore Tech",
    },
  ];

  return (
    // 👇 id="home" added so Header scroll works
    <section id="home" style={styles.section}>
      <div style={styles.grid}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{ ...styles.card, backgroundImage: `url(${card.image})` }}
            className="card"
          >
            {/* Overlay */}
            <div style={styles.overlay}></div>

            {/* Content */}
            <div style={styles.content}>
              <h2 style={styles.title}>{card.title}</h2>
              <p style={styles.subtitle}>{card.subtitle}</p>
              <div style={styles.btnWrapper}>
                <button style={styles.button}>{card.button}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem",
    background: "#f8fafc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2.5rem",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  card: {
    position: "relative",
    height: "600px", // 👈 increased height for premium feel
    borderRadius: "20px",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.25))",
  },
  content: {
    position: "relative",
    color: "white",
    padding: "2.2rem",
    zIndex: 2,
    textAlign: "center",
    width: "100%",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: "800",
    marginBottom: "0.8rem",
  },
  subtitle: {
    fontSize: "1.05rem",
    marginBottom: "2rem",
    lineHeight: "1.7",
    color: "#e2e8f0",
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    background: "linear-gradient(90deg, #2563eb, #7c3aed, #f97316)",
    border: "none",
    padding: "1rem 2.2rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "14px",
    cursor: "pointer",
    color: "white",
    transition: "all 0.3s ease",
    boxShadow: "0 0 14px rgba(124, 58, 237, 0.6)",
  },
};

// Hover effects
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  .card:hover {
    transform: scale(1.04);
    box-shadow: 0 12px 28px rgba(0,0,0,0.45);
  }
  button:hover {
    transform: scale(1.08);
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.85), 
                0 0 30px rgba(37, 99, 235, 0.75);
  }
`;
document.head.appendChild(styleTag);

export default CardSection;
