import { JSX } from 'react';

import './museum-background.css' // Use a conditional import here in the future for alternate backgrounds.

interface BackgroundProps {
  children: JSX.Element
}
export default function Background({ children }: BackgroundProps): JSX.Element {
  return (
    <div className="background" >
      { children }
    </div>
  )
}