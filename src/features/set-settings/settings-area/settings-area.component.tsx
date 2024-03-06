import { JSX } from 'react';
import './settings-area.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import ViewBox from '@src/features/view/view-box/view-box.component'

export default function SettingsArea(): JSX.Element {
  return (
    <section className="settings-area">
      <h3>Option</h3>
      <input placeholder="test input"/>
      <h3>Option</h3>
      <input placeholder="test input"/>
      <h3>Option</h3>
      <input placeholder="test input"/>
    </section>
  )
}