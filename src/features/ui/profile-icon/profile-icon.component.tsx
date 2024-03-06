import { JSX } from 'react';
import './profile-icon.css';
import { NavLink } from 'react-router-dom';

import { ProfileIconProps } from '@src/types/interfaces.ts';

// interface ProfileIconProps {
//   userID: number;
//   profileImgSrc: string;
//   profileImgAlt: string;
// }

export default function ProfileIcon({ userID, profileImgSrc, profileImgAlt }: ProfileIconProps): JSX.Element {
  return (
    <div className="profile-icon">
      <NavLink to="./profile">
        <img src="" alt="Profile" />
      </NavLink>
    </div>
  )
}