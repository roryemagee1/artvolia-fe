import { JSX } from 'react';
import './comment-box.css';

import ProfileIcon from '@src/features/ui/profile-icon/profile-icon.component.tsx';
import CommentActions from '@src/features/comment/comment-actions/comment-actions.component.tsx';

interface CommentBoxProps {
  key: number;
  userID: number;
  postID: number;
  commentID: number;
  imgSrc: string;
  imgAlt: string;
  likes: number;
  commentText: string;
  commentReplies: [];
}

export default function CommentBox({ userID, postID, commentID, imgSrc, imgAlt, likes, commentText, commentReplies }: CommentBoxProps): JSX.Element {
  return (
      <li className="comment-box">
        <ProfileIcon 
          userID={userID}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
        />
        <div>
            <p>{commentText}</p>
        </div>
        <CommentActions 
          postID={postID}
          commentID={commentID}
          likes={likes}
          commentReplies={commentReplies}
        />
      </li>
     
  )
}