import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa'
import ChildrenList from '../components/ChildrenList'

function Home() {

  const { user } = useSelector((state) => state.auth);
  
  
  return (
    
    <>
        <section className="heading">
          <h1>Welcome to ChoreTracker</h1>
          {/* <h1>{ user.familyname }</h1> */}
          <p>Parent Dashboard</p>
          <p>**Display childlist if exists**</p>
          {/* <ChildrenList /> */}
          <p>*OR*</p>
         
        </section>

        <Link to='/new-child' className="btn btn-reverse btn-block">
          <FaQuestionCircle />  Add Child
        </Link>
    </>
  )
}

export default Home;