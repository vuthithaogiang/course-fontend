import classNames from 'classnames/bind';
import styles from './ChooseUs.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ChooseUs() {
    const items = [
        {
            id: 1,
            title: 'One-by one Teaching',
            icon: images.peopleIcon,
            desc: 'All of our special education experts have a degree in special education',
        },
        {
            id: 2,
            title: '24/7 Tutor Availablity',
            icon: images.clockIcon,
            desc: 'All of our special education experts have a degree in special education',
        },
        {
            id: 3,
            title: 'Interactive Whitebook',
            icon: images.calendarIcon,
            desc: 'All of our special education experts have a degree in special education',
        },
        {
            id: 4,
            title: 'Affordable Prices',
            icon: images.moneyIcon,
            desc: 'All of our special education experts have a degree in special education',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header>
                    <p>Why Choose Us</p>
                    <h2>A Choice That Makes The Differece</h2>
                </header>

                <div className={cx('list-item')}>
                    {items.map((item) => (
                        <div key={item.id} className={cx('item-details')}>
                            <div className={cx('wrap-icon')}>
                                <img src={item.icon} alt="icon" />
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;
