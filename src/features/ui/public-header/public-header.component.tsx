import { JSX } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './public-header.css';

import Button from "@src/features/ui/button/button.component.tsx"
export default function PublicHeader(): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <header className="page-header">
      <nav className="header-nav">
        <Button><h1>Artvolia</h1></Button>
        { 
          pathname==="/login" ? 
          <Button onClick={() => navigate(`/`)}><h1>View Public Posts</h1></Button> : 
          <Button onClick={() => navigate(`/login`)}><h1>Login</h1></Button>
        }
      </nav>
    </header>
  )
}