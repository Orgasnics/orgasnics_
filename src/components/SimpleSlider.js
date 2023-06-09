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
                    <p>Published on June 13th 2022</p>

                    <p>
                      In the past, it was easy to manage a team of employees who
                      were not working thousands of miles away from you.
                      Nowadays, businesses are adopting remote trends by
                      employing skilled workers from around the globe.
                      Naturally, the manager is responsible for not only
                      managing the team.
                    </p>
                    <a href="#contact_id" class="filled-button">
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
                    <p>Published on June 13th 2022</p>
                    <p>
                      We live in a digital world where everyone has cell-phones
                      with the internet. Most consumers will be using their
                      electronic devices to search for online information that
                      will help them in making a smarter purchase decision.
                      Actually, according to to a survey, 88% of the consumers
                      will search online.
                    </p>
                    <a href="#our_services" class="filled-button">
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
                    <p>Published on June 13th 2022</p>
                    <p>
                      Agile stands for its versatility and evolutionary nature
                      as one of the most common approaches to project
                      management. Those who work in the industry, or closely to
                      it, are aware that the art of software development is
                      special and a bit different to other kinds of
                      Engineerings.
                    </p>
                    <a href="#learn_more" class="filled-button">
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
