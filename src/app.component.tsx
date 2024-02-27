import { JSX } from 'react';
import './app.css'

import Header from '@src/features/ui/header/header.component.tsx';
import Footer from '@src/features/ui/footer/footer.component.tsx';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <h1>Artvolia Page</h1>
      <Footer />
    </>
  )
}

export default App
