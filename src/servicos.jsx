import React from "react";
import "./servicos.css";

function Servicos() {
  const services = [
    {
      icon: "fa-chrome",
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing portfolio student website"
    },
    {
      icon: "fa-instagram",
      title: "Web Design",
      description: "Lorem ipsum dolor sit amet, student graphic design portfolio websites euismod"
    },
    {
      icon: "fa-reddit",
      title: "Creative Design",
      description: "Lorem ipsum dolor sit amet, student portfolio website examples nonummy nibh euismod"
    },
    {
      icon: "fa-video-camera",
      title: "Video Editing",
      description: "student portfolio website, consectetuer adipiscing elitsed nonummy nibh euismod"
    },
    {
      icon: "fa-camera",
      title: "Photography",
      description: "portfolio website examples for students adipiscing elitsed nonummy nibh euismod"
    },
    {
      icon: "fa-apple",
      title: "App Developing",
      description: "digital portfolio websites for students adipiscing elitsed nonummy nibh euismod"
    }
  ];

  return (
    <div className="main-section" id="servicos">
      <div className="container">
       
        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-list" key={index}>
              <i className={`fa ${service.icon}`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servicos;