import classNames from 'classnames/bind';
import styles from './Unauthorized.module.scss';

const cx = classNames.bind(styles);

function Unauthorized() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1>404</h1>
                <p>Not True Role</p>
            </div>
        </div>
    );
}

export default Unauthorized;
