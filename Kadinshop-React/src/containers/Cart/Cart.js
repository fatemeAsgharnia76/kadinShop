import './css/cart.css'
import React, {useState} from 'react'
import Summary from './Summary'
import OrderList from './OrderList'
import { Container, Row } from 'react-bootstrap'
import Wrapper from '../../components/hoc/Wrapper'
import Modal from '../../components/Modal/Modal'

export default function Cart(props) {
    const totalPrice = props.cardProducts.reduce((accumulator, object) => {
        return (accumulator + object.price*object.count);
    }, 0);


    function decreaseProCountHelper(index) {
        props.decreaseProCount(index);
    }
    function increaseProCountHelper(index) {
        props.increaseProCount(index)
    }
      
    // when order submit btn clicked (they are for showing modal and backdrop)
    const [purchased,setpurchased]  = useState(false)
    const purchasedHandler = () => {
        if(props.productCount !== 0){
          setpurchased(true)
        }
    }
    const modalCloseHandler = () => setpurchased(false)
    const cartModalText = 'سفارش شما با موفقیت ثبت شد. از خرید شما متشکریم'
      
  return (
    <Wrapper>
        <main  className="d-block cart-main" >
            <Container fluid className='d-flex cart-container'>
                <Row className='px-0 mx-0 w-100'> 
                    <OrderList
                    cardProducts={props.cardProducts} 
                    decreaseProCount ={decreaseProCountHelper}
                    increaseProCount ={increaseProCountHelper}
                    /> 
                    <Summary totalPrice={totalPrice} productscount={props.productscount}  submitorder={purchasedHandler}/>
                </Row>
            </Container>
        </main>
        <Modal show={purchased} modalClose={modalCloseHandler} text={cartModalText}/>
    </Wrapper>
  )
}


