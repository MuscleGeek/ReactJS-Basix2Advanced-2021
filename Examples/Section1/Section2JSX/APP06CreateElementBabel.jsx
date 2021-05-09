import './App.css';
import React from 'react';

function App() {

  const blogObject = {
    title: 'Blog Title 1',
    description: 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem'

  }
  return (

    React.createElement("div", {
      className: "App"
    }, React.createElement("div", null, React.createElement("h3", null, blogObject.title), 
        React.createElement("p", null, blogObject.description)), 
        React.createElement("hr", null), 
       React.createElement("div", null, React.createElement("h3", null, blogObject.title), 
        React.createElement("p", null, blogObject.description)), 
        React.createElement("hr", null), 
       React.createElement("div", null, React.createElement("h3", null, blogObject.title), 
        React.createElement("p", null, blogObject.description)), 
        React.createElement("hr", null))
  );
}

export default App;

/*Resultado de antes de usar babel*/
{/* <div className="App">
      <h3>{blogObject.title}</h3>
      <p>{blogObject.description}</p>
      <hr/>
      <h3>{blogObject.title}</h3>
      <p>{blogObject.description}</p>
      <hr/>
      <h3>{blogObject.title}</h3>
      <p>{blogObject.description}</p>
      <hr/>
    </div> */}