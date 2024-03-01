import { JSX } from 'react';
import './settings.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@src/features/ui/header/header.component.tsx';
import Page from '@src/features/ui/page/page.component';
import Footer from '@src/features/ui/footer/footer.component.tsx';

import SettingsArea from '@src/features/set-settings/settings-area/settings-area.component.tsx';
import SettingsMenu from '@src/features/set-settings/settings-menu/settings-menu.component.tsx';

export default function Settings(): JSX.Element {
  return (
    <>
      <Header />
      <Page>
        <section className="settings">
          <SettingsMenu />
          <SettingsArea />
        </section>
      </Page>
      <Footer />
    </>
  )
}