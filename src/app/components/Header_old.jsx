import React, { useEffect } from 'react';
import '../../styles/index.scss'; // Import the main styles file

import searchIcon from '../../assets/svg/search.svg';
import menuIcon from '../../assets/svg/menu.svg';

const Header = () => {
  useEffect(() => {
    // Create the header menu items
    const headerMenuItems = [
      { text: 'Menu', href: '#menu' },
      { text: 'Food', href: '#food' },
      { text: 'Services', href: '#services' },
      { text: 'About Us', href: '#about-us' },
    ];

    const headerMenu = document.createElement('ul');
    headerMenu.classList.add('header__menu');
    headerMenu.setAttribute('data-aos', 'fade-down');

    headerMenuItems.forEach((item) => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = item.href;
      anchor.textContent = item.text;
      listItem.appendChild(anchor);
      headerMenu.appendChild(listItem);
    });

    // Create the search icon item
    const searchIconItem = document.createElement('li');
    const searchIconImg = document.createElement('img');
    searchIconImg.src = searchIcon;
    searchIconImg.alt = 'search';
    searchIconItem.appendChild(searchIconImg);
    headerMenu.appendChild(searchIconItem);

    // Append the header menu to the header element
    const header = document.querySelector('header');
    header.appendChild(headerMenu);

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
    <header>
      <nav>{/* Any other content in the header */}</nav>
    </header>
  );
};

export default Header;
