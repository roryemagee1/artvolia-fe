import { JSX } from 'react';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '@src/pages/dashboard/dashboard.component.tsx';
import Posted from '@src/pages/posted/posted.component.tsx';

import Settings from '@src/pages/settings/settings.component.tsx';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/posted/:uid/:pid" element={<Posted />}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/sign-up" element={<h1>Sign-up</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}
