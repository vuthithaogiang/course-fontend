import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')} onClick={() => navigate('/')}>
                    <img src={images.logo} alt="Eduka" />
                    <span>Eduka.</span>
                </div>
                <div className={cx('group-actions')}>
                    <div className={cx('action-item', 'active')}>Home</div>
                    <div className={cx('action-item')} onClick={() => navigate('/about-us')}>
                        About
                    </div>
                    <div className={cx('action-item')}>Course</div>
                    <div className={cx('action-item')}>Blog</div>
                    <div className={cx('action-item')}>Contact</div>
                </div>
                <div className={cx('login-btns')}>
                    <button onClick={() => navigate('/sign-in')}>Sign in</button>
                    <button onClick={() => navigate('/sign-up')}>Sign up</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
