import React from 'react';
const Per_Bar = () => {
  return (
    <>
      <div class='sub-header'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-8 col-xs-12'>
              <ul class='left-info'>
                <li>
                  <a href='#'>
                    <i class='fa fa-clock-o'></i>Mon-Fri 09:00-17:00
                  </a>
                </li>
                <li>
                  <a href='https://wa.me/+33658883107' target='_blank'>
                    090-080-0760
                  </a>
                  {/* <i class='fa fa-phone'></i> */}
                </li>
              </ul>
            </div>
            <div class='col-md-4'>
              <ul class='right-icons'>
                <li>
                  <a href='#'>
                    <i class='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i class='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i class='fa fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i class='fa fa-behance'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Per_Bar;
