import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li
    className="btn-complement-green mr-1"
    key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li 
    className="btn-complement-green"
    key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="card bg-black text-white">
      <div className="font-md row">
          <div className="btn-complement-green">
            <Link to="/">GTTG</Link>
          </div>
      <ul className="ml-top-bar">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
