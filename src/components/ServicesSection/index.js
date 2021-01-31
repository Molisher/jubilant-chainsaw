import React from "react";

import { useScroll } from "../../hooks/useScroll";

import {
  Services,
  ServicesDescription,
  ServicesImage,
  Cards,
  Card,
} from "./styles/ServiceSection";

import { fade } from "./styles/animation";

import camera from "../../img/home2.png";
import clock from "../../img/clock.svg";
import teamwork from "../../img/teamwork.svg";
import money from "../../img/money.svg";
import diaphragm from "../../img/diaphragm.svg";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services ref={element} animate={controls} initial="hidden" variants={fade}>
      <ServicesDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="Clock icon" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="Teamwork icon" src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="Diaphragm icon" src={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="Money icon" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </ServicesDescription>
      <ServicesImage>
        <img alt="camera" src={camera} />
      </ServicesImage>
    </Services>
  );
};

export default ServicesSection;
