import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import images from '~/assets/images';
import { useRef, useState, useEffect } from 'react';

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
                '5 years ago, we opened our doors to help students gain admission to the college of their dreams. Over that time, we have shaped the way people get into college so they can learn.',
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
    const [indexReview, setIndexReview] = useState(1);
    const maxReview = LIST_REVIEW.length;
    const [start, setStart] = useState(0);
    const [width, setWidth] = useState(0);
    const [change, setChange] = useState(maxReview);
    const [state, setState] = useState('');

    const sliderRef = useRef();
    function dragStart(e) {
        setStart(e.clientX);
    }

    function dragEnd(e) {
        if (change > 0) {
            sliderRef.current.scollLeft += width;
        } else {
            sliderRef.current.scrollLeft -= width;
        }
    }

    function dragOver(e) {
        let touch = e.clientX;
        setChange(start - touch);
    }

    function plusSlides(n) {
        n === -1 && setState('prev');
        n === 1 && setState('next');

        let numOfthumb = Math.round(sliderRef.current.offsetWidth / width);
        console.log(numOfthumb);

        setIndexReview((prev) => prev + n);
        console.log(indexReview);

        slideShow(indexReview + n);
    }

    function slideShow(n) {
        if (n > maxReview) {
            setIndexReview(1);
        }
        if (n < 1) {
            setIndexReview(maxReview);
        }
    }
    useEffect(() => {
        if (!sliderRef.current) {
            return;
        }
        const scrollWidth = sliderRef.current.scrollWidth;
        const childrenElementCount = sliderRef.current.childElementCount;
        console.log(childrenElementCount);
        const width = scrollWidth / childrenElementCount;
        setWidth(width);
        // console.log(width);
    }, []);

    useEffect(() => {
        if (!sliderRef.current || !width) return;
        //  let numOfthumb = Math.round(sliderRef.current.offsetWidth / width);

        // sliderRef.current.scrollLeft = indexCourse > numOfthumb ? (indexCourse - 1) * width : 0;

        if (state === 'prev') {
            console.log(state);
            sliderRef.current.scrollLeft -= width * 1;
        }
        if (state === 'next') {
            console.log(state);
            sliderRef.current.scrollLeft += width * 1;
        }
        // console.log(indexCourse);

        // sliderRef.current.scrollLeft = (indexCourse - 1) * width * 2;
    }, [width, indexReview, state]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header>
                    <p>Student Feedback</p>
                    <h2>What People Say</h2>
                </header>
                <div
                    className={cx('list-review')}
                    ref={sliderRef}
                    draggable={true}
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                    onDragEnd={dragEnd}
                    onMouseMove={(e) => e.preventDefault()}
                >
                    {LIST_REVIEW.map((item) => (
                        <div key={item.id} className={cx('review')}>
                            <figure className={cx('wrap-thumb')}>
                                <div className={cx('outer-thumb')}>
                                    <img className={cx('thumb')} src={item.thumb} alt={item.account.name} />
                                    <span className={cx('pre-btn')} onClick={() => plusSlides(-1)}>
                                        <img src={images.preIcon} alt="icon" />
                                    </span>
                                    <span className={cx('next-btn')} onClick={() => plusSlides(1)}>
                                        <img src={images.nextIcon} alt="icon" />
                                    </span>
                                </div>
                                <img className={cx('decoration-one')} src={images.decoration4} alt="decor" />
                                <img className={cx('decoration-two')} src={images.decoration5} alt="decor" />
                                <img className={cx('decoration-three')} src={images.decoration6} alt="decor" />
                            </figure>

                            <div className={cx('review-content')}>
                                <img src={images.quoteIcon} alt="icon" />
                                <div className={cx('stars')}>
                                    <img src={images.starBlue} alt="icon" />
                                    <img src={images.starBlue} alt="icon" />
                                    <img src={images.starBlue} alt="icon" />
                                    <img src={images.starBlue} alt="icon" />
                                    <img src={images.starBlue} alt="icon" />
                                </div>
                                <p>{item.content}</p>
                                <div className={cx('account')}>
                                    <div className={cx('desc-account')}>
                                        <span>{item.account.name}</span>
                                        <span>{item.account.job}</span>
                                    </div>
                                    <img src={item.account.companyLogo} alt="logo" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('stats')}>
                    <div className={cx('stats-list')}>
                        {STATS.map((item) => (
                            <div className={cx('stats-item')}>
                                <span>{item.number}</span>
                                <span>{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
