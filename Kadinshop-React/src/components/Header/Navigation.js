import React, { useState, useEffect } from 'react'
import './css/navigation.css'
import Navbarbrand from './Navbarbrand'
import {Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialMediaIcons from  '../SocialMediaIcons/SocialMediaIcons'
import { faBagShopping,faBars} from '@fortawesome/free-solid-svg-icons'
import Wrapper from '../hoc/Wrapper'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import {MDBNavbar,MDBNavbarItem,MDBCollapse,MDBNavbarNav} from 'mdb-react-ui-kit'
import Navitem from './Navitem'



export default function Navigation(props) {
    const LogedIncontroler = props.userLogedIn.logedIn
    const  username = props.userLogedIn.username


  const [socialmediaicons, setsocialmediaicons] = useState()
  useEffect(() => {
      if(props.screenWidth < 768 || (LogedIncontroler === true & props.screenWidth < 992) ){
          setsocialmediaicons(null)
      }
      else {
          setsocialmediaicons(<SocialMediaIcons className={'mx-2'}/>)
      }
  }, [props.screenWidth,LogedIncontroler])

  const [showNavNoToggler, setShowNavNoToggler] = useState(false)

  
  return (
    <Wrapper>
      <Container fluid> 
        <Row>
          <MDBNavbar expand='lg' light className="px-3 pe-lg-5 d-flex justify-content-between">
              <Button
                  type='button'
                  className='nav-toggler'
                  data-target='#navbarTogglerDemo01'
                  aria-controls='navbarTogglerDemo01'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                  onClick={() => setShowNavNoToggler(!showNavNoToggler)}
              >        
                <FontAwesomeIcon icon={faBars} />
              </Button>
              <div xl={1} className='d-flex web-brand'><Navbarbrand href="#" >کادین</Navbarbrand></div>
              <div className='d-flex align-items-center order-lg-last'>  
                {
                  LogedIncontroler ? 
                  <div className='nav-username'><span>{username}</span></div>
                  : null
                }
                { socialmediaicons }
                <Link to="productCart"  role="button">
                    <Button className='me-3 primary-btn cart-btn'> 
                      <span>{new Intl.NumberFormat('fa-IR').format(props.productscount)}</span> 
                      <FontAwesomeIcon className="me-2 cart-icon" icon={faBagShopping} />
                    </Button>
                </Link> 
              </div> 
              <MDBCollapse navbar show={showNavNoToggler} style={{height:'fit-content'}}>
                <MDBNavbarNav className='mb-lg-0 p-0 pe-lg-4'>
                  <MDBNavbarItem className="d-flex navbar-items">
                    <Navitem thisKey={1} scrolled={props.scrolled} link= {'/'}>صفحه اصلی</Navitem>
                  </MDBNavbarItem>
                  <MDBNavbarItem className="d-flex navbar-items">
                    <Navitem thisKey={1} scrolled={props.scrolled} link= {'products'}>محصولات</Navitem>
                  </MDBNavbarItem>
                  { LogedIncontroler ? null :
                    (<MDBNavbarItem className="d-flex navbar-items">
                        <Navitem thisKey={1} scrolled={props.scrolled} link= {'register'}>ورود/ثبت‌نام</Navitem>
                    </MDBNavbarItem>) 
                  }        
                  <MDBNavbarItem className="d-flex navbar-items">
                    <Navitem thisKey={1} scrolled={props.scrolled} link= {'about'}>درباره ما</Navitem>
                  </MDBNavbarItem>
                  <MDBNavbarItem className="d-flex navbar-items">
                    <Navitem thisKey={1} scrolled={props.scrolled} link= {'Contactus'}>ارتباط با ما</Navitem>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>  
          </MDBNavbar>  
        </Row>
    </Container>
</Wrapper>
  )
}

