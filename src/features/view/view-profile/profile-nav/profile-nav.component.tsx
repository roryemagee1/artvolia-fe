import { JSX } from 'react';
import './profile-nav.css';

export default function ProfileNav(): JSX.Element {
  return (
    <nav className="profile-nav">
      <h1>About</h1>
      <h1>Albums</h1>
      <h1>Friends</h1>
      <h1>More</h1>
    </nav>
  )
}