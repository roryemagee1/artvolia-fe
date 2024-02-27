import { JSX } from 'react';
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@src/features/ui/header/header.component.tsx';
import Main from '@src/features/ui/main/main.component.tsx';
import Footer from '@src/features/ui/footer/footer.component.tsx';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<h1>Dashboard</h1>}/>
          <Route path="/posts" element={<h1>Posts</h1>}/>
          <Route path="/profile" element={<h1>Profile</h1>}/>
          <Route path="/settings" element={<h1>Settings</h1>}/>
          <Route path="/login" element={<h1>Login</h1>}/>
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
