import { Avatar } from "@material-ui/core";
import "./card.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import bedRoom from "../../images/bed.png";
import bathRoom from "../../images/bathtub.png";
const Card = ({ data }) => {
  return (
    <div className="card flex">
      <div className="card__img">
        <img src={data.image} alt="image" />
        <h4 className="distance">{data.distance}</h4>
        <h4 className="status">{data.status}</h4>
        <Avatar className="avatar" src={data.avatar} />
      </div>
      <div className="card__details">
        <div className="card__text flex align">
          <LocationOnIcon style={{ color: "lightcoral" }} />
          <span>{data.name}</span>
          {/* style={{ color: "gray", fontWeight: "400" }} */}
        </div>
        <div className="card__name">
          <h2>{data.name}</h2>
          <p>{data.desc}</p>
        </div>
        <div className="card__desc flex align">
          <div
            className="card__descItem flex"
            style={{
              background: "rgb(248, 250, 255)",
              padding: "20px 20px",
              borderRadius: "10px",
            }}
          >
            <div className="card__iconContent">
              <div className="card__icons flex align">
                <span style={{ color: "rgb(18, 146, 238)", fontWeight: "500" }}>
                  {data.bedRoomValue}
                </span>
                &nbsp;
                <div className="card__iconImg">
                  <img src={bedRoom} alt="bedroom" />
                </div>
              </div>
              <div className="card__itemText">
                <p>Bedrooms</p>
              </div>
            </div>
            <div className="card__iconContent">
              <div className="card__icons flex align">
                <span style={{ color: "rgb(18, 146, 238", fontWeight: "500" }}>
                  {data.bedRoomValue}
                </span>
                &nbsp;
                <div className="card__iconImg">
                  <img src={bathRoom} alt="bedroom" />
                </div>
              </div>
              <div className="card__itemText">
                <p>Bathrooms</p>
              </div>
            </div>
            <div className="card__iconContent">
              <div className="card__icons flex align">
                <span style={{ color: "rgb(18, 146, 238", fontWeight: "500" }}>
                  {data.bedRoomValue}
                </span>
                &nbsp;
                <div className="card__iconImg">
                  <img src={bedRoom} alt="bedroom" />
                </div>
              </div>
              <div className="card__itemText">
                <p>Square Feet</p>
              </div>
            </div>
          </div>
          <ul className="card__list flex">
            <li className="card__item flex align justify-ct">
              <FullscreenExitIcon />
            </li>
            <li
              className="card__item card__item flex align justify-ct"
              style={{ background: "coral" }}
            >
              <FavoriteBorderIcon style={{ color: "white" }} />
            </li>
            <li className="card__item flex align justify-ct">
              <AddCircleOutlineIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
