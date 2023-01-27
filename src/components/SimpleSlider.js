import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrow: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div class="Modern-Slider">
              <div class="item item-1">
                <div class="img-fill">
                  <div class="text-content">
                    <h6>Managing a Remote Team</h6>
                    <h4>
                      Published on
                      <br />
                      June 13th 2022
                    </h4>
                    <p>
                      In the past, it was easy to manage a team of employees who
                      were not working thousands of miles away from you.
                      Nowadays, businesses are adopting remote trends by
                      employing skilled workers from around the globe.
                      Naturally, the manager is responsible fo...
                    </p>
                    <a href="" class="filled-button">
                      contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="Modern-Slider">
              <div class="item item-2">
                <div class="img-fill">
                  <div class="text-content">
                    <h6>Why having a business website is necessary ?</h6>
                    <h4>
                      Published on
                      <br />
                      June 13th 2022
                    </h4>
                    <p>
                      We live in a digital world where everyone has cell-phones
                      with the internet. Most consumers will be using their
                      electronic devices to search for online information that
                      will help them in making a smarter purchase decision.
                      Actually, according to a su...
                    </p>
                    <a href="" class="filled-button">
                      our services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="Modern-Slider">
              <div class="item item-3">
                <div class="img-fill">
                  <div class="text-content">
                    <h6>Agile Methodology</h6>
                    <h4>
                      Published on
                      <br />
                      August 3rd 2022
                    </h4>
                    <p>
                      Agile stands for its versatility and evolutionary nature
                      as one of the most common approaches to project
                      management. Those who work in the industry, or closely to
                      it, are aware that the art of software development is
                      special and a bit different to ot...
                    </p>
                    <a href="" class="filled-button">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
