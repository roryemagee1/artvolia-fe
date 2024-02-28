import { JSX } from 'react';
import './feed-tile.css';
import butterfly from '@src/assets/butterfly.png';

import TileNav from '@src/features/feed/tile-nav/tile-nav.component.tsx';

export default function FeedTile(): JSX.Element {
  return (
    <div className="feed-tile">
      <img src={butterfly} alt="butterfly" height="200 px"/>
      <TileNav />
    </div>
  )
}