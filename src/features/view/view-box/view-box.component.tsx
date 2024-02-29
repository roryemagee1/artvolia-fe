import { JSX } from 'react';
import './view-box.css'
import butterfly from '@src/assets/butterfly.png';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function ViewBox(): JSX.Element {
  return (
    <div className="view-box">
      <div className="easel">
        <img src={butterfly} alt="butterfly"/>
      </div>
    </div>
  )
}