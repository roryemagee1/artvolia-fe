import { JSX } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './public-header.css';

import ArtvoliaNavTitle from '@src/features/ui/artvolia-nav-title/artvolia-nav-title.component.tsx';
import Button from "@src/features/ui/button/button.component.tsx"
export default function PublicHeader(): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header className="page-header">
      <nav className="header-nav">
        <ArtvoliaNavTitle />
        { 
          pathname==="/public/login" ? 
          <Button onClick={() => navigate(`/public`)}><h1>View Public Posts</h1></Button> : 
          <Button onClick={() => navigate(`/public/login`)}><h1>Login</h1></Button>
        }
      </nav>
    </header>
  )
}