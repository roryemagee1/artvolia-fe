import { JSX , MouseEvent} from 'react';
import './button.css';

interface ButtonProps {
  children: (JSX.Element | string);
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}