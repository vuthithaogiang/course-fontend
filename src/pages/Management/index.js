import classNames from 'classnames/bind';
import styles from './Management.module.scss';
import Users from '~/components/Users';

const cx = classNames.bind(styles);

function Management() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1> MANAGEMENT</h1>
                <Users />
            </div>
        </div>
    );
}

export default Management;
