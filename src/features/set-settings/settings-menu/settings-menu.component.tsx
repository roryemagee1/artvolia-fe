import { JSX } from 'react';
import './settings-menu.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function SettingsMenu(): JSX.Element {
  return (
    <section className="settings-menu">
      <h2>User</h2>
      <h2>Privacy</h2>
      <h2>Messaging</h2>
      <h2>Notifications</h2>
      <h2>Delete</h2>
    </section>
  )
}