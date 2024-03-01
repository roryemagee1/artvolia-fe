import { JSX } from 'react';
import './view-area.css'
import butterfly from '@src/assets/butterfly.png';

export default function ViewArea(): JSX.Element {
  return (
    <div className="view-area">
      <div className="easel">
        <img src={butterfly} alt="butterfly"/>
      </div>
    </div>
  )
}