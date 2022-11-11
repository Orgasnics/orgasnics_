import React from 'react';
import service_01 from '../assets/service_01.jpg';
import service_02 from '../assets/service_02.jpg';
import service_03 from '../assets/service_03.jpg';

const Financial_Services = () => {
  return (
    <>
      <div class='services'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <div class='section-heading'>
                <h2>
                  Financial <em>Services</em>
                </h2>
                <span>Broad range of more specific activities</span>
              </div>
            </div>
            <div class='col-md-4'>
              <div class='service-item'>
                <img src={service_01} alt='' />
                <div class='down-content'>
                  <h4>Digital Currency</h4>
                  <p>
                    a form of currency that exists only in digital or electronic form and that can
                    operate independently of a central bank.
                  </p>
                  {/* <a href='' class='filled-button'>
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
            <div class='col-md-4'>
              <div class='service-item'>
                <img src={service_02} alt='' />
                <div class='down-content'>
                  <h4>Market Analysis</h4>
                  <p>
                    the activity of gathering information about conditions that affect a
                    marketplace.
                  </p>
                  {/* <a href='' class='filled-button'>
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
            <div class='col-md-4'>
              <div class='service-item'>
                <img src={service_03} alt='' />
                <div class='down-content'>
                  <h4>Historical Data</h4>
                  <p>
                    Data collected about past events and circumstances pertaining to a particular
                    subject.
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
