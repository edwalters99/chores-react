import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa'


function Login() {
 
  
  const [formData, setFormData] = useState( { 
    email: '',
    password: '',
    passwordconfirm: ''
  });

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
  
  
  const onSubmit = (e) => {
    e.preventDefault();
    validateEmailErrors();
    validatePasswordErrors();
  };


  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };

  return (
    <>
        <section className="heading">
          <h1>
            <FaSignInAlt /> Sign in
          </h1>
          <p>Login here to access your account</p>
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