import React from 'react';
import css from './HomePage.module.css';

function HomePage() {
  return (
    <div className={css.container}>
      <h1>Welcome to our contact book website</h1>
      <h2>About Us</h2>
      <p>
        We offer a convenient and user-friendly way to manage your contact list.
        Our contact book website has everything you need to make organizing your
        contacts as efficient as possible.
      </p>
      <h2>Let's start using our "Contact Book" today!</h2>
    </div>
  );
}

export default HomePage;
