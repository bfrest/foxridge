import React from "react";
import styled from "styled-components";

const ServiceWrapper = styled.div`
  width: 100vw;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    text-align: left;
  }

  h2 {
    font-size: 3em;
  }
`;

const ServiceItem = styled.li`
  width: 70%;
  margin: 20px;
  padding: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  font-size: 1.4em;

  img {
    width: 30%;
    align-self: center;
  }

  @media (max-width: 450px) {
    font-size: 1.4em;
    width: 90%;

    p {
      margin-top: -35px;
    }
  }
`;

const ServiceList = styled.ul`
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-content: center;
  justify-items: center;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const Services = () => {
  return (
    <ServiceWrapper>
      <h2>What We Do</h2>
      <ServiceList>
        <ServiceItem>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/satellite.svg" alt="service logo" />
          <h3>GPS Grading</h3>
          <br />
          <p>
            We use GPS to grade out the project to get all of the lots and the road exactly where they need to be. This cuts our time significantly and speeds up the rest of the
            tasks.
          </p>
        </ServiceItem>

        <ServiceItem>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/trackHoe.svg" alt="service logo" />
          <h3>Excavating</h3>
          <br />
          <p>
            We have 32 years of experience digging, from foundations to dry utilities even swimming pools. With our excavator we can dig within a quarter of an inch, saving you
            time and money on cement.
          </p>
        </ServiceItem>

        <ServiceItem>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/analytics.svg" alt="service logo" />
          <h3>Analytics</h3>
          <br />
          <p>
            We can set a budget, and track that budget daily to figure out what took the most time and improve to keep the project inside the budget. We also use drones to figure
            out how the existing land looks to see the amount of material that needs to move or be brought in. Then we can get our 3D model made up for the machines and even give
            you a visual of what it will look like!
          </p>
        </ServiceItem>

        <ServiceItem>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/hourglass.svg" alt="service logo" />
          <h3>Time Management</h3>
          <br />
          <p>
            The software we use to track our time uses each employees location as soon as they clock in on the job, there are no questions for what we are doing and how long each
            task takes. With this software we become more aware of how much time each item takes and we become more efficient on each job we do.
          </p>
        </ServiceItem>

        <ServiceItem>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/dozer.svg" alt="service logo" />
          <h3>Pads</h3>
          <br />
          <p>With our dozer, we can create all kinds of pads with precision accuracy. We can creat a perfectly flat pad or if you need slope in any direction we can do it all.</p>
        </ServiceItem>

        <ServiceItem>
          <img src="http://res.cloudinary.com/bfrest/image/upload/v1525542143/road.svg" alt="service logo" />
          <h3>Land Development</h3>
          <br />
          <p>Our crew is made up of experts in all of the requirements to get your subdivision ready to build. We have the experience to get the job done right and on time.</p>
        </ServiceItem>
      </ServiceList>
    </ServiceWrapper>
  );
};

export default Services;
