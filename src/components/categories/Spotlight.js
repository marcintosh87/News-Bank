import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SpotlightCard from "../SpotlightCard";
import defaultImage from "./../../img/news-bank-featured-bg.jpeg";

export default function NewsSection({ spotlight }) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {spotlight &&
            spotlight.map((each, index) => {
              return (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <SpotlightCard
                    key={each.id}
                    title={each.title}
                    image={
                      each.imageURL === null ? defaultImage : each.imageURL
                    }
                    description={each.description}
                    votes={each.votes}
                    id={each.id}
                    content={each.content}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
}
