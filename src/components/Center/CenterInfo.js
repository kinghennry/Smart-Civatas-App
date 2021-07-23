import React from "react";
import PropTypes from "react";

const CenterInfo = ({ text, content, contentTwo }) => {
  return (
    <div>
      <center>
        <h1
          style={{
            color: "rgb(18, 146, 238)",
            fontSize: "37px",
            fontWeight: "350",
          }}
        >
          {text}
        </h1>
        <h4
          style={{
            color: "#043976",
            fontSize: "28px",
            fontWeight: "350",
            marginTop: "10px",
          }}
        >
          {content}
        </h4>
        <p
          style={{
            color: "gray",
            fontWeight: "400",
            margin: "20px 0",
          }}
        >
          {contentTwo}
        </p>
      </center>
    </div>
  );
};

CenterInfo.propTypes = {
  text: PropTypes.string,
  content: PropTypes.string,
  contentTwo: PropTypes.string,
};
export default CenterInfo;
