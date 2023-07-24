import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';

const cx = classNames.bind(styles);

function SignUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>sign up</div>
        </div>
    );
}

export default SignUp;
