import { JSX } from 'react';
import './artvolia-nav-title.css';
import { NavLink } from 'react-router-dom';

export default function ArtvoliaNavTitle(): JSX.Element {
  return (
    <NavLink to={"./"}><h1>Artvolia</h1></NavLink>
  )
}