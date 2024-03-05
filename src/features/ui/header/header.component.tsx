import { JSX } from 'react';
import './header.css';

import ArtvoliaNavTitle from '@src/features/ui/artvolia-nav-title/artvolia-nav-title.component.tsx';
import Logout from '@src/features/ui/logout/logout.component.tsx'
import Button from '@src/features/ui/button/button.component.tsx'
export default function Header(): JSX.Element {
  return (
    <header className="page-header">
      <nav className="header-nav">
        <ArtvoliaNavTitle />
        <div>
          <Logout />
          <Button><h1>Notifications</h1></Button>
          <Button><h1>Settings</h1></Button>
        </div>
      </nav>
    </header>
  )
}