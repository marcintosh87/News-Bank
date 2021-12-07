import React, { useState } from "react";
import { projectFirestore } from "./firebase/config";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SendIcon from "@mui/icons-material/Send";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function SpotlightCard({
  title,
  image,
  date,
  description,
  url,
  votes,
  id,
}) {
  const maxLength = 500;

  const [vote, setVote] = useState(votes);

  const handleVote = () => {
    setVote(vote + 1);
    projectFirestore.collection("spotlight").doc(id).update({ votes: vote });
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
          <br />
          <br />

          <h5 variant="text">
            <b>
              Votes: <span>{votes}</span>
            </b>
          </h5>
        </Typography>
      </CardContent>
      <CardActions>
        <CardActions>
          <Button variant="contained" endIcon={<SendIcon />}>
            Share
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleVote}
            startIcon={<ArrowUpwardIcon />}
          >
            Vote
          </Button>
        </CardActions>
      </CardActions>
    </Card>
  );
}
