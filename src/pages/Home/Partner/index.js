import classNames from 'classnames/bind';
import styles from './Partner.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Partner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('list-partner')}>
                    <img src={images.google} alt="google" />
                    <img src={images.slack} alt="slack" />
                    <img src={images.amazon} alt="amazon" />
                    <img src={images.hubspot} alt="hubspot" />
                    <img src={images.gusto} alt="gusto" />
                </div>
            </div>
        </div>
    );
}

export default Partner;
