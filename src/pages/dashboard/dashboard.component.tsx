import { JSX } from 'react';
import './dashboard.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Feed from "@src/features/feed/feed/feed.component.tsx";

function Dashboard(): JSX.Element {
  return (
    <>
      <Feed />
    </>
  )
}

export default Dashboard;