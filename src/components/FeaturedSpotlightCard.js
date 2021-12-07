import React from "react";

export default function FeaturedSpotlightCard({
  title,
  summary,
  image,
  title2,
  summary2,
  image2,
}) {
  return (
    <div className="col-4">
      <h3
        className=" p-2 rounded text-uppercase font-weight-bold"
        style={{ backgroundColor: "#ffca28" }}
      >
        {" "}
        Spotlight
      </h3>
      <img
        src={image}
        alt={title}
        className="img-fluid rounded img-thumbnail"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h4>{title}</h4>
      <p> {summary}</p>
      <img
        src={image2}
        alt={title2}
        className="img-fluid rounded img-thumbnail"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h4>{title2}</h4>
      <p>{summary2}</p>
    </div>
  );
}
