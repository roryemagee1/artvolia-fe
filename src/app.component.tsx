import { JSX } from 'react';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Authenticate from '@src/features/authenticate/authenticate.component';

import Layout from '@src/features/ui/layout/layout.component';

import Dashboard from '@src/pages/dashboard/dashboard.component';
import Posted from '@src/pages/posted/posted.component';
import Profile from '@src/pages/profile/profile.component';
import Settings from '@src/pages/settings/settings.component';

import PublicLayout from '@src/features/ui/public-layout/public-layout.component';

import PublicDashboard from '@src/pages/public-dashboard/public-dashboard.component';
import PublicPosted from '@src/pages/public-posted/public-posted.component';
import Login from '@src/pages/login/login.component';
import LoginForm from '@src/features/login/login-form/login-form.component';
import SignUpForm from '@src/features/login/sign-up-form/sign-up-form.component';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Authenticate />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="posted/:uid/:pid" element={<Posted />} />
            <Route path="profile" element={<Profile />}/>
            <Route path="settings" element={<Settings />} />
            <Route path="public/login" element={<Login />} />
          </Route>
        </Route>
        
        <Route path="/public" element={<PublicLayout />}>
          <Route index element={<PublicDashboard />} />
          <Route path="posted/:uid/:pid" element={<PublicPosted />} />
          <Route path="profile" element={<Profile />}/>
          <Route path="login" element={<Login />}>
            <Route index element={<LoginForm />} />
            <Route path="sign-up"element={<SignUpForm />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
