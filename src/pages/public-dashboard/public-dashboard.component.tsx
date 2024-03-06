import { JSX } from 'react';
import './public-dashboard.css'

import Feed from '@src/features/feed/feed/feed.component.tsx';
import FeedSearch from '@src/features/feed/feed-search/feed-search.component.tsx';

export default function PublicDashboard(): JSX.Element {
  return (
    <section className="public-dashboard">
      <FeedSearch />
      <Feed />
    </section>
  )
}