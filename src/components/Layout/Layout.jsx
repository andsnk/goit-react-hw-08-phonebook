import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logout } from 'redux/auth/operation';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './Layout.module.css';
// import Button from '@mui/material/Button';

function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <div className={css.list}>
            {/* {' '} */}
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
            {isLoggedIn && (
              <NavLink className={css.link} to="/contacts">
                Contacts
              </NavLink>
            )}
          </div>
          <div className={css.list}>
            {isLoggedIn ? (
              <p className={css.text}>Welcome, {user.name}</p>
            ) : (
              <NavLink className={css.link} to="/register">
                Register
              </NavLink>
            )}
            {isLoggedIn ? (
              <p className={css.link} onClick={() => dispatch(logout())}>
                Log Out
              </p>
            ) : (
              <NavLink className={css.link} to="/login">
                LogIn
              </NavLink>
            )}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
