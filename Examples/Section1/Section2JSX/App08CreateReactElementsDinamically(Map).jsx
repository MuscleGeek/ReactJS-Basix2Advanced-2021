import './App.css';
import React from 'react';

function App() {
 
  const styles = {    //estilo a los divs
    margin: '16px',
    padding: '16px',
    boxSizing:'border-box',
    borderRadius: '5px',
    boxShadow: '0 2px 5px orange'
  }

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

    }
  ]

  const blogCards = blogArray.map((item, pos) => {
    
    console.table(item);

    return (
    <div style={styles} className="BlogCard" key={item.id}>  
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
    
  )
  })

  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
