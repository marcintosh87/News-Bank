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
      <h3 className="bg-warning p-2 rounded text-uppercase font-weight-bold">
        {" "}
        Spotlight
      </h3>
      <img
        src={image}
        alt={title}
        className="img-fluid rounded"
        style={{ width: "100%" }}
      />
      <h4>{title}</h4>
      <p> {summary}</p>
      <img
        src={image2}
        alt={title2}
        className="img-fluid rounded"
        style={{ width: "100%" }}
      />
      <h4>{title2}</h4>
      <p>{summary2}</p>
    </div>
  );
}
