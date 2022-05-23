import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa'

function Register() {
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
  // Minimum eight characters, at least one letter, one number and one special character:
  
  const [formData, setFormData] = useState( { 
    username: '',
    email: '',
    familyname: '',
    password: '',
    passwordconfirm: ''
  });




  const [userNameValid, setUsernameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [familyNameValid, setFamilyNameValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null); // for shading of form input background
  const [passwordConfirmationValid, setPasswordConfirmationValid] = useState(null); // for shading of form input background
  const [formReady, setFormReady] = useState(false);


  const { username, email, familyname, password, passwordconfirm } = formData; 


  useEffect(() => {
    validateUsername();
    validateEmail();
    validateFamilyName();
    validatePassword();
    validatePasswordConfirmation();
  },[formData]);

  useEffect(() => {
    checkFormReady();
  }, [userNameValid, emailValid, familyNameValid, passwordValid, passwordConfirmationValid]);


// VALIDATIONS ON FORM SUBMIT - TRIGGER TOAST POPUP ERRORS

  const validateEmailHelper = (email) => {
    // An email address must contain exactly one @
    // An email address must contain at least one full stop (.)
        const atSigns = email.split('').filter(char => char === '@').length;
        const periods = email.split('').filter(char => char === '.').length;
        return (atSigns === 1 && periods >= 1);
    };

  const validateUsernameErrors = () => {
    if (username.length === 0) {
      toast.error('Username must be entered');
    };
  };

  const validateEmailErrors = () => {
    if (email.length === 0) {
      toast.error('Email address must be entered');
    };
    if (!validateEmailHelper(email)) {
      toast.error('Invalid Email address');
    };
  };
  
  const validateFamilyNameErrors = () => {
    if (familyname.length === 0) {
      toast.error('Family Name must be entered');
    };
  };
  
  const validatePasswordErrors = () => {
    if (password.length === 0) {
      toast.error('Password must be entered');
    } else if (!passwordValid) {
        toast.error('Password: Minimum eight characters - at least one letter and one number');
    } else if (passwordconfirm.length === 0) {
        toast.error('Password confirmation must be entered');
    } else if (password !== passwordconfirm) {
        toast.error("Passwords don't match!");
    };
  };

  
// VALIDATIONS ON INPUT - USED FOR BOX SHADING AND FORM READINESS TO SUBMIT
  const validateUsername = () => {
    setUsernameValid(username.length !== 0);
   };

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
    setFormReady((userNameValid && emailValid && familyNameValid && passwordValid && passwordConfirmationValid));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validateUsernameErrors();
    validateEmailErrors();
    validateFamilyNameErrors();
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
            <FaUser /> Register your family here...
          </h1>
          <p>Please create an account</p>
        </section>

        <div className="form">
          <form onSubmit={ onSubmit }>
            <div className="form-group">
              <label>
              Username:
                <input 
                  type="text" 
                  className="form-control" 
                  name="username"
                  value={ username } 
                  placeholder="Enter a username"
                  onChange={ onChange } 
                />
              </label>
            </div>

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
                    placeholder="Enter a family name e.g. The Bloggs Family"
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
                    placeholder="Min 8 chars & at least 1 number"
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