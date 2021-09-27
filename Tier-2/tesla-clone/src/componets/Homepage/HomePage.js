import React from "react";
import styled from "styled-components";
import "./HomePage.css";
import Nav from "../Nav/Nav";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function HomePage() {
  return (
    <div class="homepage">
      <Nav />
      <div class="title-delivery">
        <h1 className="title">Title</h1>
        <h2>
          Order Online for
          <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
            Touchless Delivery
          </a>
        </h2>
      </div>
      <div class="buttons">
        <button>CUSTOM ORDER</button>
        <button>EXISTING INVENTORY</button>
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
      </div>
    </div>
  );
}

export default HomePage;
