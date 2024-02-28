import { JSX } from 'react';
import './feed.css';

import FeedTile from '@src/features/feed/feed-tile/feed-tile.component.tsx';

export default function Feed(): JSX.Element {
  // const testArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const testArray: (any)[] = Array(64)
  for (let i: number = 0; i < testArray.length; i++) { testArray[i] = i}
  console.log(testArray);
  const outputArray: JSX.Element[] = testArray.map((tile => <FeedTile key={tile}/>))
  
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