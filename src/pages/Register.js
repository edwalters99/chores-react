import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import hero2 from '../images/hero2.jpg';
// Minimum eight characters, at least one letter, one number and one special character:
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
// 4 digits and Numbers only
const PIN_REGEX = /^[0-9]{4}/;

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    familyname: '',
    pin: '',
    password: '',
    passwordconfirm: '',
  });
  const { email, familyname, pin, password, passwordconfirm } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  ); // retrieve from global state (auth)

  const [formReady, setFormReady] = useState(false);
  // for form input background colour
  const [emailValid, setEmailValid] = useState(null);
  const [familyNameValid, setFamilyNameValid] = useState(null);
  const [pinValid, setPinValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordConfirmationValid, setPasswordConfirmationValid] =
    useState(null);

  useEffect(() => {
    const validateFields = () => {
      setEmailValid(validateEmailHelper(email));
      setFamilyNameValid(familyname.length !== 0);
      setPinValid(PIN_REGEX.test(pin));
      setPasswordValid(PASSWORD_REGEX.test(password));
      setPasswordConfirmationValid(
        password === passwordconfirm && passwordconfirm.length > 0
      );
    };
    validateFields();
  }, [email, familyname, pin, password, passwordconfirm]);

  useEffect(() => {
    setFormReady(
      emailValid &&
        familyNameValid &&
        pinValid &&
        passwordValid &&
        passwordConfirmationValid
    );
  }, [
    emailValid,
    familyNameValid,
    pinValid,
    passwordValid,
    passwordConfirmationValid,
  ]);

  useEffect(() => {
    //Error
    if (isError) {
      toast.error(message);
    }

    //Redirect when logged in
    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset()); // reset global error states
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const validateEmailHelper = (email) => {
    // An email address must contain exactly one @
    // An email address must contain at least one full stop (.)
    const atSigns = email.split('').filter((char) => char === '@').length;
    const periods = email.split('').filter((char) => char === '.').length;
    return atSigns === 1 && periods >= 1 && email.length !== 0;
  };

  const validateEmailErrors = () => {
    if (email.length === 0) {
      toast.error('Email address must be entered', { toastId: 'emailNil' }); // toastId used to prevent duplicate alerts on screen
    } else if (!validateEmailHelper(email)) {
      toast.error('Invalid Email address', { toastId: 'emailBad' });
    }
  };

  const validateFamilyNameErrors = () => {
    if (familyname.length === 0) {
      toast.error('Family Name must be entered', { toastId: 'familyNil' });
    }
  };

  const validatePasswordErrors = () => {
    if (password.length === 0) {
      toast.error('Password must be entered', { toastId: 'passwordNil' });
    } else if (!passwordValid) {
      toast.error(
        'Password: Minimum 8 characters: at least 1 letter and 1 number',
        { toastId: 'passwordBad' }
      );
    } else if (passwordconfirm.length === 0) {
      toast.error('Password confirmation must be entered', {
        toastId: 'passConNil',
      });
    } else if (password !== passwordconfirm) {
      toast.error("Passwords don't match!", { toastId: 'passNoMatch' });
    }
  };

  const validatePinErrors = () => {
    if (pin.length !== 4) {
      toast.error('4 Digit PIN required', { toastId: 'pinLength' });
    } else if (!PIN_REGEX.test(pin)) {
      toast.error('PIN must only contain numbers', { toastId: 'pinNumeric' });
    }
  };

  const onChange = (e) => {
    if (e.target.name !== 'familyname') e.target.value = e.target.value.trim();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validateEmailErrors();
    validateFamilyNameErrors();
    validatePinErrors();
    validatePasswordErrors();

    // prepare data for submission
    const userData = {
      email,
      familyname,
      pin,
      password,
    };

    if (
      emailValid &&
      familyNameValid &&
      pinValid &&
      passwordValid &&
      passwordConfirmationValid
    ) {
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <ClipLoader />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account and register your family</p>
      </section>

      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>
              Email:
              <input
                type="text"
                className={
                  emailValid ? 'form-control' : 'form-control form-nonvalid'
                }
                name="email"
                value={email}
                placeholder="e.g. joebloggs@gmail.com"
                onChange={onChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Family Name:
              <input
                type="text"
                className={
                  familyNameValid
                    ? 'form-control'
                    : 'form-control form-nonvalid'
                }
                name="familyname"
                value={familyname}
                placeholder="e.g. The Bloggs Family"
                onChange={onChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              4 Digit PIN (Parent Authorization):
              <input
                type="password"
                className={
                  pinValid ? 'form-control' : 'form-control form-nonvalid'
                }
                name="pin"
                value={[pin]}
                placeholder="e.g. 1234"
                maxLength={4}
                onChange={onChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Password:
              <input
                type="password"
                className={
                  passwordValid ? 'form-control' : 'form-control form-nonvalid'
                }
                name="password"
                value={password}
                placeholder="8 + (at least one number)"
                onChange={onChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Password Confirmation:
              <input
                type="password"
                className={
                  passwordConfirmationValid
                    ? 'form-control'
                    : 'form-control form-nonvalid'
                }
                name="passwordconfirm"
                value={passwordconfirm}
                placeholder="Confirm your password"
                onChange={onChange}
              />
            </label>
          </div>

          <div className="form-group">
            <button
              className={
                formReady
                  ? 'btn btn-block btn-success'
                  : 'btn btn-block btn-inactive'
              }
            >
              Submit
            </button>
          </div>
        </form>
        <img
          className="hero-img"
          src={hero2}
          alt="Children helping with chores in the kitchen."
        />
      </div>
    </>
  );
}

export default Register;
