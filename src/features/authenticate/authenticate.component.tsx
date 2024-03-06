import { JSX } from 'react';
import './authenticate.css';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

export default function Authenticate({ loggedIn = true }): JSX.Element {
  const { pathname } = useLocation();

  if (!loggedIn) {
    return (
      <Navigate 
        to="/public/login"
        state={{
          message: "You must log in first.",
          from: pathname
        }}
      />
    )
  }

  return <Outlet />
}