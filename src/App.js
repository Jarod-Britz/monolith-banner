import React, { useState } from "react";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    focusOnSelect: true,
    rows: 2,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          centerMode: true
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderTwo = {
    asNavFor: nav1,
    slidesToShow: 5,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    nextArrow: <i class="fa fa-angle-right" aria-hidden="true"></i>,
    prevArrow: <i class="fa fa-angle-left" aria-hidden="true"></i>,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="App">
      <div className="background">
        <div className="info">
          <h1>The Monolith Story</h1>
          <div>
            <Slider
              {...settings}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
            >
              <div className="container">
                <img
                  src={"/rocket.svg"}
                  alt="Rocket Logo"
                  className="whiteSvg"
                />
                <p>2016</p>
                <p>Started with Richard Ahlfeld in September 2016</p>
              </div>
              <ul class="line">
                <li class="dot"></li>
              </ul>

              <div className="container">
                <img
                  src={"/LorealAirbusMclaren.webp"}
                  alt="Loreal Airbus Mclaren Logo"
                />
                <p>2018</p>
                <p>
                  First paying projects with clients in March 2018 ( L’Oreal,
                  McLaren, Airbus)
                </p>
              </div>
              <ul class="line">
                <li class="dot"></li>
              </ul>

              <div className="container">
                <img src={"/flag.svg"} alt="Flag Logo" className="whiteSvg" />
                <p>2018</p>
                <p>Pre-seed round in August 2018</p>
              </div>
              <ul class="line">
                <li class="dot"></li>
              </ul>

              <div className="container">
                <img src={"/flag.svg"} alt="Flag Logo" className="whiteSvg" />
                <p>2019</p>
                <p>Seed round of £1.9M in April 2019</p>
              </div>
              <ul class="line">
                <li class="dot"></li>
              </ul>

              <div className="container">
                <img
                  src={"/people.svg"}
                  alt="People Logo"
                  className="whiteSvg"
                />
                <p>2020</p>
                <p>Reached 20 employees in January 2020</p>
              </div>
              <ul class="line">
                <li class="dot"></li>
              </ul>

              <div className="container">
                <img
                  src={"/Gartner-Cool-Vendor-white.webp"}
                  alt="Gartner Cool Vendor Logo"
                />
                <p>2020</p>
                <p>Named a “Gartner Cool Vendor” in May 2020</p>
              </div>
              <ul class="line">
                <li class="dot"></li>
              </ul>

              <div className="container">
                <img src={"/flag.svg"} alt="Flag Logo" className="whiteSvg" />
                <p>2021</p>
                <p>Series A funding of £8.5M in July 2021</p>
              </div>
              <ul class="line">
                <li class="dot"></li>
              </ul>

              <div className="container">
                <img
                  src={"/building.svg"}
                  alt="Building Logo"
                  className="whiteSvg"
                />
                <p>2022</p>
                <p>London office opened in March 2022</p>
              </div>
              <ul class="line">
                <li class="dot"></li>
              </ul>
            </Slider>
          </div>

          <div>
            <Slider ref={(slider2) => setNav2(slider2)} {...sliderTwo}>
              <div className="container">
                <h3>2016</h3>
              </div>
              <div className="container">
                <h3>2018</h3>
              </div>
              <div className="container">
                <h3>2018</h3>
              </div>
              <div className="container">
                <h3>2019</h3>
              </div>
              <div className="container">
                <h3>2020</h3>
              </div>
              <div className="container">
                <h3>2020</h3>
              </div>
              <div className="container">
                <h3>2021</h3>
              </div>
              <div className="container">
                <h3>2022</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
