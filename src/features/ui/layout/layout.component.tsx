import { JSX } from 'react';
import './layout.css';
import { Outlet } from 'react-router-dom';

import Header from '@src/features/ui/header/header.component.tsx';
import Page from '@src/features/ui/page/page.component';
import Footer from '@src/features/ui/footer/footer.component.tsx';

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </>
  )
}