import { JSX } from 'react';
import './app.css'

import Header from '@src/features/ui/header/header.component.tsx';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <h1>Artvolia Page</h1>
    </>
  )
}

export default App
