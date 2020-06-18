import React from "react";
import PropTypes from "prop-types";

import UsersList from "./UsersList";
import Filters from "./Filters";

import "materialize-css/dist/css/materialize.min.css";
import "./../styles/style.css";

/**
 * Render Filters and UsersList components
 * @param props
 *  - allUsers: list with all users data
 *  - searchUser: input value
 *  - getNameInput: method run by the input
 */
function Home(props) {
  const { allUsers, searchUser, getNameInput } = props;

  return (
    <div className="home">
      <Filters searchUser={searchUser} getNameInput={getNameInput} />
      <UsersList allUsers={allUsers} searchUser={searchUser} />
    </div>
  );
}

Filters.propTypes = {
  allUsers: PropTypes.array,
  getNameInput: PropTypes.func,
  searchUser: PropTypes.string
};

export default Home;
