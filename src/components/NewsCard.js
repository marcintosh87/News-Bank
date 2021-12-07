import React from "react";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function NewsCard({ title, image, date, description, url }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button href={url} target="_blank" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
