import './product.css'
import React, { useEffect, useState,useRef } from 'react'
import {useParams } from 'react-router-dom'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Wrapper from '../../components/hoc/Wrapper'


export default  function Product(props) {
    let params =  useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const sendRequest = async () => { 
            const response  = await axios.get(`https://kadin-e4484-default-rtdb.firebaseio.com/AllProducts/p${params.id}.json`)
            setProduct(response.data)
        }
        sendRequest()
    },[params.id])

    let productSize  = null
    if (Object.keys(product).length > 0) {
        productSize  = product.size.map((item) => {
            return  <option key={item} value={item}> سایز: {item} </option>
        })
    }
    const productsizeRef = useRef(null)
    function orderhelper() {
        const sizeSelected =  productsizeRef.current.value
        props.orderPro(params.id,sizeSelected);
    }

    return (
        <Wrapper>
            <main className='row mx-0 p-0 product-main'> 
                <div className='col-12 col-md-6 px-0'>
                    <img src={product.imgSrc} width='100%'  height="100%"/>
                </div>
                <div className='col-12 col-md-6 justify-content-center align-items-center d-flex py-3'>
                    <div className='w-80'>
                        <span className='pro-brand'>{product.brand}</span>
                        <h2 className='pro-name'>{product.name}</h2>
                        <span className='pro-price'> {new Intl.NumberFormat('fa-IR').format( product.price)} تومان</span>
                        <p className='pro-description'>{product.description}</p>
                        <Form.Select className="size-select-form" ref= {productsizeRef}>
                            {productSize}
                        </Form.Select>
                        <button className="add-cart-btn" onClick={orderhelper}>سفارش</button>
                    </div>
                </div>
            </main>
        </Wrapper>
    )
}

