import { JSX } from 'react';
import './feed.css';

import FeedTile from '@src/features/feed/feed-tile/feed-tile.component.tsx';

export default function Feed(): JSX.Element {
  const testArray: number[] = Array(0)
  for (let i: number = 0; i < testArray.length; i++) { testArray[i] = i}
  const outputArray: JSX.Element[] = testArray.map((tile: number): JSX.Element => <FeedTile key={tile}/>)
  console.log(outputArray);

  if (outputArray.length === 0) {
    return (
      <section className="feed">
        <div className="feed--page-gap"/>
        <h1>No Posts Found.</h1>
      </section>
    )
  }
  
  return (
    <section className="feed">
      <div className="feed--page-gap"/>
      <ul className="feed--tile-grid">
          {outputArray}
      </ul>
      <div className="feed--page-gap"/>
    </section>
  )
}