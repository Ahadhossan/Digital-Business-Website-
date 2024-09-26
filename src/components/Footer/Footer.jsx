import React from "react";
import "./Footer.css";
import EmailBox from "../EmailBox/EmailBox";

const Footer = () => {
  return (
    <div class="f-wrapper">
      <div class="container">
        <div class="f-container">
          <span class="title">Get Funded Today!</span>
          <EmailBox/>
          <hr />
          <div class="f-menu">
            <span>Home</span>
            <span>what we do</span>
            <span>how it works</span>
            <span>who we invest in</span>
            <span>testimonials</span>
          </div>
          <hr />
          <span class="text">Made with ❤️ by Ahad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
