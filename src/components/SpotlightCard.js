import React from "react";

export default function SpotlightCard({
  title,
  image,
  date,
  description,
  url,
  votes,
}) {
  const maxLength = 500;

  return (
    <div style={{ width: "300px", height: "100%" }}>
      <div className="  border rounded overflow-hidden  mb-4 shadow-sm h-md-250 position-relative mx-3">
        <img src={image} alt={title} className="img-fluid" />
        <div className="col p-4 d-flex flex-column position-static bg-light ">
          <h4 className="mb-0 text-secondary">
            {`${
              title.length > maxLength ? title.substring(0, maxLength) : title
            }`}
          </h4>
          <div className="mb-1 text-muted">{date}</div>
          <p className="card-text mb-auto">{description}</p>
          <p className="text-primary">Continue Reading</p>
          <div className="row align-items-center ">
            <button className="btn btn-warning col">Vote Up</button>
            <p className="col-6 m-1">Votes: {votes}</p>
          </div>
        </div>
        <div className="col-auto d-none d-lg-block"></div>
      </div>
    </div>
  );
}
