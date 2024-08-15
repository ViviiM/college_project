import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import React from "react";
import trustsafety from "./trust&safety";
import { Link } from "react-router-dom";
import passpg1 from "./passpg1.svg";
import passpg2 from "./passpg2.png";
import passpg3 from "./passpg3.png";
import passpg4 from "./passpg4.png";
import passpg5 from "./passpg5.png";
import safety from "./safety.jpg";

const passengerpage = () => {
  return (
    <div className="drivermain">
      <Header />
      <br />
      <img src={passpg1} />
      <h1>For passengers</h1>
      <h2>
        Get a ride with someone in their car, it’s <b>affordable</b> and{" "}
        <b>convenient</b>
      </h2>
      <img src={passpg2} className="driverpg4" />
      <br></br>
      <img src={passpg3} className="driverpg4" />
      <br></br>
      <div className="safetypriority">
        <table>
          <tr>
            <td>
              <h3>Safety is our #1 priority</h3>
              <img src={safety}></img>
              <br />
            </td>
            <td>
              <tr>
                <td>
                  <h4 className="safetytext2">
                    We’ve built trust & safety right into the <br /> platform.
                    <br />
                  </h4>
                  <br />

                  <h6 className="reviews">
                    {" "}
                    o Driver reviews from other passengers
                    <br />
                    <br />
                    o Verified driver's license using biometric data
                    <br />
                    <br />
                    o Customer service 7 days a week
                    <br />
                    <br />
                    <br />
                    <a href="/trust&safety.js">Read more </a> on how we keep our
                    community safe
                  </h6>
                </td>
              </tr>
              <tr></tr>
            </td>
          </tr>
        </table>
      </div>
      <img src={passpg4} className="driverpg4" />
      <br />
      <table>
        <tr>
          <td>
            <img src={passpg5} className="passpg5" />
          </td>
          <td>
            <h3 className="reviews2">
              Learn how we're reducing our carbon footprint.
              <br />
              <br /> <a href="">Read More</a>
            </h3>
          </td>
        </tr>
      </table>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default passengerpage;
