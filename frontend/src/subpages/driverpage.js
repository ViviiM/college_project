import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import React from "react";
import driverpg from "./driverpg.png";
import driverpg2 from "./driverpg2.png";
import driverpg3 from "./driverpg3.png";
import driverpg4 from "./driverpg4.png";
import driverpg5 from "./driverpg5.png";
import passpg5 from "./passpg5.png";
import safety from "./safety.jpg";
const driverpage = () => {
  return (
    <div>
      <Header />
      <div className="drivermain">
        <br />
        <img src={driverpg} />
        <h1>For drivers</h1>
        <h2>
          Cover your driving costs when you’re driving <b>from A to B.</b>
        </h2>
        <img src={driverpg2} className="driverpg4" />
        <img src={driverpg3} className="driverpg4" />
        <br></br>
        <img src={driverpg4} className="driverpg4" />.
        <div>
          <table>
            <tr>
              <td>
                <img src={driverpg5} className="driverpg5" />
              </td>
              <td>
                <h3 className="textdriver">
                  Poparide operates under provincial carpooling
                  <br /> regulations in Canada.
                </h3>
                <br />
                <h5 className="textdriver2">
                  {" "}
                  o Cover your gas, insurance and maintenance costs <br />
                  <br />
                  o Carpool with your regular car insurance <br />
                  <br />
                  <br />
                  <a href="">More info</a>
                </h5>
              </td>
            </tr>
          </table>

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
                        We’ve built trust & safety right into the <br />{" "}
                        platform.
                        <br />
                      </h4>
                      <br />

                      <h6 className="reviews">
                        {" "}
                        o You decide who gets into your vehicle
                        <br />
                        <br />
                        o See a passenger’s profile and reviews before approving
                        them
                        <br />
                        <br />
                        o We monitor activity very closely
                        <br />
                        <br />
                        <br />
                        <a href="/trust&safety.js">Read more </a> on how we keep
                        you safe
                      </h6>
                    </td>
                  </tr>
                  <tr></tr>
                </td>
              </tr>
            </table>
          </div>
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
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default driverpage;
