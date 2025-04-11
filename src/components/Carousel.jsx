import React from "react";
import { useNavigate } from "react-router-dom";
import "./Carousel.css"; // Import the CSS file for styling

const Carousel = () => {
    const navigate=useNavigate();
  return (
    <section className="carousel-section">
      <h2>Explore Our Products</h2>
      <div className="carousel">
        <div className="carousel-items">
          <img src="/assests/aesthetic-anime-character-gaming (1).jpg" alt="Basic Gaming Product" onClick={() => navigate("/shop")} />
          <img src="/assests/aesthetic-anime-character-gaming.jpg" alt="Intermediate Gaming Product"  onClick={() => navigate("/shop")}/>
          <img src="/assests/anime-character-using-virtual-reality-glasses-metaverse.jpg" alt="Advanced Gaming Product" onClick={() => navigate("/shop")} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
