import React from "react";

const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Navigation</h2>
        <button onClick={handleLogout}>Log out</button>
      </nav>
      <h3>Well, try to imagine a lovely dashboard here.</h3>
    </section>
  );
};

export default Hero;
