import React from "react";

export default function NewsCard({ title, image, date, description, url }) {
  const maxLength = 500;

  return (
    <div style={{ width: "300px", height: "100%" }}>
      <div className="  border rounded overflow-hidden  mb-4 shadow-sm h-md-250 position-relative">
        <img src={image} alt={title} className="img-fluid" />
        <div className="col p-4 d-flex flex-column position-static bg-light ">
          <h4 className="mb-0 text-secondary">
            {`${
              title.length > maxLength ? title.substring(0, maxLength) : title
            }`}
          </h4>
          <div className="mb-1 text-muted">{date}</div>
          <p className="card-text mb-auto">{description}</p>
          <a
            href={url}
            target="_blank"
            className="stretched-link"
            rel="noreferrer"
          >
            Continue reading
          </a>
        </div>
        <div className="col-auto d-none d-lg-block"></div>
      </div>
    </div>
  );
}
