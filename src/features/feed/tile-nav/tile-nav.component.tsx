import { JSX } from 'react';
import './tile-nav.css';

import Button from '@src/features/ui/button/button.component.tsx';

export default function TileNav(): JSX.Element {
  return (
    <nav className="tile-nav">
      <Button><h2>Like</h2></Button>
      <Button><h2>Comment</h2></Button>
      <Button><h2>Save</h2></Button>
    </nav>
  )
}