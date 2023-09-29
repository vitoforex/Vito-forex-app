import React, {useState} from 'react'

const Button = ({text, classes, onClick, type}) => {
  
  return (
    <button type={type} onClick={onClick} className={`${classes} py-2 px-4 rounded-lg`}>{text}</button>
  )
}

export default Button