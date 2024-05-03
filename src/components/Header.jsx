import React from "react";
import "../components/Header.css";

function header () {
  return (
   <div className="container">
     <nav>
      <img src="https://zyan.vercel.app/images/logo.png" alt="" />

      <ul>
        <li>
          <a href="#">Home<i class="fa-solid fa-chevron-down"></i></a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Blog <i class="fa-solid fa-chevron-down"></i></a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div>
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
   </div>
  );
};

export default header;
