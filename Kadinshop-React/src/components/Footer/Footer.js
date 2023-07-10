import React from 'react'
import './css/footer.css'
import Wrapper from '../hoc/Wrapper'
import {Container, Row, Col} from 'react-bootstrap'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'


export default function Footer() {
  return (
    <Wrapper>
        <Container fluid className='footer'> 
          <Row>
              <Col xs={6} sm={4} className='d-flex justify-content-center mb-3'>
                <div className='d-flex flex-column'>
                    <h2 className='footer-title'>راهنمای خرید</h2>
                    <span className='pb-2 footer-span-fs'>راهنمای انتخاب سایز</span>
                    <span className='pb-2 footer-span-fs'>روش ارسال</span>
                    <span className='pb-2 footer-span-fs'>روش پرداخت</span>
                </div>
              </Col>
              <Col xs={6} sm={4} className='d-flex justify-content-center mb-3'>
                <div className='d-flex flex-column'>
                    <h2 className='footer-title'>خدمات به مشتریان </h2>
                    <span className='pb-2 footer-span-fs'>پشتیبانی 24 ساعته</span>
                    <span className='pb-2 footer-span-fs'>امکان پرداخت درب منزل </span>
                    <span className='pb-2 footer-span-fs'> ضمانت اصل بودن کالا</span>
                </div>
              </Col>
              <Col sm={4} xs={12}className='d-flex mb-3 justify-content-center'>
                <div className='d-flex d-sm-block w-100 align-items-center justify-content-center'>
                    <Col xs={6} sm={12} className='d-flex justify-content-center'>
                        <h3 className='footer-title mb-0 mb-sm-3 pe-2'>منتظر شما هستیم!</h3>
                    </Col>
                    <Col xs={6} sm={12} className='d-flex justify-content-center pe-3'>
                        <SocialMediaIcons 
                        className={'mx-2 mx-lg-4'} 
                        style={{padding:'9px 6px',fontSize:'19px'}}
                    />
                    </Col>
                </div>
              </Col> 
          </Row>
        </Container>
    </Wrapper>
  )
}
