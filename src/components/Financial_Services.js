import React from "react";
import service_01 from "../assets/service_01.jpg";
import service_02 from "../assets/service_02.jpg";
import service_03 from "../assets/service_03.jpg";

const Financial_Services = () => {
  const innerWidth = window.innerWidth;
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
                  <tooltip
                    title="Our technical teams specialized in mobile development can
                      develop hybrid or native applications to adapt your
                      projects to customer needs."
                  >
                    <p>
                      {innerWidth > 768
                        ? "Our technical teams specialized in mobile development can develop hy..."
                        : "Our technical teams specialized in mobile development can develop hybrid or native applications to adapt your projects to customer needs."}
                    </p>
                  </tooltip>
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

                  <tooltip
                    title="Our web teams are always at the forefront of technology
                    for both the front end and the back end."
                  >
                    <p>
                      {innerWidth > 768
                        ? "Our web teams are always at the forefront of technology for both the f..."
                        : "Our web teams are always at the forefront of technology for both the front end and the back end."}
                    </p>
                  </tooltip>
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

                  <tooltip
                    title="Our teams of software engineers have the expertise to
                    develop successful software adapted to the various trades."
                  >
                    <p>
                      {innerWidth > 768
                        ? "Our teams of software engineers have the expertise to develop succes..."
                        : "Our teams of software engineers have the expertise to develop successful software adapted to the various trades."}
                    </p>
                  </tooltip>

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
