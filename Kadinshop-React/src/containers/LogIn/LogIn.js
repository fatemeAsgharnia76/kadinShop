import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Wrapper from'../../components/hoc/Wrapper'
import AuthenticationForm from '../../components/AuthenticationForm/AuthenticationForm'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase'


export default function LogIn(props) {
    const [formElements,setFormElements] = useState({
        nameLastname:{
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder : 'نام و نام خانوادگی '
            },
            value:''
        },
        email:{
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder : 'ایمیل'
            },
            value:''
        },
        password:{
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder :'رمز ورود' 
            },
            value:''
        }
    })
    
    // need array to use on map method 
    let elementsArray = []
    for (let item in formElements ){
        elementsArray.push({
          id:item,
          config: formElements[item]
        })
    }

    //access to data which user enter 
    const inputChangeHandler = (event,elemantDataType) =>{
        const updatedForm = {...formElements}
        const updatedElemet = {...updatedForm[elemantDataType]}
        updatedElemet.value =  event.target.value
        updatedForm[elemantDataType] = updatedElemet
        setFormElements(updatedForm)
    }
    
    
    const navigate = useNavigate ()
    const [notFount, setNotFount] = useState(false)
    const submitHandler = (event) => {
        setNotFount(false)
        event.preventDefault()
        const nameLastname = formElements.nameLastname.value
        const email = formElements.email.value
        const password = formElements.password.value
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            props.logedIn(nameLastname)
            localStorage.setItem('showWelcome', JSON.stringify(true));
            navigate('/', { replace: true , state:{nameLastname}});
        })
        .catch((error) => {
            setNotFount(true)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    }
     
    // show message when the user info were incorrect
    let notfound;
    if (notFount) {
        notfound = (<span className='notfound text-right'>اطلاعات نادرست است</span>)
    } else ( notfound=null )

    return (
        <Wrapper>
          { <AuthenticationForm 
            inputs={elementsArray} 
            submitHandler={submitHandler} 
            inputChangeHandler={inputChangeHandler}
            title="ورود" 
            authHelper={'هنوز ثبت‌نام نکرده‌ام'}
            authHelperLink= '/register'> 
              {notfound}
             </AuthenticationForm>}
        </Wrapper>
    )
}
