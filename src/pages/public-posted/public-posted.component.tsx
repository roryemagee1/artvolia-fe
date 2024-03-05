import { JSX } from 'react';
import './public-posted.css'

import PublicHeader from '@src/features/ui/public-header/public-header.component.tsx';
import Page from '@src/features/ui/page/page.component.tsx';
import Footer from '@src/features/ui/footer/footer.component.tsx';

import Background from '@src/features/ui/background/background.component.tsx';
import ViewPosted from '@src/features/view/view-posted/view-posted.component'
import Comments from '@src/features/comment/comments/comments.component.tsx';

export default function Posted(): JSX.Element {
  return (
    <>
      <PublicHeader />
      <Page>
        <section className="public-posted">
          <Background>
            <ViewPosted />
          </Background>
          <Comments />
        </section>
      </Page>
      <Footer />
    </>
  )
}