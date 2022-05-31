import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  getChild,
  getChildren,
  updateChild,
  reset,
} from "../features/children/childSlice";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import GoldCoins from "../components/GoldCoins";
import RewardList from "../components/RewardList";

function ChildRewards() {
  const childId = JSON.parse(localStorage.getItem("childAuth")); // logged in Child

  const dispatch = useDispatch();

  const { child, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.child
  );

  const [rewards] = useState([
    {
      name: "Pizza for dinner",
      cost: 3,
      image: "/images/pizza.png",
    },
    {
      name: "Trip to the Park",
      cost: 3,
      image: "/images/park.png",
    },
    {
      name: "$2 to spend at tuck shop",
      cost: 6,
      image: "/images/dollar.png",
    },
    {
      name: "Movie Night at Home",
      cost: 6,
      image: "/images/movie.png",
    },
    {
      name: "1 hour Computer Game time",
      cost: 3,
      image: "/images/computer.png",
    },
    {
      name: "Ice Cream at home",
      cost: 3,
      image: "/images/icecream.png",
    },
    {
      name: "$10 Toy Shopping",
      cost: 9,
      image: "/images/toyshop.png",
    },
    {
      name: "$20 Toy Shopping",
      cost: 18,
      image: "/images/toyshop.png",
    },
    {
      name: "Cafe treat",
      cost: 6,
      image: "/images/donut.png",
    },
    {
      name: "Cafe treat for whole family",
      cost: 30,
      image: "/images/donutplate.png",
    },
  ]);

  const [rewardRedeemed, setRewardRedeemed] = useState(false);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getChild(childId));
    dispatch(getChildren());
    dispatch(reset());
  }, [childId, isError, message]);

  const updateChildBalance = (deductionAmt) => {
    const currentBal = child.rewardbal;
    const newBal = currentBal - deductionAmt;
    const childData = {
      rewardbal: newBal,
    };
    dispatch(updateChild({ childData, childId }));
    setRewardRedeemed(true);
  };

  if (isLoading) {
    return <ClipLoader />;
  }

  if (child.rewardbal === 0) {
    return (
      <div className="rewards-container">
        <Link to="/childhome" className="btn childrewards-back-btn">
          <FaArrowCircleLeft /> Back to Dashboard
        </Link>
        <h1>
          Sorry you don't have any coins yet! Come back when you've completed
          some chores.
        </h1>
      </div>
    );
  }

  return (
    <div className="rewards-container">
      <Link to="/childhome" className="btn childrewards-back-btn">
        <FaArrowCircleLeft /> Back to Dashboard
      </Link>

      {rewardRedeemed && (
        <h2>Congratulations you're claimed your reward! Enjoy!</h2>
      )}

      <GoldCoins coins={child.rewardbal} titleText={"Your Coin Bank"} />
      <h1>Let's help you spend those Shiny Gold Coins...</h1>

      <RewardList
        rewards={rewards}
        child={child}
        updateChildBalance={updateChildBalance}
      />
    </div>
  );
}

export default ChildRewards;
