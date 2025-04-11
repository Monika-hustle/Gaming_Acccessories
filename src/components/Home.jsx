import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import './Home.css';

function Home() {
  

  return (
    <div className="home">
      <Navbar />
      <div className="banner">
        <img src="/assests/BannerBg.jpg" alt="Banner" />
        <div className="banner-text">
          <h2>Welcome to GM Gaming Accessories 🎮</h2> {/* ✅ JSX interpolation */}
          <p>Enjoy our gaming accessories!</p>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default Home;
