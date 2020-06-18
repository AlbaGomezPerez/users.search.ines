import React from "react";
import PropTypes from "prop-types";
import UsersRow from "./UsersRow";
import UsersError from "./UsersError";

import "materialize-css/dist/css/materialize.min.css";
import "./../styles/style.css";

/**
 * Render the table when there are users
 * @param props
 *  - allUsers: list with users data
 *  - searchUser: input value
 * @returns the HTML generated
 */
function UsersList(props) {
  const { allUsers, searchUser } = props;

  const filteredUsers = allUsers.filter(
    user =>
      user.name.toLowerCase().includes(searchUser.toLowerCase()) ||
      user.email.toLowerCase().includes(searchUser.toLowerCase()) ||
      user.website.toLowerCase().includes(searchUser.toLowerCase())
  );

  if (allUsers === null || allUsers === undefined || allUsers.length <= 0) {
    return (
      <table>
        <tbody>
          <UsersError />
        </tbody>
      </table>
    );
  } else {
    return (
      <table className="striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Website</th>
            <th>More info</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <UsersRow index={index} user={user} key={user.id} />
            ))
          ) : (
            <UsersError />
          )}
        </tbody>
      </table>
    );
  }
}

UsersList.propTypes = {
  allUsers: PropTypes.array,
  searchUser: PropTypes.string
};

export default UsersList;
