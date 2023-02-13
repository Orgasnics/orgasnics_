import React, { Component } from "react";
import Slider from "react-slick";

import logo_img from "../assets/logo_img.jfif";
import logo_img2 from "../assets/logo_img2.png";
import logo_img3 from "../assets/logo_img3.jfif";
import idex from "../assets/idex.png";
import afd from "../assets/afd.png";
export default class VariableWidth extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      autoplay: true,
      arrow: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div class="testimonials" id="Our_Clients">
          <div class="container">
            <div class="row"></div>
            <div class="col-md-12">
              <div class="section-heading">
                <h2>
                  Our <em>Clients</em>
                </h2>
                <span>
                  Ever Green had the opportunity to work on various type of
                  projects for its clients. We implemented an efficient process
                  in order to deliver qualitative work on time.
                </span>
              </div>
            </div>
            <div className="partner_item_outer">
              <Slider {...settings}>
                <div class="partner-item">
                  <img src={logo_img} title="" alt="1" />
                </div>

                <div class="partner-item">
                  <img src={logo_img2} title="" alt="2" />
                </div>

                <div class="partner-item">
                  <img src={logo_img3} title="" alt="3" />
                </div>

                <div class="partner-item">
                  <img src={idex} title="" alt="4" />
                </div>

                <div class="partner-item">
                  <img src={afd} title="" alt="5" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
