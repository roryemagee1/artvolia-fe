import { JSX } from 'react';
import './comments.css'

import CommentBox from '@src/features/comment/comment-box/comment-box.component.tsx';

export default function Comments(): JSX.Element {
  const TESTARRAY: number[] = Array(8)
  for (let i: number = 0; i < TESTARRAY.length; i++) { TESTARRAY[i] = i}
  const outputArray: JSX.Element[] = TESTARRAY.map((tile: number): JSX.Element => {
      return (
        <CommentBox 
          key={tile}
          userID={1}
          postID={1}
          commentID={1}
          likes={12}
          commentText="This is a comment."
          profileImgSrc=""
          profileImgAlt="No Picture"
          commentReplies={[]}
        />
      )
    }
  )

  if (outputArray.length === 0) {
    return (
      <section className="comments">
        <div className="feed--page-gap"/>
        <h1>No Comments.</h1>
      </section>
    )
  }
  
  return (
    <section className="comments">
      <ol>
        {outputArray}
      </ol>
    </section>
  )

}