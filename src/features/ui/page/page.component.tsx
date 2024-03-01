// import React from 'react';
import './page.css';

interface PageProps {
  children: JSX.Element;
}
export default function Page({ children }: PageProps) {
  return (
    <main>
      {children}
    </main>
    
  )
}