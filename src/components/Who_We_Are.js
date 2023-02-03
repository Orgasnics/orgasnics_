import React from "react";
import more_info1 from "../assets/more-info.jpg";
const Who_We_Are = () => {
  return (
    <>
      <div class="more-info" id="learn_more">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="more-info-content">
                <div class="row">
                  <div class="col-md-6">
                    <div class="left-image">
                      <img src={more_info1} alt="" />
                    </div>
                  </div>
                  <div class="col-md-6 align-self-center">
                    <div class="right-content">
                      <span>BEST company</span>
                      <h2>
                        About <em>Ever Green</em>
                      </h2>
                      <p>
                        Ever Green is a development agency that specializes in
                        web application development and consultancy in the field
                        of new technologies. We combine rigor, quality of work
                        and optimized production costs. Founded in 2015, Ever
                        Green started out as a consulting company which worked
                        with large companies such as Microsoft, Canon and Accor.
                        In 2017, Ever Green took off and became a development
                        agency, bringing together over 10 years of experience in
                        application development and project management in its
                        team. Established in France, United States and Pakistan,
                        the company is providing development services worldwide.
                      </p>
                      {/* <a href="#" class="filled-button">
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Who_We_Are;
