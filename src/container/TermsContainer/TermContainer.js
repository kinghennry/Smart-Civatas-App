import React from "react";
import "./termsContainer.css";
import { Link } from "react-router-dom";

export default function TermContainer() {
  return (
    <section
      style={{
        background: "rgb(32, 32, 34)",
        color: "white",
        padding: "20px 0",
      }}
    >
      <div className="container">
        <div className="termsContainer__row flex align space-bt">
          <div className="copyright">
            <p>
              &copy; Copyright {new Date().getFullYear()},
              <Link to="/" style={{ color: "white" }}>
                Smartcivatas.
              </Link>{" "}
            </p>
          </div>
          <div className="terms__link">
            <ul className="flex align term__link">
              <li className="term__list">
                <Link>Terms & Conditions</Link>
              </li>
              <li className="term__list">
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
