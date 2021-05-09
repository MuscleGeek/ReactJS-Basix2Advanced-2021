import React from 'react'

export const BlogCard = (props) => {
    console.table(props)
    return (
        <div className="BlogCard" >  
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        
      )
}
