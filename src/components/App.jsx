import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Contacts from '../pages/Contacts';
import Login from 'pages/Login';
import HomePage from 'pages/HomePage';
import Register from 'pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operation';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { selectIsLoading } from 'redux/selectors';
import Loader from './Loader/Loader';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isRefreshing && isLoading ? (
    <Loader />
  ) : (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
