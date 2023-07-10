import './css/summary.css'
import React from 'react'
import Wrapper from '../../components/hoc/Wrapper'
import Button from '../../components/Button/Button'
import { Col } from 'react-bootstrap'

export default function Summary(props) {
    return (
        <Wrapper>
            <Col className='summary col-12 col-lg-4'>
                <div className="summary-inner w-75">
                    <h2 className='summary-title'>خلاصه سفارش</h2>
                    <div className='summary-details d-flex  justify-content-between'>
                        <span>تعداد محصولات:</span>
                        <span> {new Intl.NumberFormat('fa-IR').format(props.productscount)}</span>
                    </div>
                    <div className='summary-details d-flex justify-content-between'>
                        <span className=''>هزینه کل محصولات:</span>
                        {
                        props.productCount=== 0 ?  (<span>{new Intl.NumberFormat('fa-IR').format(0)}</span>)
                        : <span>{new Intl.NumberFormat('fa-IR').format(props.totalPrice)}  تومان</span> 
                        }   
                    </div>
                    <div className='summary-details d-flex justify-content-between'>
                        <span>هزینه ارسال :</span>
                        {
                        props.productCount=== 0 ?  (<span>{new Intl.NumberFormat('fa-IR').format(0)}</span>)
                        : <span>{new Intl.NumberFormat('fa-IR').format(20)}  تومان</span> 
                        }        
                    </div>
                    <div className='summary-details d-flex justify-content-between'>
                        <span> مجموع هزینه :</span>
                        {
                        props.productCount=== 0 ?  (<span>{new Intl.NumberFormat('fa-IR').format(0)}</span>)
                        : <span>{new Intl.NumberFormat('fa-IR').format(props.totalPrice + 20)}  تومان</span> 
                        }  
                    </div>
                    <Button className="button primary-btn submit-order mt-5" onClick={props.submitorder} >ثبت سفارش</Button>
                </div>
            </Col>
        </Wrapper>
    )
}

