import { JSX } from 'react';
import './post-box.css';

import ProfileIcon from '@src/features/ui/profile-icon/profile-icon.component.tsx';

export default function PostBox(): JSX.Element {
  return (
    <section className="post-box">
      <ProfileIcon 
        userID={1}
        profileImgSrc=""
        profileImgAlt="No Photo"
      />
      <form>
        <input type="textbox" placeholder="Ready to post?"/>
        <button>Submit</button>
      </form>
    </section>
  )
}