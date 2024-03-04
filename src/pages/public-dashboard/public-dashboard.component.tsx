import { JSX } from 'react';
import './public-dashboard.css'

import PublicHeader from '@src/features/ui/public-header/public-header.component.tsx';
import Page from '@src/features/ui/page/page.component';
import Footer from '@src/features/ui/footer/footer.component.tsx';
import Feed from '@src/features/feed/feed/feed.component.tsx';

export default function PublicDashboard(): JSX.Element {
  return (
    <>
      <PublicHeader />
      <Page>
        <div className="public-dashboard">
          <h1>Post/Search/Filter Component</h1>
          <Feed />
        </div>
      </Page>
      <Footer />
    </>
  )
}