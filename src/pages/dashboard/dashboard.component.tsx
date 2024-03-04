import { JSX } from 'react';
import './dashboard.css'

import Feed from '@src/features/feed/feed/feed.component.tsx';
import FeedSearch from '@src/features/feed/feed-search/feed-search.component.tsx';

export default function Dashboard(): JSX.Element {
  return (
    <section className="dashboard">
      <FeedSearch />
      <Feed />
    </section>
  )
}