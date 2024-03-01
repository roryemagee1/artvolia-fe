import { JSX } from 'react';
import './login-form.css'

import Button from '@src/features/ui/button/button.component.tsx';

export default function LoginForm(): JSX.Element {
  return (
    <section className="login-form">
      <p>Login</p>
      <form>
        <input placeholder="username"/>
        <input placeholder="password"/>
        <input type="submit" />
      </form>
      <Button>Forgot Password?</Button>
      <Button>Sign-up</Button>
    </section>
  )
}