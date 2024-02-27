// import React from 'react';
import './main.css';

interface ButtonProps {
  children: JSX.Element;
}
export default function Footer({ children }: ButtonProps) {
  return (
    <main>
      {children}
    </main>
    
  )
}