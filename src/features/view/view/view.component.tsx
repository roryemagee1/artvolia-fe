import { JSX } from 'react';
import './view.css'
import butterfly from '@src/assets/butterfly.png';

export default function View(): JSX.Element {
  return (
    <div className="view">
      <div className="easel">
        <img src={butterfly} alt="butterfly"/>
      </div>
    </div>
  )
}