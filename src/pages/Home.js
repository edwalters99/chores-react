import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import ChildrenList from "../components/ChildrenList";

function Home() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <section className="heading">
        <h1>Welcome to ChoreTracker</h1>
        <h1>{user.familyname}</h1>

        <p className="home-subheader">Parent Dashboard</p>

        <Link to="/favourites" className="btn btn-reverse btn-block">
          <FaQuestionCircle /> Family Chore List
        </Link>
        <ChildrenList />
      </section>

      <Link to="/new-child" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Add Child
      </Link>
    </>
  );
}

export default Home;
