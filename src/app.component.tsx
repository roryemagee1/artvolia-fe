import { JSX } from 'react';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '@src/pages/dashboard/dashboard.component.tsx';
import Posted from '@src/pages/posted/posted.component.tsx';

import Settings from '@src/pages/settings/settings.component.tsx';
import Login from '@src/pages/login/login.component.tsx';
import LoginForm from '@src/features/login/login-form/login-form.component.tsx';
import SignUpForm from '@src/features/login/sign-up-form/sign-up-form.component.tsx';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/posted/:uid/:pid" element={<Posted />}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/login" element={<Login />}>
          <Route index element={<LoginForm />} />
          <Route path="/login/sign-up"element={<SignUpForm />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
