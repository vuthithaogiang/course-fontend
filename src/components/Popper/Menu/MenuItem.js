import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ className, item, onClick }) {
    const handleLogout = async () => {
        const token = localStorage.getItem('accessToken');

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', 'Bearer ' + token);
        myHeaders.append('Access-Control-Allow-Origin', '*');

        var formdata = new FormData();

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
            // mode: 'no-cors',
        };

        fetch('http://localhost:8080/api/v1/auth/logout', requestOptions)
            .then((response) => {
                if (response.ok) {
                    localStorage.removeItem('accessToken');
                    return response.json();
                }
                throw new Error(response.status);
            })
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error));
    };
    const classes = cx('menu-item', {
        [className]: className,
        separate: item.separate,
    });

    if (!item.separate) {
        return (
            <Button className={classes} leftIcon={item.icon} to={item.to} onClick={onClick}>
                {item.title}
            </Button>
        );
    } else {
        return (
            <Button className={classes} leftIcon={item.icon} to={item.to} onClick={handleLogout}>
                {item.title}
            </Button>
        );
    }
}

export default MenuItem;
