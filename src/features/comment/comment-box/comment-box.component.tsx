import { JSX } from 'react';
import './comment-box.css';

import ProfileIcon from '@src/features/ui/profile-icon/profile-icon.component.tsx';
import CommentActions from '@src/features/comment/comment-actions/comment-actions.component.tsx';

interface CommentBoxProps {
  key: number;
  userID: number;
  postID: number;
  commentID: number;
  likes: number;
  profileImgSrc: string;
  profileImgAlt: string;
  commentText: string;
  commentReplies: [];
}

export default function CommentBox({ userID, /* postID, commentID,*/ likes, profileImgSrc, profileImgAlt, commentText, commentReplies }: CommentBoxProps): JSX.Element {
  return (
      <li className="comment-box">
        <ProfileIcon 
          userID={userID}
          profileImgSrc={profileImgSrc}
          profileImgAlt={profileImgAlt}
        />
        <div>
            <p>{commentText}</p>
        </div>
        <CommentActions 
          // postID={postID}
          // commentID={commentID}
          likes={likes}
          commentReplies={commentReplies}
        />
      </li>
     
  )
}