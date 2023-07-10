import React from 'react'
import './backdrop.css'

export default function Backdrop(props) {
    return props.show ? (
        <div className="backdropp" onClick={props.click}></div>
    ) : null
}

 
