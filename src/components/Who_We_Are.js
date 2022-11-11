import React from 'react';
import more_info1 from '../assets/more-info.jpg';
const Who_We_Are = () => {
  return (
    <>
      <div class='more-info'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <div class='more-info-content'>
                <div class='row'>
                  <div class='col-md-6'>
                    <div class='left-image'>
                      <img src={more_info1} alt='' />
                    </div>
                  </div>
                  <div class='col-md-6 align-self-center'>
                    <div class='right-content'>
                      <span>Who we are</span>
                      <h2>
                        Get to know about <em>our company</em>
                      </h2>
                      <p>
                        Trustful, skilled and ambitious team of developers, UI/UX designers, project
                        managers and quality testers. Our aim is to build healthy partnerships with
                        our clients, in which respect is the central value. Our main difference with
                        other software houses is that we are committed to delivering the last mile,
                        without any compromise.
                      </p>
                      <a href='#' class='filled-button'>
                        Read More
                      </a>
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
