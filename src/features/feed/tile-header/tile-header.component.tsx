import { JSX } from 'react';
import './tile-header.css';

import ProfileIcon from '@src/features/ui/profile-icon/profile-icon.component.tsx';

export default function TileHeader({ userID=1, profileImgSrc="", profileImgAlt="No Image"}): JSX.Element {
  return (
    <header className="tile-header">
      <ProfileIcon 
        userID={userID}
        profileImgSrc={profileImgSrc}
        profileImgAlt={profileImgAlt}
      />
      <h3>Public</h3>
    </header>
  )
}