import { JSX } from 'react';
import './profile-icon.css';

interface ProfileIconProps {
  userID: number;
  imgSrc: string;
  imgAlt: string;
}

export default function ProfileIcon({ userID, imgSrc, imgAlt }: ProfileIconProps): JSX.Element {
  return (
    <div className="profile-icon">
      <img src="" alt="Profile" />
    </div>
  )
}