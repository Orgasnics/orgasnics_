import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Request_a_call_back = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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
    if (!email || !subject || !message || !name) {
      return toast.error('Please add all fields ');
    } else {
      toast.success('Saved Successfully');
    }
    setEmail('');
    setName('');
    setMessage('');
    setSubject('');
  };
  const showToast = () => {};

  return (
    <>
      <div class='callback-form'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <div class='section-heading'>
                <h2>
                  Request a <em>call back</em>
                </h2>
                <span>Etiam suscipit ante a odio consequat</span>
              </div>
            </div>
            <form onSubmit={sendEmail}>
              <div class='col-md-12'>
                <div class='contact-form'>
                  <div id='contact' action='' method='post'>
                    <div class='row'>
                      <div class='col-lg-4 col-md-12 col-sm-12'>
                        <fieldset>
                          <input
                            name='name'
                            type='text'
                            class='form-control'
                            id='name'
                            placeholder='Full Name'
                            required=''
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </fieldset>
                      </div>
                      <div class='col-lg-4 col-md-12 col-sm-12'>
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
                      <div class='col-lg-4 col-md-12 col-sm-12'>
                        <fieldset>
                          <input
                            name='subject'
                            type='text'
                            class='form-control'
                            id='subject'
                            placeholder='Subject'
                            required=''
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </fieldset>
                      </div>
                      <div class='col-lg-12'>
                        <fieldset>
                          <textarea
                            name='message'
                            rows='6'
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
                            class='border-button'
                            // onClick={() => {
                            //   Submit();
                            //   showToast();
                            //   setEmail('');
                            //   setName('');
                            //   setMessage('');
                            //   setSubject('');
                            // }}
                          >
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request_a_call_back;
