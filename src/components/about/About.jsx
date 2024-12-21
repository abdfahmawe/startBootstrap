import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="About p-5">
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <div className="header d-flex flex-column p-3 align-items-center">
          <h2>Portfolio</h2>
          <span>
            <FontAwesomeIcon icon={faStar} size="2x" color="white" />
          </span>
        </div>
        <div className="data d-flex gap-3 p-2 justify-content-center">
          <div className="paragraphOne">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
            saepe exercitationem dignissimos natus eos accusantium asperiores
            blanditiis magnam odit id ipsa nisi, nostrum harum voluptatibus,
            perspiciatis placeat eveniet distinctio soluta.
          </div>
          <div className="paragraphTwo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            placeat quasi unde modi, sit error deserunt expedita id iure
            corrupti quo, sint, consequatur incidunt molestiae.
          </div>
        </div>
        <div className="button d-flex justify-content-center">
          <button type="button" class="btn btn-dark">
            <FontAwesomeIcon icon={faDownload} size="1x" color="white" />
            Free Download!
          </button>
        </div>
      </div>
    </div>
  );
}
