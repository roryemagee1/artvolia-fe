import { JSX } from 'react';
import './feed.css';

import FeedTile from '@src/features/feed/feed-tile/feed-tile.component.tsx';

export default function Feed(): JSX.Element {
  const testArray: number[] = Array(64)
  for (let i: number = 0; i < testArray.length; i++) { testArray[i] = i}
  console.log(testArray);
  const outputArray: JSX.Element[] = testArray.map((tile: number): JSX.Element => <FeedTile key={tile}/>)
  
  return (
    <section>
      <h1>Post/Filter/Search</h1>
      <ul className="tile-grid">
          {outputArray}
      </ul>
      <div className="footer-gap"/>
    </section>
  )
}