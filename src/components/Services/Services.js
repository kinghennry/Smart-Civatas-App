import React from "react";
import CenterInfo from "../Center/CenterInfo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../container/Card/Card";
import services from "../../data/service/services";
import "./services.css";
const Services = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <section className="services">
      <div className="container">
        <CenterInfo
          text="Our Services"
          contentTwo="Below are the best services based on the usage of the apartments"
        />
        <div className="testemonial">
          <div className="slider">
            <Slider {...settings}>
              {services &&
                services.map((single, key) => {
                  return <Card data={single} key={key} />;
                })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
