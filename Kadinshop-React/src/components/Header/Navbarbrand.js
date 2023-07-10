import React from 'react'
import './css/navbarbrand.css'
import Wrapper from '../hoc/Wrapper'

export default function Navbarbrand(props) {
  return (
    <Wrapper>
      <h2 className="brand-logo pb-1 d-flex align-items-center">
      {props.children}
    </h2>
    </Wrapper>
  )
}
