import { JSX } from 'react';
import './dashboard.css'

import Feed from '@src/features/feed/feed/feed.component.tsx';

export default function Dashboard(): JSX.Element {
  return (
    <section className="dashboard">
      <h1>Post/Search/Filter Component</h1>
      <Feed />
    </section>
  )
}