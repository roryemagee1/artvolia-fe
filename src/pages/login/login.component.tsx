// import React from 'react';
import './login.css'

import LoginHeader from '@src/features/login/login-header/login-header.component.tsx';
import Page from '@src/features/ui/page/page.component';

import LoginForm from '@src/features/login/login-form/login-form.component.tsx';

export default function Login() {
  return (
    <>
      <LoginHeader />
      <Page>
        <section className="login" >
          <LoginForm />
        </section>
      </Page>
    </>
  )
}