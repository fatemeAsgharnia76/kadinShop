import React from 'react'
import './modal.css'
import Wrapper from '../hoc/Wrapper'
import Backdrop from '../Backdrop/Backdrop'
import Button from '../Button/Button'
import {useNavigate} from 'react-router-dom'


const Modal = (props) => {

  const navigate = useNavigate ()
  const logiInhandler = ()=>{

    navigate('/login', { replace: true });
  }

  return (
    <Wrapper>
      <Backdrop show={props.show} click={props.modalClose} /> 
      <div
        className="submit-modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        <p className='submit-modal__inner'>{props.text}</p>
        <div className='d-flex justify-content-center'>
          <Button className='close-modal' onClick={props.modalClose}
          style={{
          width: props.modalType === 'register' ? '30%' : '60%'
          }}>بستن</Button>
          { props.modalType === 'register' ? (<Button className='login-page' onClick={logiInhandler}>ورود</Button>)
          :null}
        </div>
        
     </div>
    </Wrapper>
  )
}
export default Modal
