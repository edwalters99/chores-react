import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa'

function Register() {
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  // Minimum eight characters, at least one letter and one number:
  
  const [formData, setFormData] = useState( { 
    username: '',
    email: '',
    familyname: '',
    password: '',
    passwordconfirm: ''
  });

  const [passwordValid, setPasswordValid] = useState(null); // for shading of form input

  const { username, email, familyname, password, passwordconfirm } = formData;  // destructuring for easy access in form

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };

  useEffect(() => {
    validatePassword();
  },[formData])


  const validatePasswordErrors = () => {
    if(password.length === 0) {
      toast.error('Password must be entered')
    } else {
      if (password !== passwordconfirm) {
        toast.error("Passwords don't match!")
      };
      
      if (!passwordValid) {
        toast.error('Minimum eight characters, at least one letter and one number')
      };
    };
  };

  const validatePassword = () => {
   setPasswordValid(PASSWORD_REGEX.test(password));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    validatePasswordErrors();
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
                  type="email" 
                  className="form-control" 
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
                    placeholder="Min 8, at least 1 number"
                    onChange={ onChange } 
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                Password Confirmation:
                  <input 
                    type="password" 
                    className="form-control" 
                    name="passwordconfirm"
                    value={ passwordconfirm } 
                    placeholder="Confirm your password"
                    onChange={ onChange } 
                  />
                </label>
              </div>

              <div className="form-group">
                <button className="btn btn-block">Submit</button>
              </div>
            </form>
        </div>
    </>
  )
}

export default Register;