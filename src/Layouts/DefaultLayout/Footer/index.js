import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('subcribe')}>
                    <h2>Subscribe Newsletters</h2>
                    <p>Enter your email address to register to our newsletter</p>
                    <div className={cx('form-group')}>
                        <input placeholder="Your email" />
                        <button>Sign Up</button>
                    </div>
                </div>

                <div className={cx('group-action')}>
                    {/* 1 */}
                    <div>
                        <span className={cx('logo')}>
                            <img src={images.logo} alt="Eduka" />
                            <span>Eduka.</span>
                        </span>
                        <p>Join our newsletter to stay up to date on features and releases.</p>
                        <div className={cx('btn-send-email')}>
                            <input placeholder="Enter your email" />
                            <button>Subcribe</button>
                        </div>
                    </div>

                    {/* 2 */}
                    <div>
                        <h4>Pages</h4>
                        <h6>Home</h6>
                        <h6>About</h6>
                        <h6>Contact</h6>
                        <h6>Blog</h6>
                        <h6>Courses</h6>
                    </div>
                    {/* 3 */}
                    <div>
                        <h4>CMS Pages</h4>
                        <h6>Blog Post</h6>
                        <h6>Blog Categories</h6>
                        <h6>Courses Single</h6>
                        <h6>Courses categories</h6>
                        <h6>Product Page</h6>
                        <h6>Product Categories</h6>
                    </div>

                    {/* 4 */}
                    <div>
                        <h4>Account Pages</h4>
                        <h6>Log In</h6>
                        <h6>Sign Up</h6>
                        <h6>Forget Password</h6>
                        <h6>Reset Password</h6>
                        <h6>Email Confirmation</h6>
                    </div>

                    {/* 5 */}
                    <div>
                        <h4>Utility Pages</h4>
                        <h6>Licenses</h6>
                        <h6>404</h6>
                        <h6>Password</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
