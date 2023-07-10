import React from 'react'
import './css/navitem.css'
import { Link } from 'react-router-dom'
import Wrapper from '../hoc/Wrapper'

export default function  Navitem(props) {
  return (
    <Wrapper>
      <Link to={props.link} key={props.thisKey} className={`navitem px-3 p-bt ${props.scrolled && 'navitems-scrolled'}` } role="button">
        {props.children}
      </Link>
    </Wrapper>
  )
}
