import { JSX } from 'react';
import './feed.css';

import FeedTile from '@src/features/feed/feed-tile/feed-tile.component.tsx';

export default function Feed(): JSX.Element {
  const TESTARRAY: number[] = Array(64)
  for (let i: number = 0; i < TESTARRAY.length; i++) { TESTARRAY[i] = i}
  const outputArray: JSX.Element[] = TESTARRAY.map((tile: number): JSX.Element => {
      return (
        <FeedTile 
          key={tile}
          /*
          Data Needed:
          userID
          postID
          imgSrc
          imgAlt
          postText
          likes
          */
        />
      )
    }
  )

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