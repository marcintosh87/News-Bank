import React from "react";
import FeaturedCard from "./FeaturedCard";

export default function Featured({ featured: { articles } }) {
  console.log(articles);
  return (
    <div className="container">
      <aside>
        {articles && (
          <FeaturedCard
            title={articles[0].title}
            summary={articles[0].description}
            url={articles[0].url}
            image={articles[0].urlToImage}
            date={articles[0].publishedAt}
          />
        )}
      </aside>
    </div>
  );
}
