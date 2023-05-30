import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './app/pages/Home';
import './styles/index.scss';
import 'aos/dist/aos.css'; // Import the AOS CSS file
import AOS from 'aos'; // Import the AOS library

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home />
);

AOS.init(); // Initialize AOS after rendering the component
