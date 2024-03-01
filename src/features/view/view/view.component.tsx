import { JSX } from 'react';
import './view.css'

import ViewArea from '@src/features/view/view-area/view-area.component'

export default function View(): JSX.Element {
  return (
    <section className="view">
      <ViewArea />
    </section>
  )
}