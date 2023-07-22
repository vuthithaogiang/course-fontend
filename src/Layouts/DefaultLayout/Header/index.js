import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Eduka" />
                    <span>Eduka.</span>
                </div>
                <div className={cx('group-actions')}>
                    <div className={cx('action-item', 'active')}>Home</div>
                    <div className={cx('action-item')}>About</div>
                    <div className={cx('action-item')}>Course</div>
                    <div className={cx('action-item')}>Blog</div>
                    <div className={cx('action-item')}>Contact</div>
                </div>
                <div className={cx('login-btns')}>
                    <button>Sign in</button>
                    <button>Sign up</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
