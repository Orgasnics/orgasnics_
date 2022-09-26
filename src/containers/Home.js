// Init
import React from 'react';
import SimpleSlider from '../components/SimpleSlider';

// Importing Components

import Navbar from '../components/Navbar';
import Per_Bar from '../components/Per_Bar';
import Request_call_back_section from '../components/Request_call_back_section';
import Financial_Services from '../components/Financial_Services';
import Our_Solution_section from '../components/Our_Solution_section';
import Who_We_Are from '../components/Who_We_Are';
import What_they_say_about_us from '../components/What_they_say_about_us';
import Request_a_call_back from '../components/Request_a_call_back';
import Partner_Section from '../components/Partner_Section';
import Footer from '../components/Footer';
import Sub_footer from '../components/Sub_footer';

// Home Component
export default function Home() {
  return (
    <div>
      <Per_Bar />
      <Navbar />
      <SimpleSlider />
      <Request_call_back_section />
      <Financial_Services />
      <Our_Solution_section />
      <Who_We_Are />
      <What_they_say_about_us />
      <Request_a_call_back />
      <Partner_Section />
      <Footer />
      <Sub_footer />
    </div>
  );
}
