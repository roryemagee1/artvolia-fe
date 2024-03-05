import { JSX } from 'react';
import './login-form.css'
import { NavLink } from 'react-router-dom';

import Button from '@src/features/ui/button/button.component.tsx';

export default function LoginForm(): JSX.Element {
  return (
    <section className="login-form">
      <p>Login</p>
      <form>
        <input placeholder="username"/>
        <input placeholder="password"/>
        <input type="submit" />
        <NavLink to="/">
          <h1>Temporary Login</h1>
        </NavLink>
      </form>
      <Button>Forgot Password?</Button>
      <Button>Sign-up</Button>
    </section>
  )
}