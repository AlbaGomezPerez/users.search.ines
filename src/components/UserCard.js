import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import "./../styles/style.css";
import "./../styles/cardList.css";

const profileImage =
  "https://i.ya-webdesign.com/images/profile-avatar-png-4.png";

/**
 * Render the card with user's details
 * @param props
 *  - allUsers: list with users data
 *  - Match: object to get user id from URL
 * @returns the HTML generated
 */
function UserCard(props) {
  const { allUsers, Match } = props;
  const userId = parseInt(Match.params.id, 10);

  const user = allUsers.filter(myUser => myUser.id === userId);

  if (user.length < 1) {
    return (
      <div>
        <p>User not found</p>
        <Link to="/">Go back</Link>
      </div>
    );
  } else {
    return (
      <ul className="card-container">
        {user.map(user => {
          return (
            <div className="row" key={user.id}>
              <div className="col s12 m7">
                <span className="name-card">{user.name}</span>
                <div className="card">
                  <div>
                    <div className="image-container" />
                    <img
                      className="image-user"
                      src={profileImage}
                      alt="user profile"
                    />
                  </div>
                  <div className="card-content">
                    <span className="content-space">
                      <strong>Email:</strong>
                    </span>
                    <p>{user.email}</p>
                    <span className="content-space">
                      <strong>Website:</strong>
                    </span>
                    <p>{user.website}</p>
                    <span className="content-space">
                      <strong>Company:</strong>
                    </span>
                    <p>{user.company.name}</p>
                    <span className="content-space">
                      <strong>Phone:</strong>
                    </span>
                    <p>{user.phone}</p>
                    <div className="back">
                      <Link to={"/"}>
                        <button className="btn waves-effect waves-light">
                          Go back
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

UserCard.propTypes = {
  allUsers: PropTypes.array
};

export default UserCard;
