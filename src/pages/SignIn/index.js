import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import axios from '~/api/axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import useAuth from '~/hooks/useAuth';
import { useLocation } from 'react-router-dom';

const LOGIN_URL = '/auth/authentication';

const cx = classNames.bind(styles);

function SignIn() {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [state, setState] = useState('login');
    const [otp, setOtp] = useState(new Array(4).fill(''));
    const [emailReceiveOtp, setEmailReceiveOtp] = useState('');
    const [indexActive, setIndexActive] = useState(0);

    const emailRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        emailRef.current.focus();
    }, [state]);

    useEffect(() => {}, [email, password]);

    const handleChangeOtp = (element, index) => {
        if (isNaN(element.value)) return false;
        setIndexActive(index);
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    // const clear = (e) => {
    //     setOtp([...otp.map((v) => '')]);
    // };

    const handleResetPassword = (type) => {
        if (emailReceiveOtp.trim() === '') {
            alert('Enter email first!');
            return;
        }

        setState(type);
    };

    const handleFocus = (e, index) => {
        e.target.select();
        setIndexActive(index);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = {
                email: email,
                password: password,
            };
            const response = await axios.post(LOGIN_URL, body, {
                headers: { 'Content-Type': 'application/json' },
                //withCredentials: true,
            });

            // console.log(response?.data);
            const accessToken = response?.data?.access_token;
            const refreshToken = response?.data?.refresh_token;
            const role = response?.data?.role;

            const data = {
                email: email,
                password: password,
                accessToken: accessToken,
                refreshToken: refreshToken,
                role: role,
            };

            console.log(data);

            setAuth(data);

            setEmail('');
            setPassword('');

            notifySuccess('Log in successfully!');
            navigate(from, { replace: true });
        } catch (error) {
            if (!error?.response) {
                notifyError('No Server Response');
            } else if (error.response?.status === 400) {
                notifyError('Missing email or password');
            } else if (error.response?.status === 403) {
                notifyError('Unauthorited!');
            } else {
                notifyError('Log in Failed!');
            }
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('left')}>
                        <div className={cx('logo')} onClick={() => navigate('/')}>
                            <img src={images.logo} alt="Eduka" />
                            <span>Eduka.</span>
                        </div>
                        {state === 'login' && (
                            <>
                                <div className={cx('form-group')}>
                                    <h2>Welcome Back!</h2>
                                    <p>Welcomr back, please enter your details.</p>
                                    <div className={cx('wrap-login')}>
                                        <div className={cx('login-with-goole')}>
                                            <img src={images.googleIcon} alt="google" />
                                            <span>Log in with Google</span>
                                        </div>
                                    </div>
                                    <span className={cx('separate')}>
                                        <span></span>
                                        <span>OR</span>
                                        <span></span>
                                    </span>

                                    <form onSubmit={handleSubmit}>
                                        <input
                                            className={cx('form-input')}
                                            placeholder="Email"
                                            type="email"
                                            ref={emailRef}
                                            autoComplete="off"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            required
                                        />

                                        <input
                                            className={cx('form-input')}
                                            placeholder="Password"
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        <div className={cx('group-checkbox')}>
                                            <div>
                                                <input type="checkbox" id="remember-me" />
                                                <label htmlFor="remember-me">Remenber for 30 days</label>
                                            </div>
                                            <span onClick={() => setState('forgot-password')}>Forgot Password</span>
                                        </div>
                                        <button className={cx('btn-login')}>Log in</button>
                                    </form>
                                    <div className={cx('navigate')}>
                                        <span>Don't have an account?</span>
                                        <span onClick={() => navigate('/sign-up')}>Sign up for free.</span>
                                    </div>
                                </div>
                            </>
                        )}

                        {state === 'forgot-password' && (
                            <>
                                <div className={cx('form-group')}>
                                    <h2>Forgot Password</h2>
                                    <p>
                                        Enter your email below and we’ll send you instructions on how to reset your
                                        password.
                                    </p>

                                    <input
                                        className={cx('form-input')}
                                        placeholder="Email"
                                        value={emailReceiveOtp}
                                        onChange={(e) => setEmailReceiveOtp(e.target.value)}
                                    />
                                    <button
                                        className={cx('btn-login', 'reset-password')}
                                        onClick={() => handleResetPassword('send-new-password')}
                                    >
                                        Reset Password
                                    </button>
                                    <span className={cx('back-to-login')} onClick={() => setState('login')}>
                                        Back to Log in
                                    </span>
                                </div>
                            </>
                        )}

                        {state === 'send-new-password' && (
                            <>
                                <div className={cx('verify-otp')}>
                                    <h2>Email Verification</h2>
                                    <p>You have sent code to your Email {emailReceiveOtp}</p>
                                    <div className={cx('code')}>
                                        {otp.map((data, index) => (
                                            <span key={index}>
                                                <input
                                                    key={index}
                                                    maxLength={'1'}
                                                    type="text"
                                                    className={
                                                        index === indexActive
                                                            ? cx('otp-field', 'active')
                                                            : cx('otp-field')
                                                    }
                                                    name="opt"
                                                    value={data}
                                                    onChange={(e) => handleChangeOtp(e.target, index)}
                                                    onFocus={(e) => handleFocus(e, index)}
                                                    onBlur={() => setIndexActive(null)}
                                                />
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        className={cx('btn-verify')}
                                        onClick={(e) => alert(`Enter OTP: ` + otp.join(''))}
                                    >
                                        Verify Account
                                    </button>
                                    <div className={cx('resend')}>
                                        <span>Didn’t receive code?</span>
                                        <span onClick={() => setState('forgot-password')}>Resend</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className={cx('right')}>
                        <img className={cx('thumb')} src={images.thumbnailLogIn} alt="log in" />
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

export default SignIn;
