import React from "react";

import "materialize-css/dist/css/materialize.min.css";
import "./../styles/style.css";

/**
 * Render error message html when there aren't users
 */
function UsersError() {
  return (
    <tr>
      <td colSpan="4">
        <span className="error">There are not users</span>
        <img
          className="error-image"
          src="https://cdn.dribbble.com/users/2130329/screenshots/6621836/jiomoney_somethingwentwrong-01.png"
          alt="error"
        />
      </td>
    </tr>
  );
}

export default UsersError;
