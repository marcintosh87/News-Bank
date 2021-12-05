import React from "react";
import "./nav.css";

export default function Nav() {
  return (
    <div className="container">
      <nav className="nav nav-pills flex-column flex-sm-row py-3 ">
        <a
          className="flex-sm-fill text-sm-center nav-link "
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
          href="www"
        >
          General
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
          href="www"
        >
          Business
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
          href="www"
        >
          Entertainment
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
          href="www"
        >
          Sports
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
          href="www"
        >
          Technology
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
          href="www"
        >
          Health
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
          href="www"
        >
          Science
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
          href="www"
        >
          Spotlight
        </a>
      </nav>
    </div>
  );
}
