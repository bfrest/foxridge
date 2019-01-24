import React from "react";
import styled from "styled-components";

const ServiceWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    text-align: left;
  }

  h2 {
    font-size: 3em;
    margin-top: 100px;
  }
`;

const ServiceList = styled.ul`
  width: 90vw;
`;

const ServiceItem = styled.li`
  list-style: none;
  display: flex;
  height: 25%;
  font-size: 1.5em;
  line-height: 2em;

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
      margin-left: 10%;
    }
    img {
      margin-left: 5%;
    }
  }

  @media (max-width: 450px) {
  }
`;

const Services = () => {
  return (
    <ServiceWrapper>
      <h2>What We Do</h2>
      <ServiceList>
        <ServiceItem>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/satellite.svg" alt="service logo" />
          <div>
            <h3>GPS Grading</h3>
            <br />
            <p>
              We use GPS to grade out the project to get all of the lots and the road exactly where they need to be. This cuts our time significantly and speeds up the rest of the
              tasks.
            </p>
          </div>
        </ServiceItem>

        <ServiceItem>
          <div>
            <h3>Excavating</h3>
            <br />
            <p>
              We have 32 years of experience digging, from foundations to dry utilities even swimming pools. With our excavator we can dig within a quarter of an inch, saving you
              time and money on cement.
            </p>
          </div>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/trackHoe.svg" alt="service logo" />
        </ServiceItem>

        <ServiceItem>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/analytics.svg" alt="service logo" />
          <div>
            <h3>Analytics</h3>
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
            <h3>Time Management</h3>
            <br />
            <p>
              The software we use to track our time uses each employees location as soon as they clock in on the job, there are no questions for what we are doing and how long each
              task takes. With this software we become more aware of how much time each item takes and we become more efficient on each job we do.
            </p>
          </div>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/hourglass.svg" alt="service logo" />
        </ServiceItem>

        <ServiceItem>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/dozer.svg" alt="service logo" />
          <div>
            <h3>Pads</h3>
            <br />
            <p>With our gps system, we can create 3d surfaces to put in the machines that will match the design you want.</p>
          </div>
        </ServiceItem>

        <ServiceItem>
          <div>
            <h3>Land Development</h3>
            <br />
            <p>Our crew is made up of experts in all of the requirements to get your subdivision ready to build. We have the experience to get the job done right and on time.</p>
          </div>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/road.svg" alt="service logo" />
        </ServiceItem>
      </ServiceList>
    </ServiceWrapper>
  );
};

export default Services;
