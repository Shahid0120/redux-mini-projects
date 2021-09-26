import React from "react";
import styled from "styled-components";
import "./HomePage.css";
function HomePage() {
  return (
    <div class="homepage">
      <h1 className="title">Title</h1>
      <h2>
        Order Online for
        <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
          Touchless Delivery
        </a>
      </h2>
      <div className="buttons">
        <button>CUSTOM ORDER</button>
        <button>EXISTING INVENTORY</button>
      </div>
    </div>
  );
}

export default HomePage;
