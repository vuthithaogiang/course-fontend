import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Rating.module.scss';

const cx = classNames.bind(styles);

function EmptyStar() {
    return (
        <span className={cx('wrap-empty-star')}>
            <img src={images.halfStar} alt="icon" />
            <img src={images.halfStar} alt="icon" />
        </span>
    );
}

export default EmptyStar;
