import './App.css'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Cart from './containers/Cart/Cart'
import Home from './containers/Home/Home'
import Products from './containers/Products/Products'
import Product from './containers/Product/Product'
import Register from './containers/Register/Register'
import LogIn from  './containers/LogIn/LogIn'
import About from './containers/About/About'
import ContactUs from './containers/ContactUs/ContactUs'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
    // states
    const [cartProductId, setcartProductId] = useState()
    const [Productscount, setProductscount] = useState(0)
    const [isNewProduct , setisNewProduct] = useState(0)
    const [cartProduct, setcardProduct] = useState({})
    const [productsizeSelected,setproductsizeSelected] = useState("")
    const [cartProducts, setcartProducts] = useState([])


    // when "order" btn from product is clicked
    function orderProHandler(id,sizeSelected) { 
        setcartProductId(id)
        setisNewProduct(isNewProduct + 1)
        setProductscount(Productscount + 1)
        setproductsizeSelected(sizeSelected)
    }

    //prepare cart product  -- use isNewProduct for render everytime which a button can click back to back 
    useEffect(()=> {
        if(cartProductId > 0){
            const sendRequest = async () =>{ 
                const response  = await
                axios.get(`https://kadin-e4484-default-rtdb.firebaseio.com/AllProducts/p${cartProductId}.json`)
                const product = {
                    id: response.data._id,
                    name: response.data.name,
                    imgSrc: response.data.imgSrc,
                    size: productsizeSelected,
                    price:response.data.price,
                    count:1
                }
                setcardProduct(product)
            }
            sendRequest()
        }  
    },[isNewProduct]) 

    //putting prodact in products cart -- first we should check does it existed in products cart array?
    useEffect(()=> {
        //this 'if' is because of doesnt add {} to cart
        if (Object.keys(cartProduct).length > 0){
            const productexistedindex = cartProducts.findIndex((item) =>{
                return  item.id === cartProduct.id && item.size === cartProduct.size
            })
            if (productexistedindex > -1 ){
                const cartProductsCopy = [...cartProducts]
                cartProductsCopy[productexistedindex].count = cartProductsCopy[productexistedindex].count  +1
                setcartProducts(cartProductsCopy)
            }else{ 
                const updatedcartProducts = [...cartProducts,cartProduct]
                setcartProducts(updatedcartProducts)
            }
        }
    },[cartProduct])

    //  decrease number of product (or remove) that was in cart 
    const decreaseProCountHandler = (index) => {
        // update cart count 
        const newProductsCount = Productscount - 1
        setProductscount(newProductsCount)   
        // update product count 
        const cartProductsUpdated = [...cartProducts]
        const newproductCount = cartProductsUpdated[index].count -1  //reduce product count
        if(newproductCount === 0 ){
           cartProductsUpdated.splice(index,1)                       //remove product from cart products array
           setcartProducts(cartProductsUpdated)
        }else {
           cartProductsUpdated[index].count = newproductCount
           setcartProducts(cartProductsUpdated)
        }   
    }

    // increase number of product that was in cart 
    const increaseProCountHandler = (index) => {
        // update cart count 
        const newProductscount = Productscount + 1
        setProductscount(newProductscount)
        // update product count 
        const cartProductsUpdated = [...cartProducts]
        cartProductsUpdated[index].count = cartProductsUpdated[index].count + 1
        setcartProducts(cartProductsUpdated)
    }

    // user log in status
    const [userLogedIn,setUserLogedIn] = useState({username: '', logedIn:false})
    const logedInHandler = (userinfo) =>{
        setUserLogedIn({
          username : userinfo,
          logedIn:true
        })
    }

    return ( 
        <Router>
           
            <Header productscount={Productscount} userLogedIn={userLogedIn}/> 
            <Routes>
                <Route  path='/'             element= {<Home     userLogedIn={userLogedIn}/>}/>
                <Route  path='products'      element= {<Products/>}/>
                <Route  path="product/:id"   element= {<Product  orderPro={orderProHandler}/>}/>
                <Route path='register'       element={<Register/>}/>
                <Route path='login'          element={<LogIn     logedIn = {logedInHandler}/>}/>
                <Route  path='About'         element= {<About/>}/>
                <Route  path='Contactus'     element= {<ContactUs/>}/>
                <Route path='productCart'    element={<Cart 
                cardProducts={cartProducts} 
                productscount={Productscount}
                increaseProCount = {increaseProCountHandler}
                decreaseProCount = {decreaseProCountHandler}/>}
                />
                <Route  path="products/product/:id"   element= {<Product  orderPro={orderProHandler}/>}/>
            </Routes>
            <Footer/>
            <ScrollToTop/>
      </Router>     
    )
}


