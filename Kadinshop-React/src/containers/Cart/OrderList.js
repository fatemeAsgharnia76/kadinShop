import './css/orderlist.css'
import React from 'react'
import Wrapper from '../../components/hoc/Wrapper'
import { Col } from 'react-bootstrap'


export default function OrderList(props) {
    let products = null
    if (Object.keys(props.cardProducts).length > 0 && Object.keys(props.cardProducts) !== {} ){
        products = props.cardProducts.map((item,index) => {
            return (
                <li className='cart-item d-flex p-0 m-0' key={item.id + item.size}> 
                    <img src={item.imgSrc}></img>
                    <div className='px-3 cart-item__name'>
                        <span>{item.name}</span>
                    </div>
                    <div className='cart-item__size'>
                        <span>{item.size}</span>
                    </div>
                    <div className='px-3 cart-item__price'>
                        <span>{new Intl.NumberFormat('fa-IR').format(item.price)}</span>
                    </div>
                    <div className='px-2 ps-lg-5 cart-item__count'>
                        <span>{new Intl.NumberFormat('fa-IR').format(item.count)}</span>
                    </div>
                    <div className='d-flex' style={{width:'200px'}}>
                        <div className='d-flex align-items-center mx-2'>
                            <button className='count-control__btn' onClick={() => props.increaseProCount(index)}>
                                +
                            </button>
                        </div>
                        <div className='d-flex align-items-center mx-2'>
                            <button className='count-control__btn' onClick={() => props.decreaseProCount(index)}>
                                -
                            </button>
                        </div>
                    </div>
                </li>
            )
        })
    }

    return (
        <Wrapper>
            <Col className='orders col-12 col-lg-8 row align-items-center mt-5 mt-lg-0 col'>
                <ul className='mx-0 px-0'>
                    {products}
                </ul>
            </Col>
        </Wrapper>
    )
}

