import classNames from 'classnames/bind';
import styles from './Introduction.module.scss';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Introduction() {
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <div className={cx('sale-off')}>
                        {/* <span>50% OFF</span> */}
                        <span>Lastest information</span>
                    </div>
                    <h2>
                        Access to <strong>Soccer </strong> information
                    </h2>
                    <p className={cx('description')}>
                        You can access soccer related information, schedules of matches, player galleries, top scores,
                        and so on.
                    </p>
                    <div className={cx('explore-course')} onClick={() => navigate('/players')}>
                        <span>View Players</span>
                        <img src={images.arrowIcon} alt="icon" />
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('round-one')}>
                        <div className={cx('round-two')}>
                            <div className={cx('round-three')}>
                                <figure>
                                    <img src={images.decoration8} alt="player" />
                                </figure>
                            </div>
                        </div>
                        <img className={cx('thumb')} src={images.decoration1} alt="decoration" />
                        <div className={cx('sts-mentor')}>
                            <div className={cx('icon')}>
                                <img src={images.mentorIcon} alt="icon" />
                            </div>
                            <div className={cx('content')}>
                                <span>20</span>
                                <span>Expert Mentors</span>
                            </div>
                        </div>
                        <div className={cx('sts-course')}>
                            <div className={cx('icon')}>
                                <img src={images.courseIcon} alt="icon" />
                            </div>
                            <div className={cx('content')}>
                                <span>100+</span>
                                <span>Players</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
