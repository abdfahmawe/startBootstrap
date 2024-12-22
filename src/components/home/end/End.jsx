import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function End() {
  return (
    <div className="end">
      <div className=" container p-5">
        <div className="row d-flex justify-content-center gap-5">
          <div className="location d-flex flex-column align-items-center">
            <h4>LOCATION</h4>
            <div className="data d-flex flex-column justify-content-center align-items-center">
              <span>2215 John Daniel Drive</span>
              <span>Clark, MO 65243</span>
            </div>
          </div>
          <div className="website d-flex flex-column align-items-center">
            <h4>AROUND THE WEB</h4>
            <div className="d-flex justify-content-center gap-2">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
              </a>
            </div>
          </div>
          <div className="freelancer d-flex flex-column ">
            <h4>About Freelancer</h4>
            <p>
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by Start Bootstrap .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
