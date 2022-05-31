import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import hero1 from '../images/hero1.jpg';




function Login() {
 
  
  const [formData, setFormData] = useState( { 
    email: '',
    password: '',
    passwordconfirm: ''
  });

  const navigate = useNavigate();
  // REDUX
  const dispatch = useDispatch();
  const {user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);  // retrieve from global state (auth)

  const [emailValid, setEmailValid] = useState(null); 
  const [passwordValid, setPasswordValid] = useState(null); // for shading of form input background
  const [formReady, setFormReady] = useState(false); // for button state


  const { email, password } = formData; 

  useEffect(() => {
    validateEmail();
    validatePassword();
  },[formData]);

  useEffect(() => {
    checkFormReady();
  }, [emailValid, passwordValid]);

  useEffect(() => {
    //Error
    if (isError) {
      toast.error(message, { toastId: 'tMessage'});
    };
    
    //Redirect when logged in
    if (isSuccess || user) {
      navigate('/');
    };

    dispatch(reset());  // reset global error states

  }, [isError, isSuccess, user, message, navigate, dispatch])



// VALIDATIONS ON FORM SUBMIT - TRIGGER TOAST POPUP ERRORS

  const validateEmailHelper = (email) => {
    // An email address must contain exactly one @
    // An email address must contain at least one full stop (.)
        const atSigns = email.split('').filter(char => char === '@').length;
        const periods = email.split('').filter(char => char === '.').length;
        return (atSigns === 1 && periods >= 1);
    };

  const validateEmailErrors = () => {
    if (email.length === 0) {
      toast.error('Email address must be entered', { toastId: 'emailNil'});
    } else if (!validateEmailHelper(email)) {
      toast.error('Invalid Email address', { toastId: 'emailBad'});
    };
  };
  

  const validatePasswordErrors = () => {
    if (password.length === 0) {
      toast.error('Password must be entered', {
        toastId: 'passNil'
      });
    };
  };

  
// VALIDATIONS ON INPUT - USED FOR BOX SHADING AND FORM READINESS TO SUBMIT

   const validateEmail = () => {
    setEmailValid(validateEmailHelper(email));
   };

   const validatePassword = () => {
    setPasswordValid(password.length !== 0);
   };
 
   const checkFormReady = () => {
     setFormReady((emailValid  && passwordValid));
   };
  

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validateEmailErrors();
    validatePasswordErrors();
    
    const userData = {
      email,
      password
    };
    
    if (emailValid && passwordValid) {
      dispatch(login(userData));
    };
  };
  
  if (isLoading) {
    return <ClipLoader />
  }

  return (
    <>
        <section className="heading">
        <h1 className="login-header">Chore Tracker</h1>
          <h1>
            <FaSignInAlt /> Login
          </h1>
          <p>Login here to access your account</p>
          <img className="hero-img" src={ hero1 } alt="Young child helping her mum with the laundry." />
        </section>

        <div className="form">
          <form onSubmit={ onSubmit }>
      
            <div className="form-group">
              <label>
              Email:
                <input 
                  type="text" 
                  className= "form-control"
                  name="email"
                  value={ email } 
                  placeholder="Enter your email address"
                  onChange={ onChange } 
                />
              </label>
            </div>
            
              <div className="form-group">
                <label>
                Password:
                  <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    value={ password } 
                    placeholder="Enter password"
                    onChange={ onChange } 
                  />
                </label>
              </div>

              <div className="form-group">
                <button className={ formReady ? "btn btn-block btn-success" : "btn btn-block btn-inactive"}>Login</button>
              </div>
            </form>
          
        </div>
    </>
  )
}

export default Login;