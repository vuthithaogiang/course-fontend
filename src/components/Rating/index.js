import classNames from 'classnames/bind';
import styles from './Rating.module.scss';
import EmptyStar from './EmptyStar';
import FullStar from './FullStar';
import HalfStar from './HalftStar';

const cx = classNames.bind(styles);

function Rating({ value }) {
    const stars = Array.from({ length: value }, () => <EmptyStar />);
    let i;
    for (i = 0; i < value; i++) {
        // this will loop Math.floor(value) times
        stars[i] = <FullStar />;
    }

    if (value % 1 !== 0)
        // if value is a decimal, add a half star
        stars[i - 1] = <HalfStar />;

    return <div className={cx('wrapper')}>{stars}</div>;
}

export default Rating;
