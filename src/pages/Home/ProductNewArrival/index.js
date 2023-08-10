import classNames from 'classnames/bind';
import styles from './ProductNewArrival.module.scss';
import { useRef, useState } from 'react';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ProductNewArrival() {
    const categorys = ['All', 'T-shirt', 'Short', 'Sock'];
    const LIST_PRODUCTS = [
        {
            id: 1,
            type: 'T-shirt',
            thumbnail:
                'https://images.footballfanatics.com/manchester-united/manchester-united-wsl-adidas-third-shirt-2023-24-kids-with-naalsund-16-printing_ss5_p-14408897+u-c3h9ulmpniroc9npnolm+v-dw0y1gox6vdowi80rqkk.jpg?_hv=2&w=340',
            createAt: 'October 29, 2122',
            name: 'Shirt Adidas Authentic change short 2023-34',
            price: 100,
        },
        {
            id: 2,
            type: 'T-shirt',
            thumbnail:
                'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-third-shirt-2023-24-kids-with-bfernandes-8-printing_ss5_p-14406843+u-09qnpuo0breeezif03uw+v-hq5jirjyh95jb90pamao.jpg?_hv=2&w=340',
            createAt: 'October 29, 2122',
            name: 'Shirt Adidas Authentic change short 2023-34',
            price: 100,
        },
        {
            id: 3,
            type: 'Short',
            thumbnail:
                'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-third-shorts-2023-24_ss5_p-13384984+u-6jbdrn6mcmljborribwo+v-xb4lvwd8ldyhhl1ivvlv.jpg?_hv=2&w=340',
            createAt: 'October 29, 2122',
            name: 'Short Adidas Authentic change short 2023-34',
            price: 100,
        },
        {
            id: 4,
            type: 'Short',
            thumbnail:
                'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-third-shorts-2023-24-kids_ss5_p-13384942+u-oldhd8jkiffguq7xjwor+v-h1liz1vij71wehq6eulj.jpg?_hv=2&w=340',
            createAt: 'October 29, 2122',
            name: 'Short Adidas Authentic change short 2023-34',
            price: 100,
        },
        {
            id: 5,
            type: 'Sock',
            thumbnail:
                'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-third-socks-2023-24_ss5_p-14403138+u-ud2f07wyqcwrgcfirx5q+v-eg0bayrzi7ntg6qgtwih.jpg?_hv=2&w=340',
            createAt: 'October 29, 2122',
            name: 'Sock Adidas Authentic change short 2023-34',
            price: 10,
        },
        {
            id: 6,
            type: 'T-shirt',
            thumbnail:
                'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-third-shirt-2023-24-long-sleeve-with-fred-17-printing_ss5_p-14406790+u-jl8123ijmkbjb7pzkf3r+v-irenwywrwitbxs3en4kz.jpg?_hv=2&w=340',
            createAt: 'October 29, 2122',
            name: 'Sock Adidas Authentic change short 2023-34',

            price: 100,
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
                    <p>New Arrival</p>
                    <h2>Products all over the world.</h2>
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
                                {LIST_PRODUCTS.map((item) => (
                                    <div className={cx('news-item')} key={item.id}>
                                        <img className={cx('thumb')} src={item.thumbnail} alt={item.name} />
                                        <div className={cx('date-publish')}>
                                            <span className={cx(`${item.type}`)}>{item.type}</span>
                                            <span>{item.createAt}</span>
                                            <span className={cx('price')}>${item.price}</span>
                                        </div>
                                        <h4>{item.name}</h4>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                {LIST_PRODUCTS.filter((i) => i.type === category).map((item) => (
                                    <div className={cx('news-item')}>
                                        <img className={cx('thumb')} src={item.thumbnail} alt={item.name} />
                                        <div className={cx('date-publish')}>
                                            <span className={cx(`${item.type}`)}>{item.type}</span>
                                            <span>{item.createAt}</span>
                                            <span className={cx('price')}>${item.price}</span>
                                        </div>
                                        <h4>{item.name}</h4>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>

                <div className={cx('btn')}>
                    <span>Go to Shop</span>
                    <img src={images.arrowIcon} alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default ProductNewArrival;
