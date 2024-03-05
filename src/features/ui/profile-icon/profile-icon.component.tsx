import { JSX } from 'react';
import './profile-icon.css';

interface ProfileIconProps {
  userID: number;
  profileImgSrc: string;
  profileImgAlt: string;
}

export default function ProfileIcon({ userID, profileImgSrc, profileImgAlt }: ProfileIconProps): JSX.Element {
  return (
    <div className="profile-icon">
      <img src="" alt="Profile" />
    </div>
  )
}