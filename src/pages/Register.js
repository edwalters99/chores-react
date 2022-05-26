import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';  // useSelector for reading global state, useDispatch for editing
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

function Register() {
  
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
  // Minimum eight characters, at least one letter, one number and one special character:
  
  const [formData, setFormData] = useState( { 
    email: '',
    familyname: '',
    password: '',
    passwordconfirm: ''
  });

  const navigate = useNavigate();

  //REDUX
  const dispatch = useDispatch();
  const {user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);  // retrieve from global state (auth)


  const [emailValid, setEmailValid] = useState(null);
  const [familyNameValid, setFamilyNameValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null); // for shading of form input background
  const [passwordConfirmationValid, setPasswordConfirmationValid] = useState(null); // for shading of form input background
  const [formReady, setFormReady] = useState(false); // for button state


  const { email, familyname, password, passwordconfirm } = formData; 


  useEffect(() => {
    validateEmail();
    validateFamilyName();
    validatePassword();
    validatePasswordConfirmation();
  },[formData]);

  useEffect(() => {
    checkFormReady();
  }, [emailValid, familyNameValid, passwordValid, passwordConfirmationValid]);

  useEffect(() => {
    //Error
    if (isError) {
      toast.error(message);
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
        return (atSigns === 1 && periods >= 1);  // true if email valid
    };


  const validateEmailErrors = () => {
    if (email.length === 0) {
      toast.error('Email address must be entered', { toastId: 'emailNil'});
    } else if (!validateEmailHelper(email)) {
        toast.error('Invalid Email address', { toastId: 'emailBad'});
    };
  };
  
  const validateFamilyNameErrors = () => {
    if (familyname.length === 0) {
      toast.error('Family Name must be entered', { toastId: 'familyNil'});
    };
  };
  
  const validatePasswordErrors = () => {
    if (password.length === 0) {
      toast.error('Password must be entered', { toastId: 'passwordNil'});
    } else if (!passwordValid) {
        toast.error('Password: Minimum eight characters - at least one letter and one number', { toastId: 'passwordBad'});
    } else if (passwordconfirm.length === 0) {
        toast.error('Password confirmation must be entered', { toastId: 'passConNil'});
    } else if (password !== passwordconfirm) {
        toast.error("Passwords don't match!", { toastId: 'passNoMatch'});
    };
  };

  
// VALIDATIONS ON INPUT - USED FOR BOX SHADING AND FORM READINESS TO SUBMIT

   const validateEmail = () => {
    setEmailValid(validateEmailHelper(email));
   };
  
  const validateFamilyName = () => {
    setFamilyNameValid(familyname.length !== 0);
   };

  const validatePassword = () => {
   setPasswordValid(PASSWORD_REGEX.test(password));
  };

  const validatePasswordConfirmation = () => {
    setPasswordConfirmationValid(password === passwordconfirm);
  };

  const checkFormReady = () => {
    setFormReady((emailValid && familyNameValid && passwordValid && passwordConfirmationValid));
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
    validateFamilyNameErrors();
    validatePasswordErrors();
    
    // prepare data for submission
    const userData = {
      email,
      familyname,
      password
    };
    
    if (emailValid && familyNameValid && passwordValid && passwordConfirmationValid) {
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <ClipLoader />
  }
   
  return (
    <>
        <section className="heading">
          <h1>
            <FaUser /> Register your family here...
          </h1>
          <p>Please create an account</p>
        </section>

        <div className="form">
          <form onSubmit={ onSubmit }>
      
            <div className="form-group">
              <label>
              Email:
                <input 
                  type="text" 
                  className={emailValid || email.length === 0 ? "form-control" : "form-control form-nonvalid"} 
                  name="email"
                  value={ email } 
                  placeholder="Enter your email address"
                  onChange={ onChange } 
                />
              </label>
            </div>
            
            <div className="form-group">
                <label>
                Family Name:
                  <input 
                    type="text" 
                    className="form-control" 
                    name="familyname"
                    value={ familyname } 
                    placeholder="e.g. The Bloggs Family"
                    onChange={ onChange } 
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                Password:
                  <input 
                    type="password" 
                    className={passwordValid || password.length === 0 ? "form-control" : "form-control form-nonvalid"} 
                    name="password"
                    value={ password } 
                    placeholder="8+ (at least one number)"
                    onChange={ onChange } 
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                Password Confirmation:
                  <input 
                    type="password" 
                    className={ passwordConfirmationValid || passwordconfirm.length === 0 ? "form-control" : "form-control form-nonvalid"} 
                    name="passwordconfirm"
                    value={ passwordconfirm } 
                    placeholder="Confirm your password"
                    onChange={ onChange } 
                  />
                </label>
              </div>

              <div className="form-group">
                <button className={ formReady ? "btn btn-block btn-success" : "btn btn-block btn-inactive"}>Submit</button>
              </div>
            </form>
        </div>
    </>
  )
}

export default Register;