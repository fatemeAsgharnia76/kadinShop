import React, {useState, useRef} from 'react'
import { auth } from '../../firebase'
import Wrapper from'../../components/hoc/Wrapper'
import Modal from '../../components/Modal/Modal'
import {  createUserWithEmailAndPassword  } from 'firebase/auth'
import AuthenticationForm from '../../components/AuthenticationForm/AuthenticationForm'

export default function Register() {
    //inputs info
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

    //access to data which user enter 
    const inputChangeHandler = (event,elemantDataType) =>{
        const updatedForm = {...formElements}
        const updatedElemet = {...updatedForm[elemantDataType]}
        updatedElemet.value =  event.target.value
        updatedForm[elemantDataType] = updatedElemet
        setFormElements(updatedForm)
    }

    // need array to use on map method 
    let elementsArray = []
    for (let item in formElements ){
        elementsArray.push({
            id:item,
            config: formElements[item]
        })
    }

    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);
    const handleReset = () => {
        formRef.current.reset();
        setValidated(false);
    }
    
    const[modalControl, setmodalControl] = useState('')
    const submitHandler = async (event) => {
        event.preventDefault()
        const email = formElements.email.value
        const password =  formElements.password.value
        await createUserWithEmailAndPassword(auth, email,password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setmodalControl(true)
            setValidated(true);
            handleReset();
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);   
        });
    }
    const modalCloseHandler = () => setmodalControl(false)
    const registerText = 'اطلاعات شما با موفقیت ثبت شد'
    const modalType = 'register'
     
    return (
        <Wrapper> 
            { <AuthenticationForm 
            inputs={elementsArray} 
            submitHandler={submitHandler} 
            inputChangeHandler={inputChangeHandler}
            validated={validated} 
            formRef={formRef} 
            title="ثبت‌نام" 
            authHelper={'قبلا عضو شده‌ام!'}
            authHelperLink= '/login'/>
            }
            <Modal 
            show={modalControl}
            modalClose={modalCloseHandler} 
            text={registerText} 
            modalType={modalType} />
        </Wrapper>
    )
}
