import classNames from 'classnames/bind';
import styles from './Users.module.scss';
import { useEffect, useState } from 'react';
import instance from '~/api/axios';

const cx = classNames.bind(styles);

function Users() {
    const [users, setUsers] = useState([]);

    // const axiosPrivate = useAxiosPrivate();

    const fetchData = async () => {
        try {
            const response = await instance.get('/user/getAll', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
                withCredentials: true,
            });
            console.log(response);

            if (response?.data) {
                setUsers(response.data);
            }
        } catch (error) {
            console.log('fetch data faild!');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Users List: </h2>
                {users?.length ? (
                    <ul>
                        {users.map((user, index) => (
                            <li key={index}>{user?.username} </li>
                        ))}
                    </ul>
                ) : (
                    <p>No user to display.</p>
                )}
            </div>
        </div>
    );
}

export default Users;
