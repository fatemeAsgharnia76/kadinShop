import React from 'react'
import './productcart.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Wrapper from '../hoc/Wrapper'

export default function ProductCard({item}) {
  return (
    <Wrapper>
        <li className='col-12 col-sm-6 col-md-4 pb-3'>
            <div className='product-card__container py-2'>
                <div className='product-image mb-2'>
                    <img src={item.imgSrc}  width='100%' height="100%"/>
                    <div className='product-btn__section'> 
                    <Link  to= {`./product/${item._id}`}>
                        <Button className="product-btn primary-btn">
                        جزییات محصول
                        </Button>
                    </Link>
                    </div>
                </div>
                <div className='product-details text-center'>
                <span className='product-brand'>{item.brand}</span>
                <Link  to={`./product/${item._id}`}>            
                    <h3 className='product-name my-1'>{item.name}</h3>
                </Link>
                <span className='product-price'> {new Intl.NumberFormat('fa-IR').format(item.price)} 
                تومان </span>
                </div>
            </div>
        </li>
    </Wrapper>
  )
}

