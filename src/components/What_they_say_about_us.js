import React, { Component } from "react";
import Slider from "react-slick";

export default class VariableWidth extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: window.innerWidth < 600 ? 1 : 2,
      slidesToScroll: 1,
      autoplay: true,
      arrow: false,
    };
    const screenWidth = window.innerWidth;
    return (
      <div>
        <div class="testimonials">
          <div class="container">
            <div class="row"></div>
            <div class="col-md-12">
              <div class="section-heading">
                <h2>
                  <em>Your Feedback Matters</em>
                </h2>
                <span>Client Reviews</span>
              </div>
            </div>
            <Slider {...settings}>
              <div>
                <div class="testimonial-item">
                  <div class="inner-content">
                    <h4>Ryan Hutchinson</h4>
                    <span>United States</span>
                    <p>
                      {screenWidth > 770
                        ? "We had a job which needed quick expert help and right  then we found Ever Green, Job completed successfully with all work asked within the timeline, Kudos"
                        : "We had a job which needed quick expert help and right ...."}
                    </p>
                  </div>
                  {/* <img src="http://placehold.it/60x60" alt="" /> */}
                </div>
              </div>

              <div class="testimonial-item">
                <div class="inner-content">
                  <h4>CB</h4>
                  <span>United States</span>

                  <p>
                    {screenWidth > 770
                      ? "They have a very good development team. Responsive and dependable. We are working with them on other projects. Highly recommended!"
                      : "They have a very good development team. Responsive and dep...."}
                  </p>
                </div>
                {/* <img src="http://placehold.it/60x60" alt="" /> */}
              </div>

              <div>
                <div class="testimonial-item">
                  <div class="inner-content">
                    <h4>Fahad S</h4>
                    <span>Pakistan</span>
                    <p>
                      {screenWidth > 770
                        ? "Ever Green was a delight to work with. There Mobile App development team has a very firm grasp on React and React Native, ensured timely delivery and dedication. Will consider them for future for sure."
                        : "Ever Green was a delight to work with. There Mobile App development team has a..."}
                    </p>
                  </div>
                  {/* <img src="http://placehold.it/60x60" alt="" /> */}
                </div>
              </div>

              <div>
                <div class="testimonial-item">
                  <div class="inner-content">
                    <h4>Laurent Louis-Henry</h4>
                    <span>France</span>
                    <p>
                      {screenWidth > 770
                        ? "Ever Green a permis à mon application de prendre forme ! En partant d’une simple idée, ils ont su faire preuve d’initiative et me conseiller sur les décisions à prendre."
                        : "Ever Green a permis à mon application de prendre forme...."}
                    </p>
                  </div>
                  {/* <img src="http://placehold.it/60x60" alt="" /> */}
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
