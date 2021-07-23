import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./video.css";
import img from "../../images/Image-1.png";
import img2 from "../../images/Image-2.png";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="video">
      <div className="container">
        <div className="video__row flex align">
          <div className="video__rowText">
            <h1>
              How to use
              <br />
              Smart Civatas
            </h1>
            <Link>Get Started</Link>
          </div>
          <div className="video__rowMedia">
            <div className="video__img">
              <img src={img} alt="video media" />
            </div>
            <div className="video__popup">
              <img src={img2} alt="video popup" />
              <button className="video__btn" onClick={() => setOpen(true)}>
                <PlayCircleFilledIcon className="video__icon" />
              </button>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="xgZd_vFNkUs"
                onClose={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Video;

//     transition: all 1.5s cubic-bezier(0,0,.2,1); that slick hover effect on images
// osition: relative;
// z-index: 9;
// display: block;
// overflow: hidden;
// width: 100%;
// margin: auto;
// border-radius: 5px;

//     position: absolute;
// z-index: 9;
// top: 50%;
// left: 50%;
// width: 90px;
// height: 90px;
// line-height: 90px;
// background-color: hsla(0,0%,100%,.8);
// border: 0;
// -webkit-transform: translate(-50%,-50%);
// transform: translate(-50%,-50%);
// text-align: center;
// border-radius: 50%;
