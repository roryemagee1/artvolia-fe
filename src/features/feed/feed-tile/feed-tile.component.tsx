import { JSX } from 'react';
import './feed-tile.css';
import butterfly from '@src/assets/butterfly.png';

export default function FeedTile(): JSX.Element {
  return (
    <div className="feed-tile">
      <img src={butterfly} alt="butterfly" height="200 px"/>
    </div>
  )
}