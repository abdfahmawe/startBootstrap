import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Imageone from "/src/assets/portfolio/cabin.png";
import Imagetwo from "/src/assets/portfolio/cake.png";
import Imagethree from "/src/assets/portfolio/circus.png";
import Imagefour from "/src/assets/portfolio/game.png";
import Imagefive from "/src/assets/portfolio/safe.png";
import Imagesex from "/src/assets/portfolio/submarine.png";
export default function Portfolio() {
  return (
    <div className="Portfolio p-5">
      <div className="container">
        <div className="row">
          <div className="data d-flex flex-column p-3 align-items-center">
            <h2>Portfolio</h2>
            <span>
              <FontAwesomeIcon icon={faStar} size="2x" color="black" />
            </span>
          </div>
          <div className="images d-flex gap-4 flex-wrap justify-content-center">
            <div className="">
              <img src={Imageone} alt="" />
            </div>
            <div className="">
              <img src={Imagetwo} alt="" />
            </div>
            <div className="">
              <img src={Imagethree} alt="" />
            </div>
            <div className="">
              <img src={Imagefour} alt="" />
            </div>
            <div className="">
              <img src={Imagefive} alt="" />
            </div>
            <div className="">
              <img src={Imagesex} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
