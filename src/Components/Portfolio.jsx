import React, { useEffect, useState } from "react";
// import portfolio from "./PortfolioData";
import "./Portfolio.css";
import PortfolioItems from "./PortfolioItems";
import portfolio from "./PortfolioData";
// import { collection, onSnapshot } from "firebase/firestore";
// import db from "../firebase";

function Portfolio() {
  const [Portfolio, setPortfolio] = useState(portfolio);
  // const portfolioColRef = collection(db, "portfolio");
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(portfolioColRef, (snapshot) => {
  //     setPortfolio(
  //       snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
  //     );
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [portfolioColRef]);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__header">
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio__container">
        {/* {Portfolio.map(
          ({ id, data: { title, url, description, image, deployed } }) => (
            <PortfolioItems
              key={id}
              title={title}
              url={url}
              description={description}
              image={image}
              deployed={deployed}
            />
          )
        )} */}
        {Portfolio.map((items) => (
          <PortfolioItems
            key={items.id}
            title={items.title}
            url={items.link}
            description={items.tools}
            image={items.image}
            deployed={items.Deployed}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
