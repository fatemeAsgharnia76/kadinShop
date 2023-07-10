import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Wrapper from '../hoc/Wrapper'
import ProductCard from '../ProductCard/ProductCard'

export default function AllProducts() {
    //** get products from backend **  
    const [products, setProducts] = useState([])
    useEffect(() => {
        let thisArray = []
        axios.get('https://kadin-e4484-default-rtdb.firebaseio.com/AllProducts.json')
        .then((response) => {
            for (let item in response.data) {
                thisArray.push(response.data[item])
            } 
            setProducts(thisArray)
        })
    },[])
  return (
    <Wrapper>
        <section>   
                <ul className='row px-0 mx-0  py-5 mt-3'>
                    { products.map((item) => {
                        return ( <ProductCard item={item} key={item._id} />)
                    })}
                </ul> 
            </section>   
    </Wrapper>
  )
}
