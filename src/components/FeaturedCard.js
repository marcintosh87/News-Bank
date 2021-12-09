import React from "react";
import Button from "@mui/material/Button";

export default function FeaturedCard({ title, summary, image, url, date }) {
  return (
    <>
      <div className="col-7">
        <h3
          className=" px-2  text-uppercase font-weight-bold"
          style={{ color: "#e91e63" }}
        >
          <strong>Featured</strong>
        </h3>
        <img
          src={image}
          alt={title}
          className="img-fluid rounded"
          style={{ width: "100%" }}
        />
        <div className=" px-0">
          <h4 className=" fst-italic py-2">{title}</h4>
          <p className="text-left"> Published: {date}</p>
          <p className="lead my-3 ">{summary}</p>
          <p className="lead mb-0">
            <Button href={url} target="_blank" size="large">
              Learn More
            </Button>
          </p>
        </div>
      </div>
      <div className="col-1 "></div>
    </>
  );
}
