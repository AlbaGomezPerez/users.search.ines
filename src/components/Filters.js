import React from "react";
import PropTypes from "prop-types";

import "materialize-css/dist/css/materialize.min.css";
import "./../styles/style.css";

/**
 * Render the chart with the visited cities
 * @param props
 *  - allUsers: list with all users data
 *  - searchUser: input value
 *  - getNameInput: method run by the input
 * @returns the HTML generated
 */
function Filters(props) {
  const { searchUser, getNameInput } = props;

  return (
    <div className="container main-container">
      <nav>
        <div className="nav-wrapper nav-filter">
          <form>
            <div className="input-field">
              <input
                id="search"
                className="input-content"
                type="search"
                placeholder="Users' search"
                onChange={getNameInput}
                value={searchUser}
                required
              />
              <label className="label-icon" htmlFor="search" />
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

Filters.propTypes = {
  searchUser: PropTypes.string,
  getNameInput: PropTypes.func
};

export default Filters;
