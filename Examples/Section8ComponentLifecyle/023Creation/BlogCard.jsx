import React from 'react'

//import {dumpLogs} from './Utils.jsx';

//import './BlogCard.css';

import classes from  './BlogCard.module.css'; //ussando classes como alias podemos accesar a multipes classes dentro del css (en este caso solo tenemos uno llamado BlogCard)

export const BlogCard = (props) => {
  //dumpLogs(props)
   /*  onLikeBtnClick = () => {
    this.setState((prevState, prevProp) => {
        return {likeCount: prevState.likeCount + 1} 
      });
    } */
    console.log('BlogCard Rendered');
  return(
    <div className={classes.BlogCard} >  
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <p>Like Count: <span className={classes.LikeCount}>{props.likeCount}
      </span></p>
      <button onClick={props.onLikeBtnClick}>Like</button>
    </div>
    
)


  
}

