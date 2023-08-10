import axios from 'axios';

import useAuth from '~/hooks/useAuth';

const BASE_URL = 'http://localhost:8080/api/v1';

const instance = axios.create({
    baseURL: BASE_URL,
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': 'http://localhost:3000',
    //     'Access-Control-Allow-Credentials': true,
    // },

    //withCredentials
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
});

axiosPrivate.interceptors.request.use(
    function (config) {
        const { auth } = useAuth();
        if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }

        console.log('Config: ' + config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axiosPrivate.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default instance;
