import { JSX, CSSProperties } from 'react';
import { NavLink} from 'react-router-dom';
import './feed-tile.css';

import TileNav from '@src/features/feed/tile-nav/tile-nav.component.tsx';
import TileHeader from '@src/features/feed/tile-header/tile-header.component.tsx';

interface FeedTileProps {
  key: number;
  userID: number;
  postID: number;
  imgSrc: string;
  imgAlt: string;
  height: (number | null);
  postText: string;
  likes: number;
}

export default function FeedTile({ userID, postID, imgSrc, imgAlt, height, postText, likes }: FeedTileProps): JSX.Element {
  const style: CSSProperties = {
    height: `${height}px`,
  }
  console.log(height)
  
  
  return (
    
      <li className="feed-tile">
        <div>
          <TileHeader />
          <NavLink to={`/posted/${userID}/${postID}`}>
            <img src={imgSrc} alt={imgAlt} style={style?.height ? style : undefined}/>
            <p>{postText}</p>
          </NavLink>
          <TileNav likes={likes} userID={userID} postID={postID}/>
        </div>
      </li>
     
  )
}