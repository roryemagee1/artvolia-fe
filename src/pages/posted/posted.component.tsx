import { JSX } from 'react';
import './posted.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import View from '@src/features/view/view/view.component.tsx';
import Comments from '@src/features/comment/comments/comments.component.tsx';

export default function Posted(): JSX.Element {
  return (
    <section className="posted">
      <View />
      <Comments />
    </section>
  )
}