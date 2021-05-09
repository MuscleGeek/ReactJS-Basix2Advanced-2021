import './App.css';
import React, {Component}from 'react';
import {BlogCard} from './BlogCard.jsx';
import {isArrayEmpty as checkEmpty} from './Utils';


class App extends Component {
 
 state = {
   showBlogs : true
 }

  blogArray = [
  
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

  blogCards = checkEmpty(this.blogArray) ? [] : this.blogArray.map((item, pos) => {
   console.table(item);

    return (
      <BlogCard className={'Blog'} title={item.title} description={item.description} key={pos} id={item.id}/>
    
    )
  })

  onHideBtnClick = () => {
    this.setState({showBlogs : false});

    console.log(this.state.showBlogs);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>Hide List</button>
        <br/>
        {this.showBlogs ? this.showBlogs : null}
        
      </div>
    );
  }

}

export default App;
