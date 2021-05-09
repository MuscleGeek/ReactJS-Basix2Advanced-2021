import React, {Component}from 'react'

import {dumpLogs} from './Utils.jsx';

//import './BlogCard.css';

import classes from  './BlogCard.module.css'; //ussando classes como alias podemos accesar a multipes classes dentro del css (en este caso solo tenemos uno llamado BlogCard)

export class BlogCard  extends Component {
  state = {
        likeCount: 0
  }

  onLikeBtnClick = () => {
    this.setState((prevState, prevProp) => {
        return {likeCount: prevState.likeCount + 1} 
      });
  }

  render() {  
    dumpLogs(this.props);
    
    return(
        <div className={classes.BlogCard} >  
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>

          <p>Like Count: <span className={classes.LikeCount}>{this.state.likeCount}
          </span></p>
          <button onClick={this.onLikeBtnClick}>Like</button>
        </div>
        
    )
  }
}

