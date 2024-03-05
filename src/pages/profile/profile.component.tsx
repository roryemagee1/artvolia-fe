import { JSX } from 'react';
import './profile.css';

import ViewProfile from '@src/features/view/view-profile/view-profile/view-profile.component.tsx';
import Feed from '@src/features/feed/feed/feed.component.tsx';

export default function Profile(): JSX.Element {
  return (
    <section className="profile">
      <ViewProfile />
      <Feed />
    </section>
  )
}