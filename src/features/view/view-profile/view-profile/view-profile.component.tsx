import { JSX } from 'react';
import './view-profile.css';

import ProfilePhoto from '@src/features/view/view-profile/profile-photo/profile-photo.component.tsx';
import ProfileInfo from '@src/features/view/view-profile/profile-info/profile-info.component.tsx';
import ProfileNav from '@src/features/view/view-profile/profile-nav/profile-nav.component.tsx';

export default function ViewProfile(): JSX.Element {
  return (
    <section className="view-profile">
      <ProfilePhoto />
      <div className="view-profile--information">
        <ProfileInfo />
        <ProfileNav />
      </div>
    </section>
  )
}