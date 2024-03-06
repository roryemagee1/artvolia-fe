import { JSX } from 'react';
import './public-layout.css';
import { Outlet } from 'react-router-dom';

import PublicHeader from '@src/features/ui/public-header/public-header.component.tsx';
import Page from '@src/features/ui/page/page.component';
import Footer from '@src/features/ui/footer/footer.component.tsx';

export default function PublicLayout(): JSX.Element {
  return (
    <>
      <PublicHeader />
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </>
  )
}