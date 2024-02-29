import { JSX } from 'react';
import './settings.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SettingsArea from '@src/features/set-settings/settings-area/settings-area.component.tsx';
import SettingsMenu from '@src/features/set-settings/settings-menu/settings-menu.component.tsx';

export default function Settings(): JSX.Element {
  return (
    <section className="settings">
      <SettingsMenu />
      <SettingsArea />
    </section>
  )
}