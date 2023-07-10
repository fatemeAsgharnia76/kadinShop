import './home.css'
import React, {useState, useEffect } from 'react'
import Wrapper from '../../components/hoc/Wrapper'
import AllProducts from '../../components/AllProducts/AllProducts'

export default function Home(props) {
  
    // for showing welcome to loged-in-user
    const [showWelcome,setShowWelcome] = useState(JSON.parse(localStorage.getItem('showWelcome')))
    useEffect(()=>{
      localStorage.setItem('showWelcome', JSON.stringify(showWelcome));
     },[showWelcome])

    const [isVisible,setIsVisible] = useState(false)
    useEffect(() => {
        if( props.userLogedIn.logedIn & showWelcome ) {
            setTimeout(() => {   
                setIsVisible(true)
            }, 3000);
            setTimeout(() => {   
                setIsVisible(false)
            }, 8000);
            setShowWelcome(false)
        }   
    },[props.userLogedIn.logedIn,showWelcome])
  
    return (
        <Wrapper>
            <main style={{marginBottom:'210px',backgroundColor:'white'}}>
                <section className='w-100 welcome-bg' dir='ltr'>
                    <div className='col-4 d-flex justify-content-center' dir='rtl' style={{paddingTop:'90px'}}>
                        {isVisible ? (
                            <div className='d-flex flex-column p-3 loged-in-message'>
                                <span> سلام <span>{props.userLogedIn.username}</span> .عزیز  </span>
                                <span>به کادین خوش‌ آمدی.</span>
                                <span> ارسال اولین خرید شما رایگان است. </span>
                            </div>
                        ): null}       
                    </div>
                </section> 
                <AllProducts/>       
            </main>
        </Wrapper>
    )
}
