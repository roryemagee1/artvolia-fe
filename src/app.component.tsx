import { JSX } from 'react';
import './app.css'

import Header from '@src/features/ui/header/header.component.tsx';

function App(): JSX.Element {
  return (
    <>
      <h1>Test</h1>
      <Header />
      <h1>Artvolia</h1>
    </>
  )
}

export default App
