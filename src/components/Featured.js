import { Container } from "@mui/material";
import React from "react";
import defaultImage from "./../img/news-bank-featured-bg.jpeg";
import FeaturedCard from "./FeaturedCard";
import FeaturedSpotlightCard from "./FeaturedSpotlightCard";
import bgCities from "./../img/bg-cities.jpg";

export default function Featured({ featured: { articles }, spotlight }) {
  return (
    <div>
      <aside
        className="p-5 p-md-5  text-white   "
        style={{
          backgroundImage: `url(${bgCities})`,
          backgroundSize: "contain",
        }}
      >
        <Container>
          <div className="row">
            {articles && (
              <FeaturedCard
                title={articles[0].title}
                summary={articles[0].description}
                url={articles[0].url}
                image={
                  articles[0].urlToImage === null
                    ? defaultImage
                    : articles[0].urlToImage
                }
                date={articles[0].publishedAt}
              />
            )}
            {spotlight && (
              <FeaturedSpotlightCard
                title={spotlight[0].title}
                image={spotlight[0].imageURL}
                summary={spotlight[0].description}
                content={spotlight[0].content}
                title2={spotlight[1].title}
                image2={spotlight[1].imageURL}
                summary2={spotlight[1].description}
                content2={spotlight[1].content}
              />
            )}
          </div>
        </Container>
      </aside>
    </div>
  );
}
