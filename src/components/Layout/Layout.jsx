import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logout } from 'redux/auth/operation';
import { selectIsLoggedIn } from 'redux/auth/selectors';

function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/register">Register</NavLink>
        {isLoggedIn ? (
          <button onClick={() => dispatch(logout())} type="button">
            LogOut
          </button>
        ) : (
          <NavLink to="/login">LogIn</NavLink>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
