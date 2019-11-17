import React, { PureComponent } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

class Gallery extends PureComponent {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };

    return (
      <>
        <Slider {...settings}>
          <div className="background1">
            <div className="slider-text-container">
              <p className="slider-duration">3 Days 2 Nights</p>
              <h3 className="slider-title">Beach Adventures</h3>
              <h3 className="slider-title">In Lombok</h3>
              <p className="slider-price">IDR 1.500.000/per pax</p>
            </div>
          </div>
          <div className="background2">
            <div className="slider-text-container">
              <p className="slider-duration">3 Days 2 Nights</p>
              <h3 className="slider-title">Beach Adventures</h3>
              <h3 className="slider-title">In Lombok</h3>
              <p className="slider-price">IDR 1.500.000/per pax</p>
            </div>
          </div>
          <div className="background3">
            <div className="slider-text-container">
              <p className="slider-duration">3 Days 2 Nights</p>
              <h3 className="slider-title">Beach Adventures</h3>
              <h3 className="slider-title">In Lombok</h3>
              <p className="slider-price">IDR 1.500.000/per pax</p>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}

export default Gallery