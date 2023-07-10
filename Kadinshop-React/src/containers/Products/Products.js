import React from 'react'
import Wrapper from '../../components/hoc/Wrapper'
import AllProducts from '../../components/AllProducts/AllProducts'

export default function Products() {
    return (
        <Wrapper>  
            <main style={{marginBottom:'230px',backgroundColor:'white'}}>
                <h2 className='text-center pt-5'>محصولات</h2>
                <AllProducts/> 
            </main>
        </Wrapper>
    )
}

