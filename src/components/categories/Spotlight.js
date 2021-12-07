import React from "react";

import SpotlightCard from "../SpotlightCard";
import defaultImage from "./../../img/news-bank-featured-bg.jpeg";

export default function NewsSection({ spotlight }) {
  return (
    <div className="d-inline-flex p-2 flex-wrap justify-content-around card-columns">
      {spotlight &&
        spotlight.map((each, index) => {
          return (
            <SpotlightCard
              key={index}
              title={each.title}
              image={each.imageURL === null ? defaultImage : each.imageURL}
              description={each.description}
              votes={each.votes}
            />
          );
        })}
    </div>
  );
}
