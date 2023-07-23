import classNames from 'classnames/bind';
import styles from './EducationNews.module.scss';
import { useRef, useState } from 'react';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function EducationNews() {
    const categorys = ['All', 'Art', 'Business', 'Career'];
    const LIST_NEWS = [
        {
            id: 1,
            type: 'Business',
            thumbnail: images.newImage1,
            createAt: 'October 29, 2122',
            name: 'Take Your Career to the Next Level Future',
            author: {
                name: 'Alex Perter',
                avatar: images.avatar1,
            },
        },
        {
            id: 2,
            type: 'Art',
            thumbnail: images.newImage2,
            createAt: 'October 29, 2122',
            name: 'Take Your Career to the Next Level Future',
            author: {
                name: 'Alex Perter',
                avatar: images.avatar2,
            },
        },
        {
            id: 3,
            type: 'Art',
            thumbnail: images.newImage3,
            createAt: 'October 29, 2122',
            name: 'Take Your Career to the Next Level Future',
            author: {
                name: 'Alex Perter',
                avatar: images.avatar2,
            },
        },
        {
            id: 4,
            type: 'Art',
            thumbnail: images.newImage1,
            createAt: 'October 29, 2122',
            name: 'Take Your Career to the Next Level Future',
            author: {
                name: 'Alex Perter',
                avatar: images.avatar1,
            },
        },
        {
            id: 5,
            type: 'Art',
            thumbnail: images.newImage3,
            createAt: 'October 29, 2122',
            name: 'Take Your Career to the Next Level Future',
            author: {
                name: 'Alex Perter',
                avatar: images.avatar1,
            },
        },
        {
            id: 6,
            type: 'Career',
            thumbnail: images.newImage3,
            createAt: 'October 29, 2122',
            name: 'Take Your Career to the Next Level Future',
            author: {
                name: 'Alex Perter',
                avatar: images.avatar1,
            },
        },
    ];

    const [category, setCategory] = useState('All');
    const sliderRef = useRef();
    const [isDragStart, setIsDragStart] = useState(false);
    const [prePageX, setPrePageX] = useState(0);
    const [preScrollLeft, setPreScrollLeft] = useState(0);

    const dragStart = (e) => {
        setIsDragStart(true);
        setPrePageX(e.pageX);
        setPreScrollLeft(sliderRef.current.scrollLeft);
    };

    const dragStop = () => {
        setIsDragStart(false);
    };

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prePageX;
        sliderRef.current.scrollLeft = preScrollLeft - positionDiff;
        // console.log(e.pageX);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header>
                    <p>Lastest News</p>
                    <h2>Education news all over the world.</h2>
                </header>
                <div className={cx('category')}>
                    {categorys.map((c) => (
                        <span
                            className={c === category ? cx('type-category', 'active') : cx('type-category')}
                            onClick={() => setCategory(c)}
                        >
                            {c}
                        </span>
                    ))}
                </div>

                <div className={cx('carousel')}>
                    <div
                        className={cx('list-news')}
                        ref={sliderRef}
                        onMouseMove={dragging}
                        onMouseDown={dragStart}
                        onMouseUp={dragStop}
                    >
                        {category === 'All' ? (
                            <>
                                {LIST_NEWS.map((item) => (
                                    <div className={cx('news-item')}>
                                        <img className={cx('thumb')} src={item.thumbnail} alt={item.name} />
                                        <div className={cx('date-publish')}>
                                            <span className={cx(`${item.type}`)}>{item.type}</span>
                                            <span>{item.createAt}</span>
                                        </div>
                                        <h4>{item.name}</h4>
                                        <div className={cx('desc-author')}>
                                            <img src={item.author.avatar} alt={item.author.name} />
                                            <span className={cx('name-author')}>{item.author.name}</span>
                                            <span className={cx('author')}>Author</span>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                {LIST_NEWS.filter((i) => i.type === category).map((item) => (
                                    <div className={cx('news-item')}>
                                        <img className={cx('thumb')} src={item.thumbnail} alt={item.name} />
                                        <div className={cx('date-publish')}>
                                            <span className={cx(`${item.type}`)}>{item.type}</span>
                                            <span>{item.createAt}</span>
                                        </div>
                                        <h4>{item.name}</h4>
                                        <div className={cx('desc-author')}>
                                            <img src={item.author.avatar} alt={item.author.name} />
                                            <span className={cx('name-author')}>{item.author.name}</span>
                                            <span className={cx('author')}>Author</span>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>

                <div className={cx('btn')}>
                    <span>Browse All News</span>
                    <img src={images.arrowIcon} alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default EducationNews;
