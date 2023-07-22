import classNames from 'classnames/bind';
import styles from './Introduction.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Introduction() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <div className={cx('sale-off')}>
                        <span>50% OFF</span>
                        <span>Learn From Today</span>
                    </div>
                    <h2>
                        Best <strong>Learning</strong> Platform For Everyone
                    </h2>
                    <p className={cx('description')}>
                        Send your email marketing campaign quickly and easily. Trusted by developers, designers and
                        marketers for time-savings, scalability and price.
                    </p>
                    <div className={cx('explore-course')}>
                        <span>Explore Courses</span>
                        <img src={images.arrowIcon} alt="icon" />
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('round-one')}>
                        <div className={cx('round-two')}>
                            <div className={cx('round-three')}>
                                <figure>
                                    <img src={images.girlLaptop} alt="girl-laptop" />
                                    <img className={cx('decor')} src={images.decoration2} alt="decoration" />
                                </figure>
                            </div>
                        </div>
                        <img className={cx('thumb')} src={images.decoration1} alt="decoration" />
                        <div className={cx('sts-mentor')}>
                            <div className={cx('icon')}>
                                <img src={images.mentorIcon} alt="icon" />
                            </div>
                            <div className={cx('content')}>
                                <span>100+</span>
                                <span>Expert Mentors</span>
                            </div>
                        </div>
                        <div className={cx('sts-course')}>
                            <div className={cx('icon')}>
                                <img src={images.courseIcon} alt="icon" />
                            </div>
                            <div className={cx('content')}>
                                <span>1K+</span>
                                <span>Courses</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
