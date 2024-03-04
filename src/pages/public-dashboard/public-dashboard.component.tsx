import { JSX } from 'react';
import './public-dashboard.css'

import Feed from '@src/features/feed/feed/feed.component.tsx';

export default function PublicDashboard(): JSX.Element {
  return (
    <section className="public-dashboard">
      <h1>Post/Search/Filter Component</h1>
      <Feed />
    </section>
  )
}