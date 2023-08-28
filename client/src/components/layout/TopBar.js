import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li
      className="btn-complement-purple"
      key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li
      className="btn-complement-purple ml-1"
      key="sign-up">
      <Link to="/users/new">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out"
      className="">
      <SignOutButton />
    </li>,
  ];

  return (
      <div className="card bg-black text-white">
        <div className="topBarButtons">
          <div className="btn-complement-purple">
            <Link to="/venues">GTTG</Link>
          </div>
          <ul>{user ? authenticatedListItems : unauthenticatedListItems}</ul>
        </div>
      </div>
  );
};

export default TopBar;
