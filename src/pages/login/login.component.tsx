import { JSX } from 'react';
import './login.css'
import { Outlet } from 'react-router-dom';

import LoginHeader from '@src/features/login/login-header/login-header.component.tsx';
import Page from '@src/features/ui/page/page.component.tsx';

import Background from '@src/features/ui/background/background.component.tsx';

export default function Login(): JSX.Element {
  return (
    <>
      <LoginHeader />
      <Page>
        <Background>
          <section className="login" >
            <Outlet />
          </section>
        </Background>
      </Page>
    </>
  )
}