import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = (props) => {
  const unauthenticatedListItems = [
    <li
      className="btn-complement-orange"
      key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li
      className="btn-complement-orange ml-1"
      key="sign-up">
      <Link to="/users/new">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>
  ];

  return (
    <div className="card bg-black">
        <div className="topBarButtons">
          <div className="btn-complement-orange">
            <Link to="/">Featrix.AI</Link>
          </div>
          <ul>{props.user ? authenticatedListItems : unauthenticatedListItems}</ul>
        </div>
    </div>
  );
};

export default TopBar;
