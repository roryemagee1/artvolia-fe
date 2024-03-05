import { JSX } from 'react';
import './logout.css';
import { NavLink } from 'react-router-dom';

export default function Logout(): JSX.Element {
  return (
    <NavLink to={"./login"}><h1>Artvolia</h1></NavLink>
  )
}