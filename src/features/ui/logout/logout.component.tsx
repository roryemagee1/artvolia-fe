import { JSX } from 'react';
import './logout.css';
import { NavLink } from 'react-router-dom';

export default function Logout(): JSX.Element {
  return (
    <NavLink to={"public/login"}><h1>Log out</h1></NavLink>
  )
}