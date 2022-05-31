import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { getChild, getChildren, reset } from "../features/children/childSlice";
import { css } from "@emotion/react";
import Confetti from "react-confetti";
import ClipLoader from "react-spinners/ClipLoader";
import GoldCoins from "../components/GoldCoins";
import AssignedChores from "../components/AssignedChores";
import useWindowDimensions from "../hooks/useWindowDimensions";
import ChildHomeAvatar from "../components/ChildHomeAvatar";
import ChildHomeRandomMessage from "../components/ChildHomeRandomMessage";
import ChildHomeGreeting from "../components/ChildHomeGreeting";
import ChoresTotalCompleted from "../components/ChoresTotalCompleted";
import ChildLeaderboard from "../components/ChildLeaderboard";

function ChildHome() {
  const childId = JSON.parse(localStorage.getItem("childAuth")); // logged in Child
  const { child, children, isLoading, isSuccess, isError, message } =
    useSelector((state) => state.child);
  const { user } = useSelector((state) => state.auth);
  const [isBirthday, setIsBirthday] = useState(false);

  const [coinsEarned, setCoinsEarned] = useState(null); // for congrats message
  const [choresToDo, setChoresToDo] = useState(null); // number of chores to do - set by AssignedChores.js
  const [confettiActive, setConfettiActive] = useState(false);
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getChild(childId));
    dispatch(getChildren());
  }, [childId, isError, message]);

  useEffect(() => {
    if (coinsEarned) {
      setConfettiActive(true);
    }
    const timer = setTimeout(() => setConfettiActive(false), 30000);
  }, [coinsEarned]);

  if (isLoading) {
    return <ClipLoader />;
  }

  if (isError) {
    return <h3>Something Went Wrong</h3>;
  }

  const fontColor = () => {
    if (child.color === "pink" || child.color === "yellow") {
      return "black";
    } else {
      return "white";
    }
  };

  const style = {
    backgroundColor: `${child.color}`,
    color: `${fontColor()}`,
  };

  if (isSuccess && child && !Array.isArray(child)) {
    return (
      <div className="child-home-container" style={style}>
        {confettiActive && <Confetti width={width} height={height + 200} />}

        {isBirthday ? (
          <>
            <h1>Happy Birthday {child.firstname}!!!</h1>
            <Confetti width={width} height={height + 200} />
          </>
        ) : (
          <h1 className="child-home-title">Dashboard for {child.firstname} </h1>
        )}

        <ChildHomeAvatar avatar={child.avatar} />

        <div>
          <ChildHomeGreeting child={child} />
          {console.log(child)}
          <ChildHomeRandomMessage
            child={child}
            setIsBirthday={(bool) => setIsBirthday(bool)}
          />
        </div>

        {child.rewardbal ? (
          <GoldCoins coins={child.rewardbal} titleText={"Your Coin Bank"} />
        ) : (
          <h2>
            Your Coin bank is empty. Complete some chores to get some shiny gold
            coins. 😀
          </h2>
        )}

        {coinsEarned && (
          <h1>Congratulations you just earned {coinsEarned} gold coins! </h1>
        )}

        <Link
          to="/childrewards"
          className={
            child.color == "green"
              ? "btn btn-rewards-go black-btn"
              : "btn btn-rewards-go"
          }
        >
          Spend your Coins - Get REWARDS
        </Link>

        <AssignedChores
          childId={childId}
          setCoinsEarned={(coins) => {
            setCoinsEarned(coins);
          }}
          setChoresToDo={(num) => {
            setChoresToDo(num);
          }}
        />
        {choresToDo > 0 && child.choresdone === 0 && (
          <div className="chore-total-container">
            <h1>
              Start your gold coin collection today by completing your first
              chore!
            </h1>
          </div>
        )}

        {child.choresdone > 0 && (
          <ChoresTotalCompleted number={child.choresdone} />
        )}

        <ChildLeaderboard
          child={child}
          children={children}
          familyname={user.familyname}
        />
      </div>
    );
  }
}

export default ChildHome;
