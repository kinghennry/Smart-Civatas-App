import React from "react";
import { Link } from "react-router-dom";
import CenterInfo from "../../components/Center/CenterInfo";
import apartments from "../../data/apartments/apartments";
import Gridbox from "../Gridbox/Gridbox";
import "./apartment.css";
const Apartment = () => {
  return (
    <section className="home__apartment">
      <div className="container">
        <CenterInfo
          text="Apartments with us from your City"
          content="Hyderabad"
          contentTwo="Top 4 Apartments in your City"
        />
        <div className="gridbox">
          {apartments.map((apartment) => {
            return <Gridbox key={apartment.id} {...apartment} />;
          })}
        </div>
        <center
          style={{
            marginTop: "60px",
          }}
        >
          <Link
            style={{
              background: "rgb(41, 78, 241)",
              color: "#fff",
              padding: "15px 50px",
              borderRadius: "10px",
            }}
          >
            Register Your Apartment
          </Link>
        </center>
      </div>
    </section>
  );
};

export default Apartment;
