import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';

function NewFamilyChores() {
    const [formData, setFormData] = useState( { 
        title: '',
        desc: '',
        value: '',
        icon: ''
      });

      const { title, desc, value, icon } = formData; 

      const [formReady, setFormReady] = useState();

      const navigate = useNavigate();

      //REDUX
      const dispatch = useDispatch();
    //   const {user, isLoading, isError, isSuccess, message } = useSelector(state => state.famchore);  // retrieve from global state (auth)

      const onChange = (e) => {
        setFormData(prevState => ({
          ...prevState,
          [e.target.name] : e.target.value
        }))
      };

      const onSubmit = (e) => {
        e.preventDefault();
      };
  
    return (
      <>
       <BackButton url="/familychores" />
       <section className="heading">
          {/* <h1>
            <FaUser /> Create new Chore...
          </h1> */}
        </section>

        <div className="form">
          <form onSubmit={ onSubmit }>
      
            <div className="form-group">
              <label>
              Title:
                <input 
                  type="text" 
                  className={"form-control"}
                  name="title"
                  value={ title } 
                  placeholder="Tidy your bedroom"
                  onChange={ onChange } 
                />
              </label>
            </div>

            <div className="form-group">
              <label>
              Description:
                <input 
                  type="text" 
                  className={"form-control"}
                  name="desc"
                  value={ desc } 
                  placeholder="Clear the floor area and put the toys away! "
                  onChange={ onChange } 
                />
              </label>
            </div>

            <div className="form-group small-width">
                    <label htmlFor='value'>Value:</label>
                    <select name="value" id="value" className="form-control" value={ value }onChange={ onChange }>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            

            <div className="form-group small-width">
              <label>
              Emoji:
                <input 
                  type="text" 
                  className={"form-control"}
                  name="icon"
                  value={ icon } 
                  placeholder="🛏️"
                  maxLength="3"
                  onChange={ onChange } 
                />
              </label>
            </div>


              <div className="form-group">
                <button className={ formReady ? "btn btn-block btn-success" : "btn btn-block btn-inactive"}>Save</button>
              </div>
            </form>
        </div>
    </>
  )
}

export default NewFamilyChores;