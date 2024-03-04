import { JSX, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './tile-nav.css';

import Button from '@src/features/ui/button/button.component.tsx';

interface TileNavProps {
  likes: number;
  userID: number;
  postID: number;
}

export default function TileNav({ likes, userID, postID }: TileNavProps): JSX.Element {
  const navigate = useNavigate();
  
  return (
    <nav className="tile-nav">
      <Button><h2>Like {likes}</h2></Button>
        <Button onClick={() => navigate(`/posted/${userID}/${postID}`)}><h2>Comment</h2></Button>
      <Button><h2>Save</h2></Button>
    </nav>
  )
}