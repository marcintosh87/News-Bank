import React from "react";
import NewsCard from "./NewsCard";
import defaultImage from "./../img/news-bank-featured-bg.jpeg";

export default function NewsSection({ newsData: { articles } }) {
  articles && articles.shift();
  //   console.log(articles);
  return (
    <div className="d-inline-flex p-2 flex-wrap justify-content-around card-columns">
      {articles &&
        articles.map((each, index) => {
          return (
            <NewsCard
              key={index}
              title={each.title}
              image={each.urlToImage === null ? defaultImage : each.urlToImage}
              description={each.description}
              url={each.url}
              date={each.publishedAt}
            />
          );
        })}
    </div>
  );
}
