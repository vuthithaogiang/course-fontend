import classNames from 'classnames/bind';
import styles from './UpcomingEvent.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function UpcomingEvent() {
    const LIST_EVENTS = [
        {
            id: 1,
            nameEvent: 'Education Autumn Tour 2022',
            thumbnail: images.eventImage1,
            date: '🔥 15 April',
            location: 'Berlin, Germany',
            time: '07.00-05.00',
        },
        {
            id: 2,
            nameEvent: 'Education Autumn Tour 2022',
            thumbnail: images.eventImage2,
            date: '📘 05 May',
            location: 'Berlin, Germany',
            time: '07.00-05.00',
        },
        {
            id: 3,
            nameEvent: 'Education Autumn Tour 2022',
            thumbnail: images.eventImage3,
            date: '🚀 25 October',
            location: 'Berlin, Germany',
            time: '07.00-05.00',
        },
        {
            id: 4,
            nameEvent: 'Education Autumn Tour 2022',
            thumbnail: images.eventImage4,
            date: '✍️ 18 August',
            location: 'Berlin, Germany',
            time: '07.00-05.00',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header>
                    <p>Shedule Of Event</p>
                    <h2>Upcoming Events</h2>
                    <p className={cx('desc')}>
                        Whether it's a live or recorded course you want to create, Airschool is the short and easy
                        answer. With Airschool
                    </p>
                </header>

                <div className={cx('list-event')}>
                    {LIST_EVENTS.map((item) => (
                        <div key={item.id} className={cx('event')}>
                            <img className={cx('thumb-event')} src={item.thumbnail} alt={item.nameEvent} />
                            <div className={cx('info-event')}>
                                <div className={cx('date-in')}>{item.date} </div>
                                <h4>{item.nameEvent}</h4>
                                <div className={cx('time-and-location')}>
                                    <div className={cx('time')}>
                                        <img src={images.clockIcon1} alt="icon" />
                                        <span>{item.time}</span>
                                    </div>
                                    <div className={cx('location')}>
                                        <img src={images.locationIcon} alt="icon" />
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <img className={cx('img-decor')} src={images.decoration3} alt="decoration" />
                </div>

                <div className={cx('btn')}>
                    <span>More Events</span>
                    <img src={images.arrowIcon} alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default UpcomingEvent;
