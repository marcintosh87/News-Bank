import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <a
              href="https://marcintosh87.github.io/Cocktail-Lounge/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span className="text-muted">© 2021 News Bank</span>
            </a>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="www">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="www">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="www">
                <svg className="bi" width="24" height="24"></svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
