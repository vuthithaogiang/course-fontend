import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from '~/api/axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);
const REGISTER_URL = '/auth/register';

const USER_REGEX = /^[A-z][A-z0-9-_]{1,9}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // eslint-disable-line
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;

function SignUp() {
    const navigate = useNavigate();
    const [hiddenPassword, setHiddenPassword] = useState(true);
    const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true);
    const firstNameRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [success, setSuccess] = useState(false);

    const notifyError = (message) => {
        toast.error(`${message}! 🎉`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const notifySuccess = (message) => {
        toast.success(`${message}! 🎉`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    useEffect(() => {
        if (success === false) {
            firstNameRef.current.focus();
        }
    }, [success]);

    useEffect(() => {
        const result = USER_REGEX.test(firstName);
        setValidFirstName(result);
    }, [firstName]);

    useEffect(() => {
        const result = USER_REGEX.test(lastName);
        setValidLastName(result);
    }, [lastName]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        setValidPassword(result);

        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        //if button enabled with JS hack
        const v1 = USER_REGEX.test(firstName);
        const v2 = USER_REGEX.test(lastName);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = PWD_REGEX.test(password);

        if (!v1 || !v2 || !v3 || !v4) {
            notifyError('Invalid Entry');
            return;
        }

        try {
            const body = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                role: 'USER',
            };
            const response = await axios.post(REGISTER_URL, body);
            console.log(response);

            console.log(response.data);
            setSuccess(true);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setMatchPassword('');
            notifySuccess('Register successfully');
        } catch (error) {
            if (!error?.response || error.response?.status === 404) {
                notifyError('No Server Response');
            } else if (error.response?.status === 403) {
                notifyError('User name Taken');
            } else {
                notifyError('Register failed');
            }
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('left')}>
                        <div className={cx('logo')} onClick={() => navigate('/')}>
                            <img src={images.logo} alt="Eduka." />
                            <span>Eduka.</span>
                        </div>
                        {success === false ? (
                            <>
                                <div className={cx('form-group')}>
                                    <h2>Welcome to Eduka!</h2>
                                    <p>Welcome back, please enter your details.</p>
                                    <div className={cx('login-with-google')}>
                                        <img src={images.googleIcon} alt="goole" />
                                        <span>Log in with Google</span>
                                    </div>

                                    <span className={cx('seperate')}>
                                        <span></span>
                                        <span>OR</span>
                                        <span></span>
                                    </span>

                                    <form method="post" onSubmit={handleSubmit}>
                                        <div className={cx('form-input')}>
                                            <input
                                                placeholder="First name"
                                                type="text"
                                                name="firstName"
                                                ref={firstNameRef}
                                                autoComplete="off"
                                                required
                                                onChange={(e) => setFirstName(e.target.value)}
                                                value={firstName}
                                                onFocus={() => setFirstNameFocus(true)}
                                                onBlur={() => setFirstNameFocus(false)}
                                            />
                                            <p
                                                className={
                                                    firstNameFocus && firstName && !validFirstName
                                                        ? cx('form-error')
                                                        : cx('form-error', 'off-screen')
                                                }
                                            >
                                                Please enter this field 2 to 10 characters!
                                            </p>
                                        </div>
                                        <div className={cx('form-input')}>
                                            <input
                                                placeholder="Last name"
                                                type="text"
                                                autoComplete="off"
                                                name="lastName"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                required
                                                onFocus={() => setLastNameFocus(true)}
                                                onBlur={() => setLastNameFocus(false)}
                                            />
                                            <p
                                                className={
                                                    lastNameFocus && lastName && !validLastName
                                                        ? cx('form-error')
                                                        : cx('form-error', 'off-screen')
                                                }
                                            >
                                                Please enter this field 3 to 10 characters!
                                            </p>
                                        </div>
                                        <div className={cx('form-input')}>
                                            <input
                                                placeholder="Email"
                                                type="email"
                                                name="email"
                                                required
                                                autoComplete="off"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                onFocus={() => setEmailFocus(true)}
                                                onBlur={() => setEmailFocus(false)}
                                            />
                                            <p
                                                className={
                                                    emailFocus && email && !validEmail
                                                        ? cx('form-error')
                                                        : cx('form-error', 'off-screen')
                                                }
                                            >
                                                Email invalid!
                                            </p>
                                        </div>
                                        <div className={cx('form-input')}>
                                            <input
                                                placeholder="Password"
                                                type={hiddenPassword === true ? 'password' : 'text'}
                                                name="password"
                                                required
                                                autoComplete="off"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                onFocus={() => setPasswordFocus(true)}
                                                onBlur={() => setPasswordFocus(false)}
                                            />
                                            <FontAwesomeIcon
                                                icon={faEye}
                                                onClick={() => setHiddenPassword((hiddenPassword) => !hiddenPassword)}
                                            />
                                            <p
                                                className={
                                                    passwordFocus && password && !validPassword
                                                        ? cx('form-error')
                                                        : cx('form-error', 'off-screen')
                                                }
                                            >
                                                Must include 6-24 characters: u & l case, number and special!
                                            </p>
                                        </div>

                                        <div className={cx('form-input')}>
                                            <input
                                                placeholder="Confirm password"
                                                type={hiddenConfirmPassword === true ? 'password' : 'text'}
                                                autoComplete="off"
                                                required
                                                value={matchPassword}
                                                onChange={(e) => setMatchPassword(e.target.value)}
                                                onFocus={() => setMatchFocus(true)}
                                                onBlur={() => setMatchFocus(false)}
                                            />
                                            <FontAwesomeIcon
                                                icon={faEye}
                                                onClick={() =>
                                                    setHiddenConfirmPassword((hiddenPassword) => !hiddenPassword)
                                                }
                                            />
                                            <p
                                                className={
                                                    matchFocus && matchPassword && !validMatch
                                                        ? cx('form-error')
                                                        : cx('form-error', 'off-screen')
                                                }
                                            >
                                                Password not match!
                                            </p>
                                        </div>
                                        <button
                                            className={cx('btn-signup')}
                                            disabled={
                                                !validFirstName || !validLastName || !validEmail || !validMatch
                                                    ? true
                                                    : false
                                            }
                                        >
                                            Sign up
                                        </button>

                                        <div className={cx('navigate')}>
                                            <span>Already have an account?</span>
                                            <span onClick={() => navigate('/sign-in')}>Sign in</span>
                                        </div>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cx('nofication-success')}>
                                    <span className={cx('wrap-icon')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <h2>Successfully!</h2>
                                    <p>
                                        Thank you for register account. Now, Let's start learning with Eduka by log in
                                        below.
                                    </p>
                                    <span className={cx('go-to-signin')} onClick={() => navigate('/sign-in')}>
                                        <button>Go to Sign in</button>
                                        <img src={images.arrowIcon} alt="icon" />
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                    <div className={cx('right')}>
                        <img src={images.thumbnailLogIn} alt="sign up" />
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            ></ToastContainer>
        </>
    );
}

export default SignUp;
