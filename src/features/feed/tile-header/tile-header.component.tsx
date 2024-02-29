import { JSX } from 'react';
import './tile-header.css';

import Button from '@src/features/ui/button/button.component.tsx';

export default function TileHeader(): JSX.Element {
  return (
    <header className="tile-header">
      <Button><h2>Profile</h2></Button>
      <h3>Public</h3>
    </header>
  )
}