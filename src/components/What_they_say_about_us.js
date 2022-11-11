import React, { Component } from 'react';
import Slider from 'react-slick';

export default class VariableWidth extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrow: false,
    };
    return (
      <div>
        <div class='testimonials'>
          <div class='container'>
            <div class='row'></div>
            <div class='col-md-12'>
              <div class='section-heading'>
                <h2>
                  What they say <em>about us</em>
                </h2>
                <span>testimonials from our greatest clients</span>
              </div>
            </div>
            <Slider {...settings}>
              <div>
                <div class='testimonial-item'>
                  <div class='inner-content'>
                    <h4>George Walker</h4>
                    <span>Chief Financial Analyst</span>
                    <p>
                      "We were looking for a team who could take on our project and finish the job,
                      EverGreen Completed all work as asked. Gladly I found them"
                    </p>
                  </div>
                  <img src='http://placehold.it/60x60' alt='' />
                </div>
              </div>

              <div class='testimonial-item'>
                <div class='inner-content'>
                  <h4>John Smith</h4>
                  <span>Market Specialist</span>
                  <p>
                    "They have a very good development team. Responsive and dependable. We are
                    working with them on other projects. Highly recommended!"
                  </p>
                </div>
                <img src='http://placehold.it/60x60' alt='' />
              </div>

              <div>
                <div class='testimonial-item'>
                  <div class='inner-content'>
                    <h4>David Wood</h4>
                    <span>Chief Accountant</span>
                    <p>
                      "Ever Green was a delight to work with. There Mobile App development team has
                      a very firm grasp on React and React Native, ensured timely delivery and
                      dedication."
                    </p>
                  </div>
                  <img src='http://placehold.it/60x60' alt='' />
                </div>
              </div>

              <div>
                <div class='testimonial-item'>
                  <div class='inner-content'>
                    <h4>Andrew Boom</h4>
                    <span>Marketing Head</span>
                    <p>
                      "It is a long established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout."
                    </p>
                  </div>
                  <img src='http://placehold.it/60x60' alt='' />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
