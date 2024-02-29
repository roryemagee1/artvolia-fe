import { JSX } from 'react';
import './view.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ViewBox from '@src/features/view/view-box/view-box.component'

export default function View(): JSX.Element {
  return (
    <section className="view">
      <ViewBox />
    </section>
  )
}