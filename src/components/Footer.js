import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const Submit = () => {
    if (!email || !message || !fullname) {
      return toast.error('Please add all fields ');
    } else {
      toast.success('Saved Successfully');
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bqk7ncn', 'template_64h2zij', e.target, 'RA1551YNJv_HEIHgQ').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    if (!email || !message || !fullname) {
      return toast.error('Please add all fields ');
    } else {
      toast.success('Saved Successfully');
    }
    setEmail('');
    setFullname('');
    setMessage('');
  };
  const showToast = () => {};
  return (
    <>
      {/* <!-- Footer Starts Here --> */}
      <footer>
        <div class='container'>
          <div class='row'>
            <div class='col-md-3 footer-item'>
              <h4>Finance Business</h4>
              <p>
                Vivamus tellus mi. Nulla ne cursus elit,vulputate. Sed ne cursus augue hasellus
                lacinia sapien vitae.
              </p>
              {/* <ul class="social-icons">
                                <li><a rel="nofollow" href="https://fb.com/templatemo" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul> */}
            </div>
            <div class='col-md-3 footer-item'>
              <h4>Useful Links</h4>
              <ul class='menu-list'>
                <li>
                  <a href='#'>Vivamus ut tellus mi</a>
                </li>
                <li>
                  <a href='#'>Nulla nec cursus elit</a>
                </li>
                <li>
                  <a href='#'>Vulputate sed nec</a>
                </li>
                <li>
                  <a href='#'>Cursus augue hasellus</a>
                </li>
                <li>
                  <a href='#'>Lacinia ac sapien</a>
                </li>
              </ul>
            </div>
            {/* <div class='col-md-3 footer-item'>
              <h4>Additional Pages</h4>
              <ul class='menu-list'>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>How We Work</a>
                </li>
                <li>
                  <a href='#'>Quick Support</a>
                </li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
              </ul>
            </div> */}
            <div class='col-md-3 footer-item last-item'>
              <h4>Contact Us</h4>
              <form onSubmit={sendEmail}>
                <div class='contact-form'>
                  <div id='contact footer-contact' action='' method='post'>
                    <div class='row'>
                      <div class='col-lg-12 col-md-12 col-sm-12'>
                        <fieldset>
                          <input
                            name='name'
                            type='text'
                            class='form-control'
                            id='name'
                            placeholder='Full Name'
                            required=''
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                          />
                        </fieldset>
                      </div>
                      <div class='col-lg-12 col-md-12 col-sm-12'>
                        <fieldset>
                          <input
                            name='email'
                            type='text'
                            class='form-control'
                            id='email'
                            pattern='[^ @]*@[^ @]*'
                            placeholder='E-Mail Address'
                            required=''
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </fieldset>
                      </div>
                      <div class='col-lg-12'>
                        <fieldset>
                          <textarea
                            name='message'
                            rows='3'
                            class='form-control'
                            id='message'
                            placeholder='Your Message'
                            required=''
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </fieldset>
                      </div>
                      <div class='col-lg-12'>
                        <fieldset>
                          <button
                            type='submit'
                            id='form-submit'
                            class='filled-button'
                            // onClick={() => {
                            //   Submit();
                            //   showToast();
                            //   setEmail('');
                            //   setFullname('');
                            //   setMessage('');
                            // }}
                          >
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
