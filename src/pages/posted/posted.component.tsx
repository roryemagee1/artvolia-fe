import { JSX } from 'react';
import './posted.css'

import Background from '@src/features/ui/background/background.component.tsx';
import ViewPosted from '@src/features/view/view-posted/view-posted.component'
import Comments from '@src/features/comment/comments/comments.component.tsx';

export default function Posted(): JSX.Element {
  return (
    <section className="posted">
      <Background>
        <ViewPosted />
      </Background>
      <Comments />
    </section>
  )
}