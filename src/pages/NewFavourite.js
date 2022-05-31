import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createFavourite, reset } from "../features/favourites/favouriteSlice";
import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import coin from "../images/coin.png";

function NewFavourite() {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    value: "1",
    icon: "",
  });

  const [titleValid, setTitleValid] = useState(false);
  const [descValid, setDescValid] = useState(false);
  const [iconValid, setIconValid] = useState(false);

  const [formReady, setFormReady] = useState();

  const { title, desc, value, icon } = formData;

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.favourite
  );

  const navigate = useNavigate();

  //REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    checkFormReady();
  }, [titleValid, descValid, iconValid]);

  useEffect(() => {
    validateTitle();
    validateDesc();
    validateIcon();
  }, [formData]);

  useEffect(() => {
    if (isError) {
      toast.error(message, { toastId: "errMsg" });
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/favourites");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const validateTitle = () => {
    setTitleValid(title.length !== 0);
  };
  const validateDesc = () => {
    setDescValid(desc.length !== 0);
  };
  const validateIcon = () => {
    setIconValid(icon.length !== 0);
  };

  const checkFormReady = () => {
    setFormReady(titleValid && descValid && iconValid);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createFavourite(formData));
  };

  const coinDisplay = () => {
    if (value == 1)
      return (
        <div className="coin-container">
          <img className="coin" src={coin} />
        </div>
      );
    if (value == 2) {
      return (
        <div className="coin-container">
          <img className="coin" src={coin} />
          <img className="coin" src={coin} />
        </div>
      );
    }
    if (value == 3) {
      return (
        <div className="coin-container">
          <img className="coin" src={coin} />
          <img className="coin" src={coin} />
          <img className="coin" src={coin} />
        </div>
      );
    }
  };

  if (isLoading) {
    return <ClipLoader />;
  }

  return (
    <>
      <BackButton url="/favourites" />
      <section className="heading">
        <h1>New Chore</h1>
      </section>

      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>
              Title:
              <input
                type="text"
                className={"form-control"}
                name="title"
                value={title}
                placeholder="Tidy your bedroom"
                onChange={onChange}
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
                value={desc}
                placeholder="Clear the floor area and put the toys away! "
                onChange={onChange}
              />
            </label>
          </div>

          <div className="form-group small-width">
            <label htmlFor="value">Value:</label>
            <select
              name="value"
              id="value"
              className="form-control"
              value={value}
              onChange={onChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>

          <div className="form-group small-width">
            <label>
              Emoji:
              <input
                type="text"
                className={"form-control"}
                name="icon"
                value={icon}
                placeholder="🛏️"
                maxLength="3"
                required
                onChange={onChange}
              />
            </label>
          </div>

          <div className="form-group">
            <button
              className={
                formReady
                  ? "btn btn-block btn-success"
                  : "btn btn-block btn-inactive"
              }
            >
              Save
            </button>
          </div>
        </form>

        {icon && coinDisplay()}
        <h1 className="emoji-lg">{icon && icon}</h1>
      </div>
    </>
  );
}

export default NewFavourite;
