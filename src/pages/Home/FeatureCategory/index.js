import classNames from 'classnames/bind';
import styles from './FeatureCategory.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function FeatureCategory() {
    const FEATURE_CATEGORY = [
        {
            id: 1,
            title: 'Design',
            thumb: images.categoryDesign,
        },
        {
            id: 2,
            title: 'Chemistry',
            thumb: images.categoryChemistry,
        },
        {
            id: 3,
            title: 'Technology',
            thumb: images.categoryTechnology,
        },
        {
            id: 4,
            title: 'Medical',
            thumb: images.categoryMedical,
        },
        {
            id: 5,
            title: 'Mathematics',
            thumb: images.categoryMath,
        },
        {
            id: 6,
            title: 'Food & Recipe',
            thumb: images.categoryFood,
        },
        {
            id: 7,
            title: 'Language',
            thumb: images.categoryLanguage,
        },
        {
            id: 8,
            title: 'Art & Block',
            thumb: images.categoryArtAndBlock,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header>
                    <p>Popular Category</p>
                    <h2>Featured Topics by Category</h2>
                </header>

                <div className={cx('list-category')}>
                    {FEATURE_CATEGORY.map((item) => (
                        <div key={item.id} className={cx('item')}>
                            <img src={item.thumb} alt={item.title} />
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeatureCategory;
