import React from "react";
import myImage from "/src/assets/avataaars.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div className="home p-5">
      <div className="container">
        <div className="rowColomn d-flex flex-column align-items-center gap-3 p-4">
          <div className="image">
            <img src={myImage} alt="" />
          </div>
          <div className="data d-flex flex-column align-items-center gap-2">
            <h2>START BOOTSTRAP</h2>
            <span>
              <FontAwesomeIcon icon={faStar} size="2x" color="white" />
            </span>
            <span>Graphic Artist - Web Designer - Illustrator</span>
          </div>
        </div>
      </div>
    </div>
  );
}
