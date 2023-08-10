import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faGear, faCartShopping, faQuestion, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();

    const { auth } = useAuth();

    const USER_MENU = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faIdBadge} />,
            title: 'My Account',
            // to: auth.role.toLowerCase() ? `/${auth.role.toLowerCase()}/profile` : '/',
        },
        {
            icon: <FontAwesomeIcon icon={faQuestion} />,
            title: 'Feedback & Helps',
            to: '/feedback-and-help',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Sign out',
            separate: true,
        },
    ];

    const [typeMenu, setTypeMenu] = useState('home');

    useEffect(() => {}, [auth.email]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div
                    className={cx('logo')}
                    onClick={() => {
                        setTypeMenu('home');
                        navigate('/');
                    }}
                >
                    <img src={images.logo1} alt="Eduka" />
                    <span>Hà Nội Club.</span>
                </div>
                <div className={cx('group-actions')}>
                    <div
                        className={typeMenu === 'home' ? cx('action-item', 'active') : cx('action-item')}
                        onClick={() => {
                            setTypeMenu('home');
                            navigate('/');
                        }}
                    >
                        Home
                    </div>
                    <div
                        className={typeMenu === 'about' ? cx('action-item', 'active') : cx('action-item')}
                        onClick={() => {
                            setTypeMenu('about');
                            navigate('/about-us');
                        }}
                    >
                        About
                    </div>
                    <div
                        className={typeMenu === 'players' ? cx('action-item', 'active') : cx('action-item')}
                        onClick={() => {
                            setTypeMenu('players');
                            navigate('/players');
                        }}
                    >
                        Players
                    </div>
                    <div
                        className={typeMenu === 'matches' ? cx('action-item', 'active') : cx('action-item')}
                        onClick={() => {
                            setTypeMenu('matches');
                        }}
                    >
                        Matches
                    </div>
                    <div
                        className={typeMenu === 'contact' ? cx('action-item', 'active') : cx('action-item')}
                        onClick={() => {
                            setTypeMenu('contact');
                        }}
                    >
                        Products
                    </div>
                </div>
                {auth?.accessToken ? (
                    <>
                        <div className={cx('current-user')}>
                            <span className={cx('cart')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </span>
                            <Menu items={USER_MENU}>
                                <span className={cx('name-user')}>{auth.firstName.slice(0, 1).toUpperCase()}</span>
                            </Menu>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={cx('login-btns')}>
                            <button onClick={() => navigate('/sign-in')}>Sign in</button>
                            <button onClick={() => navigate('/sign-up')}>Sign up</button>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
