import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UserCard from "./components/UserCard";
import { GetUsers } from "./services/GetUsers";
import { Route, Switch } from "react-router";

import "././styles/style.css";
import "materialize-css/dist/css/materialize.min.css";

/**
 * Render Header, Home and Footer components.
 * UserCard component only is rendered to change route with the click
 */
function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  /**
   * Get users when the page is refreshed or allUsers updated (checked by the length)
   */
  useEffect(() => {
    getUsersData();
  }, [allUsers.length]);

  /**
   * Second part of the fetch, when promise is returned and save list of users in allUsers.
   */
  const getUsersData = () => {
    GetUsers().then(data => {
      setAllUsers(data);
    });
  };

  /**
   * Get input value written by the user
   */
  const getNameInput = event => {
    const value = event.currentTarget.value;
    setSearchUser(value);
  };

  return (
    <div>
      <Header />
      <main className="app-container container">
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <div>
                <Home
                  allUsers={allUsers}
                  searchUser={searchUser}
                  getNameInput={getNameInput}
                />
              </div>
            )}
          />
          <Route
            path="/user/:id"
            render={routerProps => (
              <UserCard allUsers={allUsers} Match={routerProps.match} />
            )}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
