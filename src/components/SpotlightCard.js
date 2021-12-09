import React, { useState } from "react";
import { projectFirestore } from "./firebase/config";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Modal from "./Modal";
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
  content,
}) {
  // const maxLength = 500;

  const [vote, setVote] = useState(votes);
  const [showModal, setModal] = useState(false);

  const handleVote = () => {
    setVote(vote + 1);
    projectFirestore.collection("spotlight").doc(id).update({ votes: vote });
  };
  const handleClose = () => {
    setModal(false);
  };

  const handleOpen = () => {
    setModal(true);
  };

  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="span" color="text.secondary">
            {description} <br />
            <p variant="text">
              <b>
                Votes: <span>{votes}</span>
              </b>
            </p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleVote}
            startIcon={<ArrowUpwardIcon />}
          >
            Vote
          </Button>
          <Button variant="contained" onClick={handleOpen}>
            Read
          </Button>
          <Button target="_blank" size="sm">
            Share
          </Button>
        </CardActions>
      </Card>
      {showModal && (
        <Modal handleClose={handleClose}>
          <div className="container">
            <img
              src={image}
              alt={title}
              className="img-fluid"
              style={{ width: "100%", height: "auto" }}
            />
            <br />
            <br />
            <Typography variant="h5" color="primary">
              {title}
            </Typography>
            <br />

            <p>{content}</p>

            <Button
              color="secondary"
              variant="contained"
              onClick={handleVote}
              startIcon={<ArrowUpwardIcon />}
            >
              Vote
            </Button>
            <Button size="small" type="button" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
