import React from "react";
import styled from "styled-components";

const ServiceWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;

  p {
    text-align: left;
  }

  h2 {
    font-size: 3em;
    margin-top: 100px;
    margin-bottom: 20%;
  }

  @media (max-width: 1000px) {
    width: 100;
    h2 {
      font-size: 2em;
      margin-top: 50px;
    }
  }
`;

const ServiceItem = styled.div`
  display: flex;
  font-size: 1.5em;
  line-height: 2.5em;
  margin-bottom: 20%;

  img {
    width: 15%;
    align-self: center;
    padding: 80px;
    margin-left: 5%;
  }

  div {
    width: 40%;
    align-self: center;
    font-weight: 500;
    margin-left: 10%;
  }

  /* This is to align the images on the right */
  :nth-child(even) {
    div {
      margin-left: 17%;
    }
    img {
      margin-left: 5%;
    }
  }

  @media (max-width: 1000px) {
    font-size: 1.2em;
    flex-direction: column;

    div {
      width: 90vw;
      margin: 0;
      h3 {
        margin-top: -80%;
        margin-bottom: 50%;
      }
    }

    img {
      width: 50%;
      margin: 0;
    }

    /*
     This will get the icons that were on the right, to the top top the div for mobile.
     and it also makes everthing centered
    */
    :nth-child(even) {
      flex-direction: column-reverse;
      div {
        margin-left: 0%;
      }
      img {
        margin-left: 0%;
      }
    }
  }
`;

const Services = () => {
  return (
    <ServiceWrapper>
      <h2>What We Do</h2>

      <ServiceItem>
        <div>
          <h3>Land Development</h3>
          <br />
          <p>
            Our specialty is land residential land devlopment. We will put in the dry utilities and prep the road, curb, and sidewalk. We use GPS on our machines for precision so
            everything will turn out exactly like the plan shows. There is no need to have an engineer stake out any roads or curb EVER.
          </p>
        </div>
        <img src="https://res.cloudinary.com/bfrest/image/upload/v1548422544/blueprint.svg" alt="service logo" />
      </ServiceItem>

      <ServiceItem>
        <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/satellite.svg" alt="service logo" />
        <div>
          <h3>GPS Grading</h3>
          <br />
          <p>We have very precise gps that allows us to grade within a quarter inch tolerance. If your project is simple we can create a model for the our equipment onsite.</p>
        </div>
      </ServiceItem>

      <ServiceItem>
        <div>
          <h3>Excavating</h3>
          <br />
          <p>
            We have been excavating for over 32 years in Cache Valley. This has allowed countless people get into their dream home. We also offer consulting to go over your project
            to find out the most efficient way to get it going.
          </p>
        </div>
        <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/trackHoe.svg" alt="service" />
      </ServiceItem>

      <ServiceItem>
        <img src="https://res.cloudinary.com/bfrest/image/upload/v1548421605/3d-design.svg" alt="3d model" />
        <div>
          <h3>3D Modeling</h3>
          <br />
          <p>
            We can set a budget, and track that budget daily to figure out what took the most time and improve to keep the project inside the budget. We also use drones to figure
            out how the existing land looks to see the amount of material that needs to move or be brought in. Then we can get our 3D model made up for the machines and even give
            you a visual of what it will look like!
          </p>
        </div>
      </ServiceItem>

      <ServiceItem>
        <div>
          <h3>Digital Layouts</h3>
          <br />
          <p>
            The software we use to track our time uses each employees location as soon as they clock in on the job, there are no questions for what we are doing and how long each
            task takes. With this software we become more aware of how much time each item takes and we become more efficient on each job we do.
          </p>
        </div>
        <img src="https://res.cloudinary.com/bfrest/image/upload/v1548422293/house_layout.svg" alt="service logo" />
      </ServiceItem>

      <ServiceItem>
        <img src="https://res.cloudinary.com/bfrest/image/upload/v1548421810/drone.svg" alt="service logo" />
        <div>
          <h3>Drones</h3>
          <br />
          <p>With our gps system, we can create 3d surfaces to put in the machines that will match the design you want.</p>
        </div>
      </ServiceItem>
    </ServiceWrapper>
  );
};

export default Services;
