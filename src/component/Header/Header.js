import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <div style={styles.leftside}></div>
      <span style={styles.text} onClick={() => navigate("/")}>Home</span>
      <span style={styles.text} onClick={() => navigate("/about")}>About</span>
      <span style={styles.text} onClick={() => navigate("/contact")}>Contact Us</span>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#6200ee",
  },
  leftside: {
    width: "50%",
  },
  text: {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Header;
