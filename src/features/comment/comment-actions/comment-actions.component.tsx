import { JSX } from 'react';
import './comment-actions.css';

interface CommentActionsProps {
  // postID: number;
  // commentID: number;
  likes: number;
  commentReplies: [];
}

export default function CommentActions({ /*postID, commentID,*/ likes, commentReplies }: CommentActionsProps): JSX.Element {
  return (
    <div className="comment-actions">
      <h3>Likes {likes}</h3>
      <button>Reply</button>
      {commentReplies.length > 0 && commentReplies}
    </div>
  )
}