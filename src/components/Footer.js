import React from "react";

import "./../styles/style.css";
import "materialize-css/dist/css/materialize.min.css";

/**
 * Render the footer HTML
 */
function Footer() {
  return (
    <div className="footer-container">
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Our users</h5>
              <p className="grey-text text-lighten-4">
                You can read more about all our users and their work
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyright Alba
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
