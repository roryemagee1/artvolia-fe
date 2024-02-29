// import React from 'react';
import './page.css';

interface ButtonProps {
  children: JSX.Element;
}
export default function Page({ children }: ButtonProps) {
  return (
    <main>
      {children}
    </main>
    
  )
}