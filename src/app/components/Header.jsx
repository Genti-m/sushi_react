import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import searchIcon from '../../assets/svg/search.svg';
import menuIcon from '../../assets/svg/menu.svg';

// Import the _header.scss file
import '../../styles/_header.scss';

// Create a global style to apply the imported styles
const GlobalStyle = createGlobalStyle`
  @import '../../styles/_header.scss';
`;

// Define the styled components
const HeaderWrapper = styled.header`
  /* Any other styles for the header wrapper */
`;

const Header = () => {
  useEffect(() => {
    // Create the header menu items
    const navbarItems = [
      { text: 'Logo', href: '#logo', islogo: true },
      { text: 'Menu', href: '#menu' },
      { text: 'Food', href: '#food' },
      { text: 'Services', href: '#services' },
      { text: 'About Us', href: '#about-us' },
    ];

    const navbar = document.createElement('ul');
    navbar.classList.add('header__menu');
    navbar.setAttribute('data-aos', 'fade-down');

    navbarItems.forEach((item) => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = item.href;
      anchor.textContent = item.text;

      // Check if the item is the logo
      if (item.islogo) {
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('header__logo');

        const logoOverlay = document.createElement('div');
        logoOverlay.classList.add('header__logo-overlay');

        const logoText = document.createElement('h4');
        logoText.textContent = item.text;

        logoContainer.appendChild(logoOverlay);
        logoContainer.appendChild(logoText);

        anchor.appendChild(logoContainer);
      }
      
      listItem.appendChild(anchor);
      navbar.appendChild(listItem);
    });

    /*    USELESS NOW
    // Create the search icon item
    const searchIconItem = document.createElement('li');
    const searchIconImg = document.createElement('img');
    searchIconImg.src = searchIcon;
    searchIconImg.alt = 'search';
    searchIconItem.appendChild(searchIconImg);
    navbar.appendChild(searchIconItem);
    */

    // Append the header menu to the header element
    const header = document.querySelector('header');
    header.appendChild(navbar);

    // Create the mobile menu icon item
    const mobileMenuIconItem = document.createElement('li');
    const mobileMenuIconImg = document.createElement('img');
    mobileMenuIconImg.src = menuIcon;
    mobileMenuIconImg.alt = 'menu';
    mobileMenuIconItem.appendChild(mobileMenuIconImg);

    // Create the mobile menu
    const mobileMenu = document.createElement('ul');
    mobileMenu.classList.add('header__menu-mobile');
    mobileMenu.setAttribute('data-aos', 'fade-down');
    mobileMenu.appendChild(mobileMenuIconItem);

    // Append the mobile menu to the header element
    header.appendChild(mobileMenu);
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeaderWrapper className="header__wrapper">
        {/* Any other content in the header */}
      </HeaderWrapper>
    </>
  );
};

export default Header;
