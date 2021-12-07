import React from "react";
import NewsCard from "./NewsCard";
import defaultImage from "./../img/news-bank-featured-bg.jpeg";
import Grid from "@mui/material/Grid";
import NewsGrid from "./NewsGrid";

export default function NewsSection({ newsData: { articles } }) {
  articles && articles.shift();
  //   console.log(articles);
  return (
    <div>
      <NewsGrid>
        {articles &&
          articles.map((each, index) => {
            return (
              <Grid item xs={2} sm={3} md={3} key={index}>
                <NewsCard
                  key={index}
                  title={each.title}
                  image={
                    each.urlToImage === null ? defaultImage : each.urlToImage
                  }
                  description={each.description}
                  url={each.url}
                  date={each.publishedAt}
                />
              </Grid>
            );
          })}
      </NewsGrid>
    </div>
  );
}
