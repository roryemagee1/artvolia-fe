// import React from 'react';
import './header.css';

import Button from "@src/features/ui/button/button.component.tsx"
export default function Header() {
  return (
    <nav>
      <h1>Artvolia</h1>
      <div>
        <Button><h1>AUTH</h1></Button>
        <Button><h1>Notifications</h1></Button>
        <Button><h1>Settings</h1></Button>
      </div>
    </nav>
    
  )
}