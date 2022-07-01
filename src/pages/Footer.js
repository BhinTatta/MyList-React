import React from "react";
import "./Footer.css";
export default function () {
  return (
    <>
      <footer className="site-footer">
        <div className="container1">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <ul className="footer-links">
                <li>
                  <a href="http:/">About Us</a>
                </li>
                <li>
                  <a href="https://t.me/KartikKalia01">Contact Us</a>
                </li>
                <li>
                  <a href="https://github.com">Contribute</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; HeheHaha
                <a href="https://t.me/KartikKalia01"> Kartik Kalia</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
