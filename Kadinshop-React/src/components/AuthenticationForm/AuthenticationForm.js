import './authentication.css'
import React from 'react'
import Wrapper from '../hoc/Wrapper'
import Button from '../Button/Button'
import Form from 'react-bootstrap/Form'
import { Link  } from 'react-router-dom'
import { Container} from 'react-bootstrap'
function AuthentivationForm(props) {
    

  return (
    <Wrapper>
        <main  className="d-block register">
            <Container className="d-flex flex-column justify-content-center align-items-center h-100">
                <h2 className='mb-4'style={{fontWeight:"700"}} >{props.title} </h2>
                {props.children}
                <Form className="this-form" onSubmit={props.submitHandler} ref={props.formRef}  validated={props.validated}>
                    {props.inputs.map((item)=>{
                        return(
                            <div className='mb-3'  key={item.id}>
                                <Form.Control
                                key={item.id}
                                as={item.config.elementType}
                                type={item.config.elementConfig.type}
                                placeholder={item.config.elementConfig.placeholder}
                                onChange={(event)=>props.inputChangeHandler(event,item.id)}
                                />
                            </div>
                        )
                    })}
                    <Button variant="primary" type="submit" className=" primary-btn py-2 px-4 ms-2 ">{props.title}</Button>
                    <Link to={props.authHelperLink} role="button"><span className='me-1 singIn-text'>{props.authHelper}</span></Link>
          </Form>
          </Container>
        </main>
    </Wrapper>
  )
}

export default AuthentivationForm