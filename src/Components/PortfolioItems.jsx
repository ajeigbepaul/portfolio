import React from "react";
import "./Portfolio.css";

function PortfolioItems({ title, description, deployed, url, image }) {
  return (
    <section className="portfolio__items">
      <div className="portfolio__image">
        <img src={image} alt="img" />
        <div className="portfolio__info">
          <div className="portfolio__title">{title}</div>
          <div className="portfolio__tools">{description}</div>
          <div className="portfolio__deployed">{deployed}</div>
          <div className="portfolio__url">
            link-<a href={url}>{url}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioItems;
