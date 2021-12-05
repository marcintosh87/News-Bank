import React from "react";

import logo from "./../img/News Bank-logos_white.png";

export default function Header() {
  return (
    <div className="bg-dark shadow mb-4  " style={{ height: "rem" }}>
      <div
        className="d-flex justify-content-left container
       mr-3 h-25"
      >
        <img
          src={logo}
          alt="News Bank logo"
          className="img-fluid w-25 p-2 my-4 "
        />
        <h5 className="text-light text-uppercase w-25 p-1  my-5">
          News from the world and <br />
          <span className="text-warning" style={{ fontSize: "1.6em" }}>
            <b>the community</b>
          </span>
        </h5>
      </div>
    </div>
  );
}
