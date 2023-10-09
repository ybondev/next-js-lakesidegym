"use client";
import About from "./about/page";
import Contact from "./contact/page";
import Home from "./home/page";
import Plan from "./plan/page";
import Services from "./services/page";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  });

  return (
    <>
      <section
        className="home_section container-fluid"
        id="home"
        data-aos="fade-up"
      >
        <div className="container">
          <Home />
        </div>
      </section>
      <section
        className="about_section container-fluid"
        id="about_us"
        data-aos="fade-up"
      >
        <div className="container">
          <About />
        </div>
      </section>
      <section
        className="services_section container-fluid"
        id="services"
        data-aos="fade-up"
      >
        <div className="container">
          <Services />
        </div>
      </section>
      <section
        className="plan_section container-fluid"
        id="plan"
        data-aos="fade-up"
      >
        <div className="container">
          <Plan />
        </div>
      </section>
      <section
        className="contact_section container-fluid"
        id="contact_us"
        data-aos="fade-up"
      >
        <div className="container">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default page;
