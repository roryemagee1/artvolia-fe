import { JSX } from 'react';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@src/features/ui/header/header.component.tsx';
import Page from '@src/features/ui/page/page.component';
import Footer from '@src/features/ui/footer/footer.component.tsx';

import Dashboard from '@src/pages/dashboard/dashboard.component.tsx';
import Posted from '@src/pages/posted/posted.component.tsx';

import Settings from '@src/pages/settings/settings.component.tsx';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/posted/:uid/:pid" element={<Posted />}/>
          <Route path="/profile" element={<h1>Profile</h1>}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/login" element={<h1>Login</h1>}/>
        </Routes>
      </Page>
      <Footer />
    </BrowserRouter>
  )
}
