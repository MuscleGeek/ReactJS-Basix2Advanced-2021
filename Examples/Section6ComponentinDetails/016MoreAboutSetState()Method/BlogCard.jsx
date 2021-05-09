import React from 'react'

import {dumpLogs} from './Utils.jsx';

//import './BlogCard.css';

import classes from  './BlogCard.module.css'; //ussando classes como alias podemos accesar a multipes classes dentro del css (en este caso solo tenemos uno llamado BlogCard)

export const BlogCard = (props) => {
    dumpLogs(props);

    return (
        <div className={classes.BlogCard} >  
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        
      )
}
