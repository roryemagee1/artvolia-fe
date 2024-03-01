// import React from 'react';
import './login.css'

import LoginHeader from '@src/features/login/login-header/login-header.component.tsx';
import Page from '@src/features/ui/page/page.component';

export default function Login() {
  return (
    <>
      <LoginHeader />
      <Page>
        <section className="login" >
          <h1>LoginTitle</h1>
          <h1>LoginForm</h1>
        </section>
      </Page>
    </>
  )
}