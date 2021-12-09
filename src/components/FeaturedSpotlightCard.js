import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "./Modal";
import Typography from "@mui/material/Typography";
import "./modal.css";

export default function FeaturedSpotlightCard({
  title,
  summary,
  image,
  title2,
  summary2,
  image2,
  content,
  content2,
}) {
  const [showModal, setModal] = useState(false);
  const [showModal2, setModal2] = useState(false);
  const handleClose = () => {
    setModal(false);
    setModal2(false);
  };

  const handleOpen2 = () => {
    setModal2(true);
  };
  const handleOpen = () => {
    setModal(true);
  };

  return (
    <>
      <div className="col-4">
        <h3
          className=" px-2  text-uppercase font-weight-bold"
          style={{ color: "#ffca28" }}
        >
          <strong>Spotlight</strong>
        </h3>
        <img
          src={image}
          alt={title}
          className="img-fluid rounded img-thumbnail"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <h4>{title}</h4>
        <p>
          {summary}
          <Button target="_blank" size="sm" onClick={handleOpen}>
            Learn More
          </Button>
        </p>

        <img
          src={image2}
          alt={title2}
          className="img-fluid rounded img-thumbnail"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <h4>{title2}</h4>
        <p>
          {summary2}{" "}
          <Button target="_blank" size="sm" onClick={handleOpen2}>
            Learn More
          </Button>
        </p>
      </div>
      {showModal && (
        <Modal>
          <div className="container">
            <img
              src={image}
              alt={title}
              className="img-fluid"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <br />
            <br />
            <Typography variant="h5" color="primary">
              {title}
            </Typography>
            <br />

            <p style={{ color: "black" }}>{content}</p>
            <Button size="small" type="button" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal>
      )}
      {showModal2 && (
        <Modal>
          <div className="container">
            <img
              src={image2}
              alt={title2}
              className="img-fluid"
              style={{ width: "100%", height: "auto" }}
            />
            <br />
            <br />
            <Typography variant="h5" color="primary">
              {title2}
            </Typography>
            <br />

            <p style={{ color: "black" }}>{content2}</p>

            <Button size="small" type="button" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
