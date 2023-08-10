import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
import Users from '~/components/Users';

const cx = classNames.bind(styles);

function Admin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1>ADMIN</h1>
                <Users />
            </div>
        </div>
    );
}

export default Admin;
