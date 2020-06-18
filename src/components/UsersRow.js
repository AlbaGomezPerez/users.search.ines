import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import "./../styles/style.css";

/**
 * Render the row with the users
 */
function UsersRow(props) {
  const { user } = props;

  return (
    <tr className="userRow" key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
      <td className="more">
        <Link to={"/user/" + user.id}>
          <span>+</span>
        </Link>
      </td>
    </tr>
  );
}

UsersRow.propTypes = {
  user: PropTypes.object
};

export default UsersRow;
