import { JSX } from 'react';
import './profile-info.css';

export default function ProfileInfo(): JSX.Element {
  const loremIpsum: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget est non turpis facilisis tincidunt ac eget nisi. Suspendisse sagittis viverra lorem vel blandit. Maecenas placerat vel mauris ac dictum. Quisque erat nisi, luctus ac elementum a, pellentesque eu massa. Sed a est id nisl condimentum molestie. Etiam velit est, consectetur vitae enim eget, facilisis accumsan tellus. Suspendisse non purus eu ante auctor sagittis in et est. Fusce mollis magna at diam eleifend, quis mattis nisl fermentum."
  
  return (
    <div className="profile-info">
      <h1>Information Title</h1>
      <p>{loremIpsum}</p>
    </div>
  )
}