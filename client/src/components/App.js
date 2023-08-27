import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import WelcomePage from "./WelcomePage";
import VenueShow from "./VenueShow";
import ShowShow from "./ShowShow";
import ShowPlayGround from "./ShowPlayGround";
import ArtistProfile from "./ArtistProfile";
import ActiveArtists from "./ActiveArtists.js";
import ArtistForm from "./ArtistForm.js"
import SimpleJsApiLoaderGoogleMap from "./maps/simpleJsApiLoaderGoogleMap.js"

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch (err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/venues" render={(props) => <WelcomePage user={currentUser} {...props} />} />
        <Route exact path="/venues/:name" render={(props) => <VenueShow user={currentUser} {...props} />} />
        <Route exact path="/venues/:name/:id" render={(props) => <ShowShow user={currentUser} {...props} />} />
        <Route exact path="/showplayground" render={(props) => <ShowPlayGround user={currentUser} {...props} />} />
        <Route exact path="/artists" render={(props) => <ActiveArtists user={currentUser} {...props} />} />
        <Route exact path="/artists/new" render={(props) => <ArtistForm user={currentUser} {...props} />} />
        <Route exact path="/artists/:id" render={(props) => <ArtistProfile user={currentUser} {...props} />} />
        <Route exact path="/maps" component={SimpleJsApiLoaderGoogleMap} />
      </Switch>
    </Router>
  );
};

export default hot(App);