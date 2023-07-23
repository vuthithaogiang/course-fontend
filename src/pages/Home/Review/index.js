import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Review() {
    const LIST_REVIEW = [
        {
            id: 1,
            thumb: images.review1,
            content:
                'Our experienced team will provide you with practical and professional training in a safe and friendly environment. Join us on a spring break adventure through the world of Higher Education.',
            account: {
                name: 'Miles Esther',
                job: 'Degigner',
                companyLogo: images.companyLogo,
            },
        },
        {
            id: 2,
            thumb: images.review2,
            content:
                'Our experienced team will provide you with practical and professional training in a safe and friendly environment. Join us on a spring break adventure through the world of Higher Education.',
            account: {
                name: 'Smith William',
                job: 'Developer',
                companyLogo: images.companyLogo,
            },
        },
    ];

    const STATS = [
        {
            id: 1,
            number: '360+',
            desc: 'Hours Of Learing',
        },
        {
            id: 2,
            number: '1200+',
            desc: 'Enrolled Learners',
        },
        {
            id: 3,
            number: '650+',
            desc: 'Online Instructors',
        },
        {
            id: 4,
            number: '100%',
            desc: 'Statisfation rate',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header>
                    <p>Student Feedback</p>
                    <h2>What People Say</h2>
                </header>
                <div className={cx('list-review')}>
                    {LIST_REVIEW.map((item) => (
                        <div key={item.id} className={cx('review')}></div>
                    ))}
                </div>
                <div className={cx('stats')}>
                    <div className={cx('stats-item')}></div>
                </div>
            </div>
        </div>
    );
}

export default Review;
