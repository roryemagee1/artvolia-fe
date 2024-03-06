import { JSX } from 'react';
import './view-posted.css'
import butterfly from '@src/assets/butterfly.png';

export default function ViewPosted(): JSX.Element {
  return (
    <div className="view-posted">
      <div className="easel">
        <img src={butterfly} alt="butterfly"/>
      </div>
    </div>
  )
}