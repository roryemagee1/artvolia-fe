import { JSX } from 'react';
import './dashboard.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Feed from '@src/features/feed/feed/feed.component.tsx';

export default function Dashboard(): JSX.Element {
  return (
    <div className="dashboard">
      <h1>Post/Search/Filter Component</h1>
      <Feed />
    </div>
  )
}