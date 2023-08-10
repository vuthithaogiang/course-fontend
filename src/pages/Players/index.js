import classNames from 'classnames/bind';
import styles from './Players.module.scss';

const cx = classNames.bind(styles);

function Players({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('container')}>
                    <div className="">Players</div>
                </div>
            </div>
        </div>
    );
}

export default Players;
