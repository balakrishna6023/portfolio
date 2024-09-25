import React from 'react';
import './services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import services_data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <section className="services" id='services'>
      <header className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Decorative Theme Pattern" />
      </header>
      <div className="services-container">
        {services_data.map((service, index) => (
          <article className="services-format" key={index}>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="Arrow Icon" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
