import React, { Component } from "react";
import "./Services.css";

class Services extends Component {
  constructor() {
    super();

    this.state = {
      services: [
        {
          name: "GPS Grading",
          desc:
            "We use GPS to grade out the project to get all of the lots and the road exactly where they need to be. This cuts our time significantly and speeds up the rest of the tasks.",
          img: "http://res.cloudinary.com/bfrest/image/upload/v1525542143/satellite.svg"
        },
        {
          name: "Excavating",
          desc:
            "We have 32 years of experience digging, from foundations to dry utilities even swimming pools. With our excavator we can dig within a quarter of an inch, saving you time and money on cement.",
          img: "http://res.cloudinary.com/bfrest/image/upload/v1525542143/trackHoe.svg"
        },
        {
          name: "Analytics",
          desc:
            "We can set a budget, and track that budget daily to figure out what took the most time and improve to keep the project inside the budget. We also use drones to figure out how the existing land looks to see the amount of material that needs to move or be brought in. Then we can get our 3D model made up for the machines and even give you a visual of what it will look like!",
          img: "http://res.cloudinary.com/bfrest/image/upload/v1525542143/analytics.svg"
        },
        {
          name: "Time Management",
          desc:
            "The software we use to track our time uses each employees location as soon as they clock in on the job, there are no questions for what we are doing and how long each task takes. With this software we become more aware of how much time each item takes and we become more efficient on each job we do.",
          img: "http://res.cloudinary.com/bfrest/image/upload/v1525542143/hourglass.svg"
        },
        {
          name: "Pads",
          desc:
            "With our dozer, we can create all kinds of pads with precision accuracy. We can creat a perfectly flat pad or if you need slope in any direction we can do it all.",
          img: "http://res.cloudinary.com/bfrest/image/upload/v1525542143/dozer.svg"
        },
        {
          name: "Land Development",
          desc: "Our crew is made up of experts in all of the requirements to get your subdivision ready to build. We have the experience to get the job done right and on time.",
          img: "http://res.cloudinary.com/bfrest/image/upload/v1525542143/road.svg"
        }
      ]
    };
  }
  render() {
    // makes it so you don't need to type this.state.services everytime you call it
    const { services } = this.state;

    // renders out all the services from state in one block of code
    let serviceList = services.map(service => {
      return (
        <li className="service-item">
          <img src={service.img} className="service-icon" alt="an icon for the service" />
          <h2>{service.name}</h2>
          <br />
          <p>{service.desc}</p>
        </li>
      );
    });

    return (
      <div className="service-component-wrapper">
        <h2 className="service-header">What We Do</h2>
        <div className="service-wrapper">{serviceList}</div>
      </div>
    );
  }
}

export default Services;
