import './App.css';
import React from 'react';

function App() {
 
  const blogObject = {
    title: 'Blog Title 1',
    description: 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem'

  }
  const styles = {    //estilo a los divs
    margin: '16px',
    padding: '16px',
    boxSizing:'border-box',
    borderRadius: '5px',
    boxShadow: '0 2px 5px orange'
  }

  return (
    <div className="App">
    <div style={styles}>  
      <h3>{blogObject.title}</h3>
      <p>{blogObject.description}</p>
      
    </div>
    <hr/>
    <div className="BlogCard">
      <h3>{blogObject.title}</h3>
      <p>{blogObject.description}</p>
    </div>
    <hr/>
    <div className="BlogCard">
      <h3>{blogObject.title}</h3>
      <p>{blogObject.description}</p>
    </div>
    <hr/>
    </div>
  );
}

export default App;
