import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa'

function Home() {
  return (
    <>
        <section className="heading">
          <h1>Welcome to ChoreTracker</h1>
          <p>Parent Dashboard</p>
          <p>Display childlist if exists</p>
          <p>Child 1</p>
          <p>Child 2</p>
          <p>Child 3</p>
          <p>OR</p>
         
        </section>

        <Link to='/new-child' className="btn btn-reverse btn-block">
          <FaQuestionCircle />  Add Child
        </Link>
    </>
  )
}

export default Home;