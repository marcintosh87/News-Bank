import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./../img/News Bank-logos_white.png";
import Modal from "./Modal";

export default function Header() {
  const [showModal, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  const handleOpen = () => {
    setModal(true);
  };
  return (
    <div className="bg-dark shadow mb-4  ">
      <div
        className="d-flex justify-content-start align-items-center container 
       mr-3 h-25"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="row align-items-center">
            <img
              style={{ maxWidth: "40%", height: "40%" }}
              src={logo}
              alt="News Bank logo"
            />
            <h5 id="tag" className="text-danger text-uppercase w-50 p-1  my-4">
              News from the world and <br />
              <span className="text-warning" style={{ fontSize: "1.6em" }}>
                <b>the community</b>
              </span>
            </h5>
          </div>
        </Link>

        <div className="text-center">
          <h6 className="text-light">
            <b>Submit Spotlight News</b>
          </h6>
          <button className="btn btn-light text-dark" onClick={handleOpen}>
            User Form
          </button>
        </div>
      </div>
      {showModal && (
        <Modal handleClose={handleClose}>
          <h3 className="text-dark">Spotlight Submission Form</h3>
          <form>
            <div className="form-group">
              <label>Headline</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Headline"
              />
            </div>
            <div className="form-group">
              <label>Summary of event/incident</label>
              <textArea
                className="form-control"
                placeholder="Enter a brief summary"
              />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input
                type="url"
                className="form-control"
                placeholder="Must be an image url"
              />
            </div>
            <br />
            <button
              type="submit"
              onClick={handleClose}
              className="btn btn-warning"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="btn btn-danger mx-3"
            >
              Close
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
