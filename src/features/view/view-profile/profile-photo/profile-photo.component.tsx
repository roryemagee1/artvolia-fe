import { JSX } from 'react';
import './profile-photo.css';

export default function ProfilePhoto(): JSX.Element {
  return (
    <div className="profile-photo">
      <p>FirstName LastName</p>
      <div>
        <img src="" alt="No image" width="300px" />
      </div>
    </div>
  )
}