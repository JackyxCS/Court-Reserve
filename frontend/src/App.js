import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsContainer from "./components/SpotsContainer";
import HomePageExplore from "./components/HomePageExplore";
import UserProfile from "./components/UserProfile";
import ListingForm from "./components/ListingForm/ListingForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePageExplore />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/spots">
            <SpotsContainer />
          </Route>
          <Route path="/users/:userId">
            <UserProfile />
          </Route>
          <Route path="/listing">
            <ListingForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;