import classNames from 'classnames/bind';
import styles from './OurCourses.module.scss';
import images from '~/assets/images';
import CourseItem from '~/components/CourseItem';
import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);

function OurCourses() {
    const courses = [
        {
            name: 'Teach Your Kids Math In The Simple Way',
            thumbnail: images.courseKidMath,
            numberOfLessons: 42,
            rating: 5,
            id: 1,
        },
        {
            name: 'Learn Coding in the most Easiest Way',
            thumbnail: images.courseCoding,
            numberOfLessons: 24,
            rating: 4,
            id: 2,
        },
        {
            name: 'Learn Geography with Fun & Exciting Way',
            thumbnail: images.courseGeography,
            numberOfLessons: 12,
            rating: 4.5,
            id: 3,
        },
        {
            name: 'Kid’s English Native Spoken & Grammer',
            thumbnail: images.courseKidEnglish,
            numberOfLessons: 42,
            rating: 5,
            id: 4,
        },
        {
            name: 'Teach Your Kids Math In The Simple Way',
            thumbnail: images.courseKidMath,
            numberOfLessons: 42,
            rating: 4,
            id: 5,
        },
        {
            name: 'Learn Coding in the most Easiest Way',
            thumbnail: images.courseCoding,
            numberOfLessons: 24,
            rating: 5,
            id: 6,
        },
        {
            name: 'Learn Geography with Fun & Exciting Way',
            thumbnail: images.courseGeography,
            numberOfLessons: 12,
            rating: 5,
            id: 7,
        },
        {
            name: 'Kid’s English Native Spoken & Grammer',
            thumbnail: images.courseKidEnglish,
            numberOfLessons: 42,
            rating: 5,
            id: 8,
        },
        {
            name: 'Kid’s English Native Spoken & Grammer',
            thumbnail: images.courseKidEnglish,
            numberOfLessons: 42,
            rating: 5,
            id: 9,
        },
    ];
    const [indexCourse, setIndexCourse] = useState(1);
    const maxCourse = courses.length;

    const sliderRef = useRef();
    const [start, setStart] = useState(0);
    const [width, setWidth] = useState(0);
    const [change, setChange] = useState(maxCourse);
    const [state, setState] = useState('');

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

        setIndexCourse((prev) => prev + n);
        console.log(indexCourse);

        slideShow(indexCourse + n);
    }

    function slideShow(n) {
        if (n > maxCourse) {
            setIndexCourse(1);
        }
        if (n < 1) {
            setIndexCourse(maxCourse);
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
            sliderRef.current.scrollLeft -= width * 2;
        }
        if (state === 'next') {
            console.log(state);
            sliderRef.current.scrollLeft += width * 2;
        }
        // console.log(indexCourse);

        // sliderRef.current.scrollLeft = (indexCourse - 1) * width * 2;
    }, [width, indexCourse, state]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header>
                    <p>Our course</p>
                    <h2>Browse Our Best Courses</h2>
                </header>
                <div className={cx('course-carousel')}>
                    <div className={cx('actions')}>
                        <div className={cx('pre-btn')} onClick={() => plusSlides(-1)}>
                            <img src={images.preIcon} alt="icon" />
                        </div>
                        <div className={cx('next-btn')} onClick={() => plusSlides(1)}>
                            <img src={images.nextIcon} alt="icon" />
                        </div>
                    </div>
                    <div className={cx('wrap-course')}>
                        <div
                            className={cx('list-course')}
                            ref={sliderRef}
                            draggable={true}
                            onDragStart={dragStart}
                            onDragOver={dragOver}
                            onDragEnd={dragEnd}
                        >
                            {courses.map((course, index) => (
                                <CourseItem key={index} courseInfo={course} index={indexCourse} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('view-all')}>
                    <span>Browse all News</span>
                    <img src={images.arrowIcon} alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default OurCourses;
