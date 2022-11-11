import React, { Component } from 'react';
import Slider from 'react-slick';

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
            <div class='Modern-Slider'>
              <div class='item item-1'>
                <div class='img-fill'>
                  <div class='text-content'>
                    <h6>we are ready to help you</h6>
                    <h4>
                      Financial Analysis
                      <br />
                      &amp; Consulting
                    </h4>
                    <p>
                      This finance HTML template is 100% free of charge provided by TemplateMo for
                      everyone. You can download, edit and use this layout for your business
                      website.
                    </p>
                    <a href='' class='filled-button'>
                      contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class='Modern-Slider'>
              <div class='item item-2'>
                <div class='img-fill'>
                  <div class='text-content'>
                    <h6>we are here to support you</h6>
                    <h4>
                      Accounting
                      <br />
                      &amp; Management
                    </h4>
                    <p>
                      You are allowed to use this template for your company websites. You are NOT
                      allowed to re-distribute this template ZIP file on any template download
                      website. Please contact TemplateMo for more detail.
                    </p>
                    <a href='' class='filled-button'>
                      our services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class='Modern-Slider'>
              <div class='item item-3'>
                <div class='img-fill'>
                  <div class='text-content'>
                    <h6>we have a solid background</h6>
                    <h4>
                      Market Analysis
                      <br />
                      &amp; Statistics
                    </h4>
                    <p>
                      Market analysis is a detailed assessment of your business's target market and
                      competitive landscape within a specific industry.
                    </p>
                    <a href='' class='filled-button'>
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
