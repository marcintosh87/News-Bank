import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <div className="container">
      <nav className="nav nav-pills flex-column flex-sm-row py-3 ">
        <Link
          to="/"
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
        >
          General
        </Link>

        <Link
          to="/business"
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
        >
          Business
        </Link>
        <Link
          to="/entertainment"
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
        >
          Entertainment
        </Link>
        <Link
          to="/sports"
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
        >
          Sports
        </Link>
        <Link
          to="/technology"
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
        >
          Technology
        </Link>
        <Link
          to="/health"
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
        >
          Health
        </Link>

        <Link
          to="/science"
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
        >
          Science
        </Link>
        <Link
          to="/spotlight"
          className="flex-sm-fill text-sm-center nav-link"
          style={{ fontSize: "1.2em", fontWeight: "bold", color: "gray" }}
        >
          Spotlight
        </Link>
      </nav>
    </div>
  );
}
