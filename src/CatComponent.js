import React from 'react'
import './CatComponent.css'

export const CatComponent = (props) => {
  return (
    <div>
        <img src={props.catImg} className='catImg'></img>
        <h1 className='catName'>name:{props.catName}</h1>
        <p className='catAge'>Age: {props.catAge} Years</p>
    </div>
  )
}
