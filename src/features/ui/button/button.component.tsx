import { JSX } from 'react';
import './button.css';

interface ButtonProps {
  children: JSX.Element;
}
export default function Button({ children }: ButtonProps) {
  return (
    <button>
      {children}
    </button>
  )
}