import classNames from 'classnames/bind';
import styles from './CourseItem.module.scss';
import images from '~/assets/images';
import Rating from '../Rating';

const cx = classNames.bind(styles);

function CourseItem({ courseInfo }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('thumb')} src={courseInfo.thumbnail} alt={courseInfo.name} />
            <h4 className={cx('name')}>{courseInfo.name}</h4>
            <div className={cx('group')}>
                <div className={cx('lessons')}>
                    <img src={images.educationIcon} alt="icon" />
                    <span>{courseInfo.numberOfLessons} Lessons</span>
                </div>
                <div className={cx('stars')}>
                    <Rating value={courseInfo.rating} />
                </div>
            </div>
        </div>
    );
}

export default CourseItem;
