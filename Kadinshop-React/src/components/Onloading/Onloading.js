import React from 'react'
import './onloading.css'
import Wrapper from '../hoc/Wrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from  '@fortawesome/free-solid-svg-icons'
import { Container} from 'react-bootstrap'

export default function Onloading(props) {
  return (
    <Wrapper>
         <main  className="d-block">
            <Container className="d-flex flex-column align-items-center">
                <h2 className='mb-5 onloading-title'>{props.title}</h2>
                <FontAwesomeIcon className='pt-3 loading-icon' icon={faSpinner}/>
            </Container>
        </main>
    </Wrapper>
  )
}
