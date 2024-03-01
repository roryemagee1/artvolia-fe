import { JSX } from 'react';
import './login.css'
import { Outlet } from 'react-router-dom';

import LoginHeader from '@src/features/login/login-header/login-header.component.tsx';
import Page from '@src/features/ui/page/page.component.tsx';

export default function Login() {
  return (
    <>
      <LoginHeader />
      <Page>
        <section className="login" >
          <Outlet />
        </section>
      </Page>
    </>
  )
}