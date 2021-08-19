import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import DemoUserPage from '../DemoUser';
import SearchBar from '../SearchBar';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to="/listing" className="CourtListing">List Your Court</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <DemoUserPage />
        <LoginFormModal />
        <NavLink to="/signup"><button className="demobutton">Sign Up</button></NavLink>
      </>
    );
  }

  return (
    <div className="Navbar">
      <div className="HomeDiv">
        <NavLink exact to="/" className="HomeNav">COURT RESERVE</NavLink>
        {/* {isLoaded && sessionLinks} */}
      </div>
      <div className="SearchDiv">
        <SearchBar />
      </div>
      <div className="Login">
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;