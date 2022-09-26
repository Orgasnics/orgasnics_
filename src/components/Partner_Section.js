import React, { Component } from "react";
import Slider from "react-slick";

import client01 from "../assets/client-01.png"
export default class VariableWidth extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            autoplay: true,
            arrow: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,



                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,



                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,


                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,

                    }
                }
            ]


        };
        return (
            <div>
                <div class="testimonials">
                    <div class="container">
                        <div class="row"></div>
                        <div class="col-md-12">
                            <div class="section-heading">
                                <h2>What they say <em>about us</em></h2>
                                <span>testimonials from our greatest clients</span>
                            </div>
                        </div>
                        <Slider {...settings}>
                            <div class="partner-item">
                                <img src={client01} title="1" alt="1" />
                            </div>

                            <div class="partner-item">
                                <img src={client01} title="2" alt="2" />
                            </div>

                            <div class="partner-item">
                                <img src={client01} title="3" alt="3" />
                            </div>

                            <div class="partner-item">
                                <img src={client01} title="4" alt="4" />
                            </div>

                            <div class="partner-item">
                                <img src={client01} title="5" alt="5" />
                            </div>



                        </Slider>
                    </div>
                </div>
            </div>

        );
    }
}

