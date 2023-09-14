import React from 'react'

const Button = ({text, classes}) => {
  return (
    <button className={`${classes} py-2 px-4 rounded-lg`}>{text}</button>
  )
}

export default Button