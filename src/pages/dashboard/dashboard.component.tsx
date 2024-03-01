import { JSX } from 'react';
import './dashboard.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@src/features/ui/header/header.component.tsx';
import Page from '@src/features/ui/page/page.component';
import Footer from '@src/features/ui/footer/footer.component.tsx';
import Feed from '@src/features/feed/feed/feed.component.tsx';

export default function Dashboard(): JSX.Element {
  return (
    <>
      <Header />
      <Page>
        <div className="dashboard">
          <h1>Post/Search/Filter Component</h1>
          <Feed />
        </div>
      </Page>
      <Footer />
    </>
  )
}