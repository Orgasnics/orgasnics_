import React from "react";
import MobileNavbar from "./MobileNavbar";
const Per_Bar = () => {
  return (
    <>
      <div class="sub_header">
        <div class="sub_header_container">
          <div class="sub_container">
            <div class="left_info">
              <div class="sub_left_info">
                <div>
                  <p>Mon-Fri 09:00-18:00</p>
                </div>
                <div>
                  <a
                    href="https://wa.me/+923135098197"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i> +923135098197</i>
                  </a>
                </div>
              </div>
            </div>
            <div class="right_info">
              <div class="sub_right_info">
                <div>
                  <a href="#our_services">Our Services</a>
                </div>
                <div>
                  <a href="#learn_more">About Us</a>
                </div>
                <div>
                  <a href="#Our_Clients">Our Clients</a>
                </div>
                <div>
                  <a href="#contact_id">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mobileHeader">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Per_Bar;
