import React, { useState, useEffect } from 'react'
import './css/header.css'
import Wrapper from '../hoc/Wrapper'
import Sticky from 'react-stickynode'
import Navigation from './Navigation'


export default function Header(props) {
  const [isScrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [screenWidth, setScreenWidth] = useState(getCurrentWindowWidth())
    function getCurrentWindowWidth() {
      return { width: window.innerWidth }
    }
    useEffect(() => {
      const updateWindowWidth = () => {
          setScreenWidth(getCurrentWindowWidth())
      }
      window.addEventListener('resize', updateWindowWidth);
      return(() => {
          window.removeEventListener('resize', updateWindowWidth);
      })
  }, [screenWidth])


    const handleScroll = () => {
    if(window.pageYOffset > 60) {
        setScrolled(true)
    } else { setScrolled(false) }
    }

    let header;
    if (screenWidth.width > 992){
      header = (<Sticky enabled={true}>
        <header className={`header w-100  ${isScrolled && 'header-scrolled'}`}>
          <Navigation 
          scrolled={isScrolled} 
          userLogedIn={props.userLogedIn} 
          productscount={props.productscount}
          screenWidth= {screenWidth.width}/>
        </header>
    </Sticky>)
    }else { 
      header =(<header className={`header w-100  ${isScrolled && 'header-scrolled'}`}>
      <Navigation 
      scrolled={isScrolled} 
      userLogedIn={props.userLogedIn} 
      productscount={props.productscount}
      screenWidth= {screenWidth.width}
      />
    </header>)
    }

  return (
    <Wrapper>
        {header}
    </Wrapper>
  )
}

