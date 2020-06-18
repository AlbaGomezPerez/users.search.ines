import React from "react";

import "./../styles/style.css";
import "materialize-css/dist/css/materialize.min.css";

/**
 * Render the Header HTML
 */
function Header() {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            <img
              src="https://ines.es/wp-content/uploads/2016/06/logo.png"
              alt="logo"
            />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://www.linkedin.com/in/albagomezperez/">Linkedin</a>
            </li>
            <li>
              <a href="https://twitter.com/GomezPerezAlba">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/AlbaGomezPerez">GitHub</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
