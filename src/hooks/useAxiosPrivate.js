import { axiosPrivate } from '~/api/axios';
import useAuth from './useAuth';
import { useEffect } from 'react';

const useAxiosPrivate = () => {
    // const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config) => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }

                return config;
            },
            (error) => Promise.reject(error),
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            (response) => response,
            // (error) => {
            //     const preRequest = error?.config;
            //     if (error?.response?.status === 403 && !preRequest?.sent && auth?.accessToken) {
            //         preRequest.sent = true;
            //         //const newAccessToken = await refresh();
            //         const accessToken = auth.accessToken;
            //         preRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            //         // preRequest.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001';
            //         // preRequest.headers['Access-Control-Allow-Credentials'] = true;
            //         // preRequest.headers['Access-Control-Allow-Header'] = 'Content-Type, x-requested-with, Authorization';

            //         return axiosPrivate(preRequest);
            //     }
            // },
        );
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };
    }, [auth]);

    return axiosPrivate;
};

export default useAxiosPrivate;
