import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>Profile</div>
        </div>
    );
}

export default Profile;
