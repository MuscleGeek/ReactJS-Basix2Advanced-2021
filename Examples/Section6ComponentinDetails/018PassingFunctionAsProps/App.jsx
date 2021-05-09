import './App.css';
import React, {Component}from 'react';
import {BlogCard} from './BlogCard.jsx';
import {isArrayEmpty as checkEmpty} from './Utils';


class App extends Component {
 
 state = {
   showBlogs : true,
   blogArray : [
  
    {
      id:1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem',
      likeCount: 0

    },
    {
      id:2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem',
      likeCount: 0

    },
    {
      id:3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem',
      likeCount: 0

    }
  ]
 }

  
  onLikeBtnClick = (pos) => {
    const updatedBlogList =  this.state.blogArray;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount += 1; //counter +1
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({blogArray: updatedBlogList});

    //console.table(updatedBlogObj);  
  }

  onHideBtnClick = () => {
    //let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });

    console.log(this.state.showBlogs);
  }

  render() {
    console.log('Render Called');
    console.log(this.state);
    const blogCards = checkEmpty(this.state.blogArray) ? [] : this.state.blogArray.map((item, pos) => {
      console.table(item);
   
       return (
         <BlogCard className={'Blog'} title={item.title} description={item.description} likeCount={item.likeCount} 
         onLikeBtnClick={() => this.onLikeBtnClick(pos)} key={pos} position={pos} id={item.id}/>
       
       )
     })
    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br/>
        {this.state.showBlogs ? blogCards : null}
        
      </div>
    );
  }

}

export default App;
