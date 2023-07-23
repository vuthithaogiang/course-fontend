import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Rating.module.scss';

const cx = classNames.bind(styles);

function HalfStar() {
    return (
        <span className={cx('wrap-half-star')}>
            <img src={images.starIon} alt="icon" />
            <img src={images.halfStar} alt="icon" />
        </span>
    );
}

export default HalfStar;
