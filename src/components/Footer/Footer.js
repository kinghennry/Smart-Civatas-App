import React from "react";
import logo from "../../images/SmartCivitas_Logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__details flex">
          <div className="footer__headerLeft flex align justify-ct">
            <div className="footer__logo">
              <img src={logo} alt="smartcivatas" />
            </div>
            <div className="footer__socials flex align">
              <div className="footer__socialLink flex align justify-ct ">
                <FaFacebook className="footer__icon" />
              </div>
              <div className="footer__socialLink flex align justify-ct">
                <FaTwitter className="footer__icon" />
              </div>
              <div className="footer__socialLink flex align justify-ct">
                <FaInstagram className="footer__icon" />
              </div>
              <div className="footer__socialLink flex align justify-ct">
                <FaTelegram className="footer__icon" />
              </div>
            </div>
          </div>
          <div className="footer__headerRight flex space-ev ">
            {/* flex  */}
            <div className="footer__links">
              <p>Useful Links</p>
              <ul>
                <li className="footer__item">
                  <a href="">About</a>
                </li>
                <li className="footer__item">
                  <a href="">Partners</a>
                </li>
                <li className="footer__item">
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer__links">
              <p>Help?</p>
              <ul>
                <li className="footer__item">
                  <a href="">FAQ</a>
                </li>
                <li className="footer__item">
                  <a href="">Terms & Conditions</a>
                </li>
                <li className="footer__item">
                  <a href="">Policy</a>
                </li>
                <li className="footer__item">
                  <a href="">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="footer__links">
              <p>Address</p>
              <ul>
                <li className="footer__item">
                  <a href="">113 - 115 Old Brompton Road</a>
                </li>
                <li className="footer__item">
                  <a href="">SW 73 LE LONDON,UNITED KINGDOM</a>
                </li>
                <li className="footer__item">
                  <a href="">website: www.smartcivatas.com</a>
                </li>
                <li className="footer__item">
                  <a href="">mobile: 98765 &nbsp;43210</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
