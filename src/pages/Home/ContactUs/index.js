import classNames from 'classnames/bind';
import styles from './ContactUs.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ContactUs() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <p>Contact Us</p>
                    <h2>Ready to get started?</h2>
                    <p className={cx('desc')}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form. There are many variations of passages of Lorem Ipsum available.
                    </p>
                    <span className={cx('action-btn')}>Get In Touch</span>
                </div>
                <div className={cx('right')}>
                    <div className={cx('container')}>
                        <figure>
                            <img className={cx('thumb')} src={images.review2} alt="thumb" />
                        </figure>
                        <div className={cx('background')}></div>
                        <img className={cx('decoration-one')} src={images.decoration7} alt="icon" />
                        <img className={cx('decoration-two')} src={images.decoration7} alt="icon" />
                        <img className={cx('decoration-three')} src={images.decoration7} alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
