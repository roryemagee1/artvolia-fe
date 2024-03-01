import { JSX } from 'react';
import './sign-up-form.css'

// import Button from '@src/features/ui/button/button.component.tsx';

export default function SignUpForm(): JSX.Element {
  return (
    <section className="sign-up-form">
      <p>Login</p>
      <form>
        <input placeholder="First name"/>
        <input placeholder="Last name"/>
        <input placeholder="Email"/>
        <input placeholder="Password"/>
        <input placeholder="Birthday"/>
        <input placeholder="Gender"/>
        <input type="submit" value="Sign-up" />
      </form>
      {/* <Button>Login</Button>
      <Button>Sign-up</Button> */}
    </section>
  )
}