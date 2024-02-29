import { JSX } from 'react';
import './feed-tile.css';
import butterfly from '@src/assets/butterfly.png';

import TileNav from '@src/features/feed/tile-nav/tile-nav.component.tsx';
import TileHeader from '@src/features/feed/tile-header/tile-header.component.tsx';

export default function FeedTile(): JSX.Element {
  return (
    <li className="feed-tile">
      <div>
        <TileHeader />
        <img src={butterfly} alt="butterfly"/>
        <p>This is my favorite picture of a butterfly!</p>
        <TileNav />
      </div>
    </li>
  )
}