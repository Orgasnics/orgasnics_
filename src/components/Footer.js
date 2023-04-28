import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Footer = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const emailRegEx = /^([a-z0-9.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/g;

    if (!email || !message || !fullname) {
      return toast.error("Please fill all fields ");
    } else if (!emailRegEx.test(email)) {
      toast.error("Please enter valid email");
    } else {
      emailjs
        .sendForm(
          "service_bqk7ncn",
          "template_64h2zij",
          e.target,
          "RA1551YNJv_HEIHgQ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      toast.success("Sent Successfully");
      setEmail("");
      setFullname("");
      setMessage("");
    }
  };
  return (
    <>
      {/* <!-- Footer Starts Here --> */}
      <footer id="footer_contact">
        <div class="container">
          <div class="row">
            <div class="col-md-4 footer-item">
              <h4>Ever Green</h4>
              <p>
                The services are provided at a flat rate, or according to a
                determined daily rate, based on your preference. In both cases,
                we guarantee you a quality service at a very competitive price.
              </p>
              {/* <ul class="social-icons">
                                <li><a rel="nofollow" href="https://fb.com/templatemo" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul> */}
            </div>

            <div class="col-md-4 footer-item last-item">
              <h4>Contact Us</h4>
              <form onSubmit={sendEmail}>
                <div class="contact-form">
                  <div id="contact footer-contact" action="" method="post">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Full Name"
                            required=""
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                          />
                        </fieldset>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            class="form-control"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="E-Mail Address"
                            required=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows="3"
                            class="form-control"
                            id="message"
                            placeholder="Your Message"
                            required=""
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            class="filled-button"
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
