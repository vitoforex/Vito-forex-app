import React from 'react'

const Button = ({text, classes, onClick}) => {
  return (
    <button onClick={onClick} className={`${classes} py-2 px-4 rounded-lg`}>{text}</button>
  )
}

export default Button