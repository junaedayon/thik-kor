import React, { Component } from "react";
import Slider from "react-slick";
import "./Support.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import { Facebook, MapFill, Twitch, Twitter } from "react-bootstrap-icons";

function Support() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 1,

          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Container>
        <h2>responsive</h2>
        <Slider {...settings}>
          <div className="single-box">
            <div className="contents">
              <div className="icons">
                <Facebook></Facebook>
              </div>

              <h3>Global Access</h3>

              <div className="text-center paras">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              </div>

              <a className="link" href>
                Learn more
              </a>
            </div>
          </div>

          <div className="single-box">
            <div className="contents">
              <div className="icons">
                <Twitch />
              </div>

              <h3>Global Access</h3>

              <div className="text-center paras">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              </div>

              <a className="link" href>
                Learn more
              </a>
            </div>
          </div>

          <div className="single-box">
            <div className="contents">
              <div className="icons">
                <Twitter />
              </div>

              <h3>Global Access</h3>

              <div className="text-center paras">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              </div>

              <a className="link" href>
                Learn more
              </a>
            </div>
          </div>

          <div className="single-box">
            <div className="contents">
              <div className="icons">
                <MapFill />{" "}
              </div>

              <h3>Global Access</h3>

              <div className="text-center paras">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              </div>

              <a className="link" href>
                Learn more
              </a>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default Support;
