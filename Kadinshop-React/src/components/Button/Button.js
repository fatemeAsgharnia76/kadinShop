import React from 'react'
import './button.css'
const  Button = (props) => {
  return (
    <button className = {`button ${props.className}`} style={props.style} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button