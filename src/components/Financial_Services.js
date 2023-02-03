import React from "react";
import service_01 from "../assets/service_01.jpg";
import service_02 from "../assets/service_02.jpg";
import service_03 from "../assets/service_03.jpg";

const Financial_Services = () => {
  return (
    <>
      <div class="services" id="our_services">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>
                  Services <em>We Provide</em>
                </h2>
                <span>Our aim provide better service</span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-item">
                <img src={service_01} alt="" />
                <div class="down-content">
                  <h4>MOBILE DEVELOPMENT</h4>
                  <p>
                    Our technical teams specialized in mobile development can
                    develop hybr...
                  </p>
                  {/* <a href='' class='filled-button'>
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-item">
                <img src={service_02} alt="" />
                <div class="down-content">
                  <h4>WEB DEVELOPERS</h4>
                  <p>
                    Our web teams are always at the forefront of technology for
                    both the f...
                  </p>
                  {/* <a href='' class='filled-button'>
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-item">
                <img src={service_03} alt="" />
                <div class="down-content">
                  <h4>SOFTWARE DEVELOPERS</h4>
                  <p>
                    Our teams of software engineers have the expertise to
                    develop successf...
                  </p>
                  {/* <a href='' class='filled-button'>
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financial_Services;
