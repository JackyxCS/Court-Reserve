import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsContainer from "./components/SpotsContainer";
import HomePageExplore from "./components/HomePageExplore";
import UserProfile from "./components/UserProfile";
import ListingForm from "./components/ListingForm";
import SingleSpot from "./components/SingleSpot";
import UpdateSpotForm from "./components/UpdateSpotForm";
import UpdateBookingForm from "./components/UpdateBookingForm";
import SearchContainer from "./components/SearchContainer";
// import MapContainer from "./components/MapContainer/MapContainer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <MapContainer /> */}
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePageExplore />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/spots">
            <SpotsContainer />
          </Route>
          <Route exact path="/spots/search">
            <SearchContainer />
          </Route>
          <Route exact path="/spots/:spotId">
            <SingleSpot />
          </Route>
          <Route exact path="/spots/:spotId/edit">
            <UpdateSpotForm />
          </Route>
          <Route exact path="/bookings/:bookingId/edit">
            <UpdateBookingForm />
          </Route>
          <Route exact path="/users/:userId">
            <UserProfile />
          </Route>
          <Route exact path="/listing">
            <ListingForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;