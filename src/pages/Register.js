import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState( { 
    username: '',
    email: '',
    familyname: '',
    password: '',
    passwordconfirm: ''
  });

  const { username, email, familyname, password, passwordconfirm } = formData;  // destructuring for easy access in form

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name] : e.target.value
    }));
  };



  const onSubmit = (e) => {
    e.preventDefault();

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
              Username:
                <input 
                  type="text" 
                  className="form-control" 
                  id="username" 
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
                  id="email" 
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
                    id="familyname" 
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
                    className="form-control" 
                    id="password" 
                    name="password"
                    value={ password } 
                    placeholder="Enter a password"
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
                    id="passwordconfirm" 
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