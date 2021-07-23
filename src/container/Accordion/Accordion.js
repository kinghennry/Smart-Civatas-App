import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PropTypes from "react";

export default function Accordion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="accordion__item">
      <div className="question flex space-bt align">
        <span className="question__text answer__text">{title}</span>
        <button
          className="icon"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? (
            <AiOutlineMinus />
          ) : (
            <AiOutlinePlus style={{ color: "gray", fontWeight: "bolder" }} />
          )}
        </button>
      </div>
      <div className={`answer ${showInfo ? "answer--active" : ""}`}>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
}
Accordion.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};
