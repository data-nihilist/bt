import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";

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
        <Route exact path="/">
          <div className="container">
            <div><h1>Colors</h1>
              <span className="text-primary">primary text</span>|
              <span className="text-secondary">secondary text</span>|
              <span className="text-error">error text</span>|
              <span className="text-info">info text</span>|
              <span className="text-blue">blue text</span>|
              <span className="text-red">red text</span>|
              <span className="text-green">green text</span>|
              <span className="text-yellow">yellow text</span>|
              <span className="text-purple">purple text</span>|
              <span className="text-orange">orange text</span>|
              <span className="text-gray">gray text</span>|
              <br></br>
              <hr className="mt mb" />
              <span className="bg-primary text-white">bg primary</span>|
              <span className="bg-secondary text-white">bg secondary</span>|
              <span className="bg-error text-white">bg error</span>|
              <span className="bg-info text-white">bg info</span>|
              <span className="bg-blue text-white">bg blue</span>|
              <span className="bg-red text-white">bg red</span>|
              <span className="bg-green text-white">bg green</span>|
              <span className="bg-yellow text-white">bg yellow</span>|
              <span className="bg-purple text-white">bg purple</span>|
              <span className="bg-orange text-white">bg orange</span>|
              <span className="bg-gray text-white">bg gray</span>|
              <br></br>
              <hr className="mt mb" />
              <span className="bg-primary-dark-8 text-white">primary dark 8</span>|
              <span className="bg-primary-dark-6 text-white">primary dark 6</span>|
              <span className="bg-primary-dark-4 text-white">primary dark 4</span>|
              <span className="bg-primary-dark-2 text-white">primary dark 2</span>|
              <span className="bg-primary text-white">primary</span>|
              <span className="bg-primary-light-2 text-white">primary light 2</span>|
              <span className="bg-primary-light-4 text-white">primary light 4</span>|
              <span className="bg-primary-light-6 text-white">primary light 6</span>|
              <span className="bg-primary-light-8 text-white">primary light 8</span>|
              <br></br>
              <hr className="mt mb" />
              <a href="#" className="text-primary text-hover-orange-light-1">hover me</a>
            </div>
            <hr className="mt-2 mb-2" />
            <div><h1 className="mb-2">Font Sizes</h1>
              <div className="font-sm">this is small font</div>
              <div className="font-md">this is medium font</div>
              <div className="font-ls">this is large font</div>
              <div className="font-xl">this is extra large font</div>
              <div className="font-xxl">this is extra, EXTRA large font</div>
            </div>
            <hr className="mt-2 mb-2" />
            <div><h1>Buttons</h1>
              <a href="#" className="btn">default btn</a>
              <a href="#" className="btn-primary text-white">click me</a>
              <a href="#" className="btn-secondary text-white">click me</a>
              <a href="#" className="btn-error text-white">click me</a>
              <a href="#" className="btn-info">click me</a>
              <br></br>
              <h4>buttons made using a SASS mixin</h4>
              <a href="#" className="btn-outlined-purple text-purple text-hover-white">click me</a>
              <a href="#" className="btn-outlined-orange text-orange text-hover-white">click me</a>
              <br></br>
              <h4>buttons made using a SASS function</h4>
              <a href="#" className="btn-complement-purple">click meeee</a>
              <a href="#" className="btn-complement-primary">clickmeeeee!!!</a>
            </div>
            <hr className="mt-2 mb-2" />
            <div className="card">
              <h1 className="card-title">
                This is a card title
              </h1>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                aspernatur debitis veniam <a href="#">sit ratione</a> ad quidusdam
                temporibus ut ullam deleniti!</p>
              <button className="card-title test-btn">
                Test Button
              </button>
            </div>
            <hr className="mt-2 mb-2" />
            <div className="row gap-2 justify-center"><h1 className="mb-2">GRID SYSTEM</h1>
                <h1 className="card-title col-12-xs col-5-sm col-3-xl">Greetings, Gamers</h1>
                <p className="card-body">lorem ipsum dolor sit amet consectetur, adipsciing elite.</p>
              <div className="card col-12-xs col-5-sm col-3-xl gap-2 justify-flex-start">
                <h1 className="card-title">Greetings, Gamers</h1>
                <p className="card-body">lorem ipsum dolor sit amet consectetur, adipsciing elite.</p>
              <div className="card col-12-xs col-5-sm col-3-xl gap-2">
                <h1 className="card-title">Greetings, Gamers</h1>
                <p className="card-body">lorem ipsum dolor sit amet consectetur, adipsciing elite.</p>
              </div>
              </div>
              <h2 className="card-title">Greetings, Gamers</h2>
              <p className="card-body">lorem ipsum dolor sit amet consectetur, adipsciing elite.</p>
              <div className="pl-5 card-title">fart</div>
              <div className="card col-12-xs col-5-sm col-3-xl gap-2">
                <h1 className="card-title">Greetings, Gamers</h1>
                <p className="card-body">lorem ipsum dolor sit amet consectetur, adipsciing elite.</p>
              </div>
            </div>
            <div className="card col-12-xs col-5-sm col-3-xl gap-2">
              <h1 className="card-title">Greetings, Gamers</h1>
              <p className="card-body">lorem ipsum dolor sit amet consectetur, adipsciing elite.</p>
              <h4 className="card-title">Greetings, Gamers</h4>
              <h6 className="card-title">Greetings, Gamers</h6>
              <p className="card-body">lorem ipsum dolor sit amet consectetur, adipsciing elite.</p>
            </div>
          </div>
          <hr className="mt-2 mb-2" />
          {/*------------------------------------------------------------------------utilities*/}
          <div className="card"><h1>Utilities</h1>

          <div>
            <span><h1>ah</h1>Hey</span>
          </div>
          </div>
          {/* <div className="responsive-test">
                  <h1>Changing Colors</h1>
                </div> */}
                <hr className="mb-6"/>
        </Route>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);
