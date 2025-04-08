import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setShowHeader(true);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={{ ...styles.header, ...(showHeader ? {} : { transform: "translateY(-100%)" }) }}>
      <div style={styles.logo}>MySite</div>

      {/* Hamburger for small screens */}
      <div style={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation Links */}
      <nav style={{ ...styles.nav, ...(menuOpen ? styles.navOpen : {}) }}>
        <span style={styles.text} onClick={() => navigate("/")}>
          Home
        </span>
        <span style={styles.text} onClick={() => navigate("/About")}>
          About
        </span>
        <span style={styles.text} onClick={() => navigate("/Contact")}>
          Contact Us
        </span>
        <span style={styles.text} onClick={() => navigate("/VideoCallPage")}>
        VideoCallPage
        </span>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#6200ee",
    position: "fixed",
    zIndex: 999,
    transition: "transform 0.3s ease",
    flexWrap: "wrap",
  },
  logo: {
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  text: {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  hamburger: {
    display: "none",
    fontSize: "24px",
    color: "white",
    cursor: "pointer",
  },
  navOpen: {
    flexDirection: "column",
    width: "100%",
    marginTop: "10px",
    display: "flex",
  },
};

// Media query using JS
const mediaQuery = window.matchMedia("(max-width: 768px)");
mediaQuery.addEventListener("change", () => {
  const hamburger = document.querySelector("[style*='hamburger']");
  const nav = document.querySelector("nav");
  if (mediaQuery.matches) {
    if (hamburger) hamburger.style.display = "block";
    if (nav) nav.style.display = "none";
  } else {
    if (hamburger) hamburger.style.display = "none";
    if (nav) nav.style.display = "flex";
  }
});

export default Header;
