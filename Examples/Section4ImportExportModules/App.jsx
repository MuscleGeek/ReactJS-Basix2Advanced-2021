import './App.css';
import React from 'react';
import {BlogCard} from './BlogCard.jsx';
import {isArrayEmpty as checkEmpty} from './Utils';

function App() {
 
  const blogArray = [
  
    {
      id:1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem'

    },
    {
      id:2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem'

    },
    {
      id:3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem'

    },
    {
      id:4,
      title: 'Blog Title 4',
      description: 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem'

    }
  ]

  const blogCards = checkEmpty(blogArray) ? [] : blogArray.map((item, pos) => {
   console.table(item);

    return (
      <BlogCard className={'Blog'} title={item.title} description={item.description} key={pos} id={item.id}/>
    
    )
  })

  return (
    <div className="App">
      {blogCards}
      
    </div>
  );
}

export default App;
