import React, { useEffect, useState } from "react";
import dog from "../images/dog.png";
import cat from "../images/cat.png";
import dino from "../images/dino.png";
import rabbit from "../images/rabbit.png";
import medal from "../images/medal.png";

function ChildLeaderboard({ child, children, familyname }) {
  const avatarImg = (avatar) => {
    if (avatar === "cat") {
      return <img src={cat} />;
    }
    if (avatar === "dog") {
      return <img src={dog} />;
    }
    if (avatar === "dinosaur") {
      return <img src={dino} />;
    }
    if (avatar === "rabbit") {
      return <img src={rabbit} />;
    }
  };

  const [childrenSorted, setChildrenSorted] = useState(
    children.slice().sort((a, b) => b.choresdone - a.choresdone)
  );
  const [sortedByChores, setSortedByChores] = useState(true);
  const [sortedByCoins, setSortedByCoins] = useState(false);

  useEffect(() => {
    sortByChores();
  }, [children]);

  const sortByChores = () => {
    setChildrenSorted(
      children.slice().sort((a, b) => b.choresdone - a.choresdone)
    );
    setSortedByChores(true);
    setSortedByCoins(false);
  };

  const sortByCoins = () => {
    setChildrenSorted(
      children.slice().sort((a, b) => b.rewardbal - a.rewardbal)
    );
    setSortedByCoins(true);
    setSortedByChores(false);
  };

  const leaderboard = () => {
    return childrenSorted.map((mapchild, index) => {
      return (
        <div
          className={
            mapchild._id === child._id
              ? "leaderboard-card-accent"
              : "leaderboard-card"
          }
          key={mapchild._id}
        >
          <h1>{mapchild.firstname}</h1>
          {index === 0 ? (
            <img className="leaderboard-medal" src={medal} />
          ) : (
            <></>
          )}
          <div className="leaderboard-avatar">{avatarImg(mapchild.avatar)}</div>
          {sortedByChores && <h2>Chores: {mapchild.choresdone}</h2>}
          {sortedByCoins && <h2>Coins: {mapchild.rewardbal}</h2>}
        </div>
      );
    });
  };

  if (children.length > 1) {
    return (
      <div className="leaderboard-container">
        <h1 className="leaderboard-header">{familyname} Leaderboard</h1>
        <div className="leaderboard-btn-container">
          <button className="btn btn-sm leaderboard-btn" onClick={sortByChores}>
            Chores
          </button>
          <button className="btn btn-sm leaderboard-btn" onClick={sortByCoins}>
            Coins
          </button>
        </div>
        {leaderboard()}
      </div>
    );
  }

  return <></>;
}

export default ChildLeaderboard;
