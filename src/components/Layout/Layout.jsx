import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
