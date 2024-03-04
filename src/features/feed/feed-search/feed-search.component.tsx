import { JSX } from 'react';
import './feed-search.css'

// import Button from '@src/features/ui/button/button.component.tsx';

export default function FeedSearch(): JSX.Element {
  const styleTest: boolean = true;
  
  return (
    <section className="feed-search">
      <div>
        <form>
          <input className="search" type="search"/>
          <button>Search</button>
          <button>Add Filter</button>
        </form>
        <div>
          {
            styleTest &&
            <>
              <h2>Filter 1</h2>
              <h2>Filter 2</h2>
              <h2>Filter 3</h2>
            </>
          }
        </div>
      </div>
    </section>
  )
}
