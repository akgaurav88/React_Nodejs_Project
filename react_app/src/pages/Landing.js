import React from "react";
import logo from "../assets/images/in_the_office.svg";
import main from "../assets/images/traveling.svg";
const Landing = () => {
  return (
    <div>
      <nav>
        <img
          src={logo}
          alt="img"
          className="logo"
          height="60px"
          width="60px"
        ></img>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            <span>Traveling </span>app
          </h1>
          <p>
            I'm baby truffaut helvetica cloud bread vibecession YOLO. Sartorial
            palo santo squid, pitchfork tofu fashion axe scenester kitsch pok
            pok whatever street art unicorn 8-bit leggings. Roof party 90's four
            dollar toast post-ironic. Post-ironic food truck air plant
            humblebrag, cloud bread gluten-free jean shorts hexagon fanny pack
            activated charcoal lo-fi.
          </p>
          <button type="button" className="btn btn-hero">Login/Register</button>
        </div>
        <img
          src={main}
          alt="img"
          className="img main-img"
          
        ></img>
      </div>
    </div>
  );
};

export default Landing;
