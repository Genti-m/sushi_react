import React from "react";
import searchIcon from '../../assets/svg/search.svg';
import menuIcon from '../../assets/svg/menu.svg';
import FormattedMessage from './FormattedMessage';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left"/>
      <div className="navbar__content">
        <div className="navbar__logo">
          <h4><FormattedMessage id='title' /></h4>
        </div>
        <div className="navbar__list">
          <div className="navbar__item">
            <FormattedMessage id='navbar.menu' />
          </div>
          <div className="navbar__item">
            <FormattedMessage id='navbar.food' />
          </div>
          <div className="navbar__item">
            <FormattedMessage id='navbar.services' />
          </div>
          <div className="navbar__item">
            <FormattedMessage id='navbar.about' />
          </div>
          <div className="navbar__item">
            <img src={searchIcon} alt="search" />
          </div>
        </div>
      </div>
      <div className="navbar__right"/>
    </div>
  )
};

export default NavBar;
