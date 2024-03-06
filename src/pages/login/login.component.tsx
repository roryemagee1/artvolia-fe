import { JSX } from 'react';
import './login.css'
import { Outlet } from 'react-router-dom';

import Background from '@src/features/ui/background/background.component.tsx';

export default function Login(): JSX.Element {
  return (
    <Background>
      <section className="login" >
        <Outlet />
      </section>
    </Background>
  )
}