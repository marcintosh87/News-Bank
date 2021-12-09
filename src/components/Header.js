import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectFirestore } from "./firebase/config";
import logo from "./../img/News Bank-logos_white.png";
import Modal from "./Modal";
import Button from "@mui/material/Button";

export default function Header() {
  const [showModal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const handleClose = () => {
    setModal(false);
  };

  const handleOpen = () => {
    setModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userSubmission = {
      title: title,
      description: description,
      imageURL: imageUrl,
      votes: 0,
      content: content,
    };

    projectFirestore.collection("spotlight").add(userSubmission);
    handleClose();
  };

  return (
    <>
      <div
        className="shadow mb-4  align-items-center  "
        style={{ backgroundColor: "#a31545" }}
      >
        <div className="container">
          <div className="row align-items-center py-3 g-0">
            <Link to="/" style={{ textDecoration: "none" }} className="col-3">
              <img className="img-fluid" src={logo} alt="News Bank logo" />
            </Link>
            {/* tag */}
            <h6
              id="tag"
              className=" text-uppercase w-50 p-1  my-1 col"
              style={{ color: "#ffca28" }}
            >
              News from the world and <br />
              <span style={{ fontSize: "1.6em", color: "#ffca28" }}>
                <b>the community</b>
              </span>
            </h6>
            {/* userForm */}
            <div className="text-center col">
              <h6 className="text-light">
                <b>Submit Spotlight News</b>
              </h6>
              <button className="btn btn-light text-dark" onClick={handleOpen}>
                User Form
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}

      {showModal && (
        <Modal handleClose={handleClose}>
          <h3 style={{ color: "#e91e63" }}>
            <strong>Spotlight Submission Form</strong>
          </h3>
          <br />
          <form>
            <div className="mb-3">
              <label className="form-label">Headline</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Headline"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Summary of event/incident</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter a brief summary"
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-group mb-3">
              <label>Image</label>
              <input
                type="url"
                className="form-control"
                placeholder="Must be an image url"
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Full Story (optional)</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter the full story"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <br />
            <Button size="small" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Button size="small" type="button" onClick={handleClose}>
              Close
            </Button>
          </form>
        </Modal>
      )}
    </>
  );
}
